import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { subtletyTalents, combatTalents, assassinationTalents } from './talentData';
import TalentInput from './TalentInput';

export default class TalentSelector extends React.Component {
  
  render(){
    return (
        <Row>
            <Col>
            {assassinationTalents.map(talent => {
              return (<TalentInput name={talent.name} maxCount={talent.maxPoints}></TalentInput>)
            })}
            </Col>
            <Col>
            {combatTalents.map(talent => {
              return (<TalentInput name={talent.name} maxCount={talent.maxPoints}></TalentInput>)
            })}
            </Col>
            <Col>
            {subtletyTalents.map(talent => {
              return (<TalentInput name={talent.name} maxCount={talent.maxPoints}></TalentInput>)
            })}
            </Col>
        </Row>
    );
  }
}