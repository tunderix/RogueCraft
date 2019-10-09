import React from 'react';
import Row from 'react-bootstrap/Row';
import { EquipmentSelection, Damage } from '../';
export default class Content extends React.Component {
  state = {
    versions: []
  };

  render(){
    return (
        <Row>
            <EquipmentSelection></EquipmentSelection>
            <Damage></Damage>
        </Row>
    );
  }
}