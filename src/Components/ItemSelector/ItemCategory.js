import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import ItemListItem from './ItemListItem';
import armors from '../../Data/ShadowPanther_ArmorsPVE.json';

import itemSlots from '../../Data/ItemSlot';
import itemsForSlot from '../../Data/DataParser';

export default class ItemCategory extends React.Component {
  itemForSlot = (slot) => {
    const itemsFromParser = itemsForSlot(slot);
    return (
    <ItemListItem key={"list_item_"+slot} itemName={slot} items={itemsFromParser} />)
  }

  render(){
    return (
        <div>
            <ListGroup>
              {itemSlots.map( slot => this.itemForSlot(slot))}
            </ListGroup>
        </div>
    );
  }
}