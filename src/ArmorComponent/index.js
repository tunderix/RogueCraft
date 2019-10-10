import React from 'react';
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
    //var chests = armors["CHEST"];
    console.log(phase);
    if(phase){
      //chests = armors["FEET"];
    }
    //this.setState({armors: chests});
  }

  armorComponent(armor){
    const componentKey = "armor." + armor.NAME; 
    return <li key={componentKey}>{armor.NAME}</li>
  }

  render(){
    return (
        <div className={"armor"} key="Armors">
          <ul>
            <SelectionPanel onPhaseChanged={this.onPhaseChanged}></SelectionPanel>
            {this.state.armors.map((armor) => {
              return this.armorComponent(armor)
            })}
          </ul>
        </div>
    );
  }
}