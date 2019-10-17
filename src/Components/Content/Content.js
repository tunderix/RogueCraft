import React from 'react';
import Row from 'react-bootstrap/Row';
import { EquipmentSelection, Damage, ItemSelector } from '../';

const INITIAL_STATE = {
  MAEP: 0,
  HIT: 0,
  CRIT: 0,
};

export default class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = INITIAL_STATE;
    this.onEquip = this.onEquip.bind(this);
  }

  onEquip(stats){
    this.setState(stats);
  }

  render(){
    return (
        <Row>
          <ItemSelector onEquip={this.onEquip}></ItemSelector>
          <EquipmentSelection></EquipmentSelection>
          <Damage maep={this.state.MAEP} hit={this.state.HIT} crit={this.state.CRIT}></Damage>
        </Row>
    );
  }
}