import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

export default class CharacterLevelPicker extends React.Component {

  render(){
    return (
      <InputGroup className="mb-3" style={{ float: "left", position: 'absolute', right: 10, width: 110 }}>
        <InputGroup.Prepend>
          <InputGroup.Text id="basic-addon1">Level</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          placeholder="60"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
    );
  }
}