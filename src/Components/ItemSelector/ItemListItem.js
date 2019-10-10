import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

export default class ItemListItem extends React.Component {
  state = {
    versions: []
  };

  render(){
    return (
        <ListGroup.Item>
            {this.props.itemName}
        </ListGroup.Item>
    );
  }
}