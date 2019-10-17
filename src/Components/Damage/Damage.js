import React from 'react';
import Col from 'react-bootstrap/Col';
export default class Damage extends React.Component {
  state = {
    versions: []
  };

  render(){
    return (
        <Col>
          <p>MAEP: {this.props.maep}</p>
          <p>HIT: {this.props.hit}</p>
          <p>CRIT: {this.props.crit}</p>
        </Col>
    );
  }
}