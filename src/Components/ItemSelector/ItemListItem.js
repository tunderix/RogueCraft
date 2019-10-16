import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Dropdown from 'react-bootstrap/Dropdown';

export default class ItemListItem extends React.Component {
  state = {
    versions: []
  };

  render(){
    return (
        <ListGroup.Item>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              {this.props.itemName}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {this.props.items.map(item => {
                return (<Dropdown.Item key={"dd_item_"+item.NAME} >{item.NAME}</Dropdown.Item>)
              })}
            </Dropdown.Menu>
          </Dropdown>
            
        </ListGroup.Item>
    );
  }
}