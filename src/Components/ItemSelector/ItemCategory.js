import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import ItemListItem from './ItemListItem';
import armors from '../../Data/ShadowPanther_ArmorsPVE.json';

const heads = armors.HEAD;
const necks = armors.NECK;
const shoulders = armors.SHOULDER;
const chests = armors.CHEST;
const backs = armors.BACK;
const wrists = armors.WRIST;
const gloves = armors.HANDS;
const waists = armors.WAIST;
const legs = armors.LEGS;
const boots = armors.FEET;
const rings = armors.FINGER;
const trinkets = armors.TRINKET;
const ranged = armors.RANGED;

export default class ItemCategory extends React.Component {
  itemForSlot = (slot, items) => {
    return (<ItemListItem key={"list_item_"+slot} itemName={slot} items={items}/>)
  }

  render(){
    return (
        <div>
            <ListGroup>
              {this.itemForSlot("HEAD", heads)}
              {this.itemForSlot("NECK", necks)}
              {this.itemForSlot("SHOULDER", shoulders)}
              {this.itemForSlot("CHEST", chests)}
              {this.itemForSlot("BACK", backs)}
              {this.itemForSlot("WRIST", wrists)}
              {this.itemForSlot("HANDS", gloves)}
              {this.itemForSlot("WAIST", waists)}
              {this.itemForSlot("LEGS", legs)}
              {this.itemForSlot("FEET", boots)}
              {this.itemForSlot("FINGER1", rings)}
              {this.itemForSlot("FINGER2", rings)}
              {this.itemForSlot("TRINKET1", trinkets)}
              {this.itemForSlot("TRINKET2", trinkets)}
              {this.itemForSlot("RANGED", ranged)}
            </ListGroup>
        </div>
    );
  }
}