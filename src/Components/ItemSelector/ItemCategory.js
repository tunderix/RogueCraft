import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import ItemListItem from './ItemListItem';
import armors from '../../Data/ShadowPanther_ArmorsPVE.json';

import itemSlots from '../../Data/ItemSlot';
import itemsForSlot, { itemById } from '../../Data/DataParser';

const INITIAL_STATE = {
  selectedValues: [
    {slot: "HEAD", item: null},
    {slot: "SHOULDER", item: null},
    {slot: "CHEST", item: null},
    {slot: "WRIST", item: null},
    {slot: "HANDS", item: null},
    {slot: "WAIST", item: null},
    {slot: "LEGS", item: null},
    {slot: "FEET", item: null},
    {slot: "RING_1", item: null},
    {slot: "RING_2", item: null},
    {slot: "TRINKET_1", item: null},
    {slot: "TRINKET_2", item: null},
    {slot: "RANGED", item: null}
  ],
};
export default class ItemCategory extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = INITIAL_STATE;

    this.itemSelected = this.itemSelected.bind(this);
  }

  onClearValues = () => {
    this.setState({ selectedValues: [] });
  };

  onResetArray = () => {
    this.setState({ ...INITIAL_STATE });
  };

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
      const item = itemById(valueObject.slot, valueObject.item);
      if(item !== undefined){
        maep = maep + Number(item.MAEP);
        hit = hit + Number(item.HIT.split("%")[0]);
        crit = crit + Number(item.CRIT.split("%")[0]);
      }
    })

    const stats = {
      MAEP: maep,
      HIT: hit,
      CRIT: crit,
    }

    this.props.onEquip(stats)
  }

  itemForSlot = (slot, itemId) => {
    const itemsFromParser = itemsForSlot(slot);
    var itemName = slot;
    var itemForID = itemById(slot, itemId);
    if(itemForID !== undefined){
      console.log(itemForID);
      itemName = itemForID.NAME;
    }
    return (
    <ItemListItem key={"list_item_"+slot} itemName={itemName} items={itemsFromParser} itemSelected={this.itemSelected} />)
  }

  render(){
    return (
        <div>
            <ListGroup>
              {this.state.selectedValues.map( valueItem => this.itemForSlot(valueItem.slot, valueItem.item))}
            </ListGroup>
        </div>
    );
  }
}