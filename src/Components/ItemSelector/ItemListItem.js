import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Dropdown from 'react-bootstrap/Dropdown';

export default class ItemListItem extends React.Component {


  onItemClick(item){
    console.log("item clicked" + item);
  }

  armor(item, index) {
    return (<Dropdown.Item key={"dd_item_"+item.NAME} onSelect={this.props.itemSelected} eventKey={this.props.itemName + "-" + index}>{item.NAME}</Dropdown.Item>)
  }

  render(){
    return (
        <ListGroup.Item>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              {this.props.itemName}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Header>{this.props.itemName}</Dropdown.Header>
              {this.props.items.map((item, key) => this.armor(item, key))}
            </Dropdown.Menu>
          </Dropdown>
            
        </ListGroup.Item>
    );
  }
}