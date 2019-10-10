import React from 'react';
import Row from 'react-bootstrap/Row';
import { EquipmentSelection, Damage, ItemSelector } from '../';
export default class Content extends React.Component {
  state = {
    versions: []
  };

  render(){
    return (
        <Row>
          <ItemSelector></ItemSelector>
          <EquipmentSelection></EquipmentSelection>
          <Damage></Damage>
        </Row>
    );
  }
}