import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Dropdown from 'react-bootstrap/Dropdown';

export default class ItemListItem extends React.Component {


  onItemClick(item){
    console.log("item clicked" + item);
  }

  armor(item, index) {
    return (<Dropdown.Item key={"dd_item_"+item.NAME} onSelect={this.props.itemSelected} eventKey={this.props.slot + "-" + index}>{item.NAME + " - " + item.MAEP}</Dropdown.Item>)
  }

  render(){
    return (
        <ListGroup.Item>
          
          <Dropdown style={{ float: "left" }}>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              {this.props.itemName}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Header>{this.props.itemName}</Dropdown.Header>
              {this.props.items.map((item, key) => this.armor(item, key))}
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown style={{ float: "right" }}>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Ench
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item>Item 1</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </ListGroup.Item>
    );
  }
}