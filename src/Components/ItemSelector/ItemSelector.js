import React from 'react';
import Col from 'react-bootstrap/Col';
import ItemCategory from "./ItemCategory";
import itemSlots from "../../Data/ItemSlot";
export default class ItemSelector extends React.Component {
  
  render(){
    return (
        <Col>
          <ItemCategory onEquip={this.props.onEquip} key={"cat_items"}>
          </ItemCategory>
        </Col>
    );
  }
}