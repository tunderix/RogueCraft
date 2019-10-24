
import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default class TalentInput extends React.Component {
  
  render(){
    const {name, maxCount} = this.props;
    var dds = [];
    for (var i = 0; i < maxCount; i++) {
        dds.push(<Dropdown.Item>{i+1}</Dropdown.Item>)
    }

    return (
        <Row>
        <Col xs lg="1">
            <p style={{float: 'left'}}>{3}</p>
        </Col>
        <Col>
            <Dropdown style={{float: 'left'}}>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                {name}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    {dds}
                </Dropdown.Menu>
            </Dropdown>
        </Col>
        </Row>
    );
  }
}