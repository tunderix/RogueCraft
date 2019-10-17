import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import ItemListItem from './ItemListItem';
import armors from '../../Data/ShadowPanther_ArmorsPVE.json';

import itemSlots from '../../Data/ItemSlot';
import itemsForSlot, { item } from '../../Data/DataParser';

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
    console.log(slot);
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
    });
  }

  itemForSlot = (slot, itemId) => {
    const itemsFromParser = itemsForSlot(slot);
    var itemName = slot;
    var itemForID = item(slot, itemId);
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