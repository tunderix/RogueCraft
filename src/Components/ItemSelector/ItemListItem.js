import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import { enchantSlots } from '../../Data/Slots';
import { enchantsFor } from '../../Data/DataParser';
export default class ItemListItem extends React.Component {


  onItemClick(item){
    console.log("item clicked" + item);
  }

  armor(item, index) {
    return (<Dropdown.Item key={"dd_item_"+item.NAME} onSelect={this.props.itemSelected} eventKey={ this.props.slot + "-" + index}>{item.NAME + " - " + item.MAEP}</Dropdown.Item>)
  }

  

  enchantDropdown() {

    const enchants = enchantsFor(this.props.slot);

    return (<Dropdown style={{ float: "right" }}>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        {this.props.enchantName}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Header>{this.props.enchantName}</Dropdown.Header>
        {enchants.map((ench, index) => {
          return (<Dropdown.Item key={"dd_ench_"+ench.NAME} onSelect={this.props.enchantSelected} eventKey={this.props.slot + "-" + index}>{ ench.NAME + " - " + ench.MAEP }</Dropdown.Item>)
        })}
      </Dropdown.Menu>
    </Dropdown>);
  }

  hasEnchant(){
    var found = false; 
    enchantSlots.map(eSlot => {
      console.log( eSlot + "-" + this.props.slot);
      if(eSlot === this.props.slot){ found = true };
    })
    return found;
  }

  render(){
    return (
        <ListGroup.Item style={{paddingBottom: 0, paddingTop: 0}}>
          
          <Dropdown style={{ float: "left" }}>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              {this.props.itemName}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Header>{this.props.itemName}</Dropdown.Header>
              {this.props.items.map((item, key) => this.armor(item, key))}
            </Dropdown.Menu>
          </Dropdown>

          {( this.hasEnchant()
              ? this.enchantDropdown()   
              : null
          )}
        </ListGroup.Item>
    );
  }
}