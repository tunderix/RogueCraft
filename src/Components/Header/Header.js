import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class Header extends React.Component {
  state = {
    versions: []
  };

  render(){
    return (
        <Row>
            <Col xs lg="2">
                VERSION
            </Col>
            <Col md="auto">Rogue Calc</Col>
            <Col xs lg="2">
                SOME
            </Col>
        </Row>
    );
  }
}