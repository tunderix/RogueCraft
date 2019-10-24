import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { EquipmentSelection, Damage, ItemSelector } from '../';
import 'react-tabs/style/react-tabs.css';
import style from './Style'
import Talents from '../Talents'

export default class TabPanels extends React.Component {
    constructor(props) {
      super(props);
  
      this.tabs = {
        "Equipment": { 
            img: "eec97ae821295f42e3969e082be11fac.png", color: "IndianRed",
            component: (
            <ItemSelector onEquip={this.props.onEquip}></ItemSelector>)
        },
        "Talents": { 
            img: "eec97ae821295f42e3969e082be11fac.png", color: "IndianRed",
            component: (<Talents></Talents>)
        },
        "Buffs": { 
            img: "eec97ae821295f42e3969e082be11fac.png", color: "IndianRed",
            component: (<div></div>)
        },
        "Opponent": { 
            img: "eec97ae821295f42e3969e082be11fac.png", color: "IndianRed",
            component: (<div></div>)
        },
        "Calculations": { 
            img: "eec97ae821295f42e3969e082be11fac.png", color: "IndianRed",
            component: (<div></div>)
        }
      };
    }
  
    render() {
      const tabs = [];
      const tabPanels = [];
  

      Object.keys(this.tabs).forEach(name => {
        const { img, text: color, component } = this.tabs[name];
  
        tabs.push(
          <Tab style={{ color, padding:'10px' }} className="selector-tab" key={name}>
            {name}
          </Tab>
        );
  
        tabPanels.push(
          <TabPanel style={{ color }} className="selector-tab-panel" key={name}>
          {(component)}
          </TabPanel>
        );
      });
  
      return (
        <div style={{flex: 1}}>
          <Tabs
            selectedTabClassName="selector-tab--selected"
            selectedTabPanelClassName="selector-tab-panel--selected"
          >
            <TabList style={style} className="selector-tab-list">{tabs}</TabList>
            {tabPanels}
          </Tabs>
        </div>
      );
    }
  }