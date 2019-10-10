import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import ItemListItem from './ItemListItem';

export default class ItemCategory extends React.Component {
  state = {
    armors: []
  }

  componentDidMount(){
      this.getArmors();
  }

  getArmors(){

    fetch('../../Data/ShadowPanther_ArmorsPVE.json')
    .then((response) => 
        response.json()
    )
    .then((armors)=> {
        this.setState({
            armors:armors
        })
    })
  }

  itemForSlot = (slot) => {
    return (<ItemListItem  key={"list_item_"+slot} itemName={slot} />)
  }

  render(){
    return (
        <div>
            <h1>
                {this.props.title}
            </h1>
            <ListGroup>
                {this.state.armors.map(armor => console.log("armor: " + armor))}
            </ListGroup>
        </div>
    );
  }
}