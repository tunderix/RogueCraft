import React from 'react';

export default class SelectionPanel extends React.Component {
  state = {
    PHASE: true
  }
  constructor(props) {
    super(props)
    
    this.state = {
      PHASE: true
    }
  }

  togglePhase(){
    const phase = !this.state.PHASE;
    //this.setState({PHASE: {phase}});
    this.props.onPhaseChanged(phase);
  }

  render(){
    return (
        <div>
            <button onClick={this.togglePhase()}>PHASE</button>
        </div>
    );
  }
}