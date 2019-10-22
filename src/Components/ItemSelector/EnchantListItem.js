import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Dropdown from 'react-bootstrap/Dropdown';

export default class ItemListItem extends React.Component {

  render(){
    return (
        <ListGroup.Item>
          <Dropdown>
            <Dropdown.Toggle>
              ENCHANT
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Header>Enchant</Dropdown.Header>
              <Dropdown.Item>Enchant 1</Dropdown.Item>
              <Dropdown.Item>Enchant 2</Dropdown.Item>
              <Dropdown.Item>Enchant 3</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

        </ListGroup.Item>
    );
  }
}