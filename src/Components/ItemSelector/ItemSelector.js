import React from 'react';
import Col from 'react-bootstrap/Col';
import ItemCategory from "./ItemCategory";
import itemSlots from "../../Data/ItemSlot";
export default class ItemSelector extends React.Component {
  

  category = (slot) => {
    return (
    <ItemCategory key={"cat_"+slot} title={slot}>
    </ItemCategory>
      )
  };

  render(){
    return (
        <Col>
          <ItemCategory key={"cat_items"}>
          </ItemCategory>
        </Col>
    );
  }
}