import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import ItemListItem from './ItemListItem';

import { weaponsFor, weapon, enchant } from '../../Data/DataParser';

const INITIAL_STATE = {
  selectedValues: [
    {slot: "MAIN_HAND", item: null, enchant: null},
    {slot: "OFFHAND", item: null, enchant: null}
  ],
};
export default class WeaponCategory extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = INITIAL_STATE;

    this.enchantSelected = this.enchantSelected.bind(this);
    this.itemSelected = this.itemSelected.bind(this);
  }

  onClearValues = () => {
    this.setState({ selectedValues: [] });
  };

  onResetArray = () => {
    this.setState({ ...INITIAL_STATE });
  };

  enchantSelected = (enchantString) => {
    const enchantSpecs = enchantString.split("-");
    const slot = enchantSpecs[0];
    const enchantId = enchantSpecs[1];
    console.log(slot + "-" + enchantId);

    this.setState(state => {
      const values = state.selectedValues.map((valueObject, j) => {
        if(valueObject.slot === slot){
          valueObject.enchant = enchantId
        }
        return valueObject
      })

      return {
        values
      };
    }, () => { this.calculate() });
  }

  itemSelected = (itemString) => {
    const itemSpecs = itemString.split("-");
    const slot = itemSpecs[0];
    const itemId = itemSpecs[1];
    
    this.setState(state => {
      const values = state.selectedValues.map((valueObject, j) => {
        if(valueObject.slot === slot){
          valueObject.item = itemId
        }
        return valueObject
      })

      return {
        values
      };
    }, () => { this.calculate() });
  }

  calculate(){

    var maep = 0;
    var hit = 0;
    var crit = 0;

    const values = this.state.selectedValues.map(valueObject => {
      const item = weapon(valueObject.slot, valueObject.item);
      if(item !== undefined){
        maep = maep + Number(item.MAEP);
        hit = hit + Number(item.HIT.split("%")[0]);
        crit = crit + Number(item.CRIT.split("%")[0]);
      }

      if(valueObject.enchant !== null){
        const ench = enchant(valueObject.slot, valueObject.enchant);
        if(ench !== undefined){
          maep = maep + Number(ench.MAEP);
        }
      }
    })

    const stats = {
      MAEP: maep,
      HIT: hit,
      CRIT: crit,
    }

    this.props.onEquip(stats)
  }

  itemForSlot = (slot, weaponId, enchantId) => {
    const itemsFromParser = weaponsFor(slot);
    var itemName = slot;
    var enchName = slot;

    var itemForID = weapon(slot, weaponId);
    if(itemForID !== undefined){
      itemName = itemForID.NAME;
    }

    if(enchantId !== null){
      var enchantForID = enchant(slot, enchantId);
      if(enchantForID !== undefined){
        enchName = enchantForID.NAME;
      }
    }
    
    return (
  <ItemListItem key={"list_item_"+slot} itemName={itemName} items={itemsFromParser} itemSelected={this.itemSelected} slot={slot} enchantName={ enchName } enchantSelected={this.enchantSelected}/>)
  }

  render(){
    return (
        <div>
            <ListGroup>
              {this.state.selectedValues.map( valueItem => this.itemForSlot(valueItem.slot, valueItem.item, valueItem.enchant))}
            </ListGroup>
        </div>
    );
  }
}