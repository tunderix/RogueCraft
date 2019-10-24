import React from 'react';
import Col from 'react-bootstrap/Col';
import style from './Style';

export default class Damage extends React.Component {
  state = {
    versions: []
  };

  render(){
    return (
        <Col>
          <ul style={style}>
            <li style={{padding: 10}}>MAEP: {this.props.maep}</li>
            <li style={{padding: 10}}>HIT: {this.props.hit}</li>
            <li style={{padding: 10}}>CRIT: {this.props.crit}</li>
          </ul>
        </Col>
    );
  }
}