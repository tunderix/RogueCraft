import React from 'react';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';

const phases = [1,2,3,4,5];

export default class PhasePicker extends React.Component {

  render(){
    return (
      <Dropdown style={{ float: "left", position: 'absolute', left: 20 }}>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Selected Phase: 1
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Header>PHASE</Dropdown.Header>
          {phases.map(phase => {
            return (<Dropdown.Item>{phase}</Dropdown.Item>)
          }
          )}
        </Dropdown.Menu>
    </Dropdown>
    );
  }
}