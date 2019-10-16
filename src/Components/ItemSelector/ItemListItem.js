import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Dropdown from 'react-bootstrap/Dropdown';

export default class ItemListItem extends React.Component {

  onItemClick(item, index){
    console.log("item clicked" + item);
  }

  armor(item, index) {
    return (<Dropdown.Item key={"dd_item_"+item.NAME} onClick={this.onItemClick}>{item.NAME}</Dropdown.Item>)
  }

  render(){
    return (
        <ListGroup.Item>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              {this.props.itemName}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {this.props.items.map((item, key) => this.armor(item, key))}
            </Dropdown.Menu>
          </Dropdown>
            
        </ListGroup.Item>
    );
  }
}