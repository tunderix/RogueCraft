import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { armorsOfType } from "../../Data/DataParser";

export default class EquipmentSelection extends React.Component {
  state = {
    ARMORS: [],
    SLOTS: [
      "HEAD",
      "SHOULDER",
      "CHEST",
      "WRIST",
      "HANDS",
      "WAIST",
      "LEGS",
      "BOOTS",
      "RING_1",
      "RING_2",
      "TRINKET_1",
      "TRINKET_2",
      "RANGED"
    ]
  };

  
  DropdownItemFor(armors){
    if(armors !== undefined){
      armors.forEach(armor => {
        console.log("armor: " + armor);
        return (
          <Dropdown.Item key="armor">
            {armor.NAME}
          </Dropdown.Item>
        )
      })
    }
  }



  listComponentFor(slot) {
    var armors = armorsOfType(slot)
    console.log("Slot: " + slot)
    return (
    <Row key={"row_" + slot}>
      <DropdownButton key={"dd_key_" + slot} title={"" + slot}>
        {
            this.DropdownItemFor(armors)
        }
      </DropdownButton>
    </Row>);
  }

  render() {
    const items = this.state.SLOTS;

    return (
      <Col>
      
      </Col>
    );
  }
}
