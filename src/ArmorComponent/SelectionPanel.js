import React from 'react';

export default class SelectionPanel extends React.Component {
  state = {
    PHASE: true
  }

  constructor(props) {
    super(props);
    this.togglePhase = this.togglePhase.bind(this);
  }

  togglePhase(){
    const phase = this.state.PHASE;

    this.setState({PHASE: !phase})
    this.props.onPhaseChanged(this.state.PHASE);
  }

  render(){
    return (
        <div>
            <button onClick={this.togglePhase}>PHASE</button>
        </div>
    );
  }
}