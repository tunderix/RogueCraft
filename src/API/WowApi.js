import React from 'react';
import Col from 'react-bootstrap/Col';

export default class WoWAPI {
    fetchItem(itemName){
        fetch('https://classicdb.ch/?search=' + encodeURI(itemName))
        .then(response => console.log("RESPONSE JSON" + response))
        .then(data => console.log("RESPONSE DATA" + data));
    }
}