import React from 'react';
import armors from '../ShadowPanther_ArmorsPVE.js';
import SelectionPanel from './SelectionPanel'
export default class ArmorComponent extends React.Component {
  state = {
    armors: []
  };
  constructor(props) {
    super(props);
    this.onPhaseChanged = this.onPhaseChanged.bind(this);
  }

  onPhaseChanged(phase){
    const chests = armors["CHEST"];
    this.setState({armors: chests});
  }

  render(){
    return (
        <div>
            <SelectionPanel onPhaseChanged={this.onPhaseChanged}></SelectionPanel>
            {this.state.armors.map((armor) => {
                return <p>{armor.NAME}</p>
            })}
        </div>
    );
  }
}