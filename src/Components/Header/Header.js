import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PhasePicker from './PhasePicker';
import CharacterLevelPicker from './CharacterLevelPicker';

export default class Header extends React.Component {
  state = {
    versions: []
  };

  render(){
    return (
        <Row style={{ alignItems: 'center', justifyContent: 'center' }}>
          <PhasePicker></PhasePicker>
          <h1>RogueCraft by Ioni</h1>
          <CharacterLevelPicker></CharacterLevelPicker>
        </Row>
    );
  }
}