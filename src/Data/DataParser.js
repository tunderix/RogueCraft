import armors from './ShadowPanther_ArmorsPVE.json';
import weapons from './ShadowPanther_WeaponsPVE.json';
import enchants from './ShadowPanther_Enchants.json';

import itemSlots, { enchantSlots, weaponSlots } from './Slots';
import { is } from '@babel/types';
import { isFulfilled } from 'q';

export function idFor(slot){
    if(slot === "RING_1" || slot === "RING_2"){
        return "FINGER";
    }else if(slot === "TRINKET_1" || slot === "TRINKET_2"){
        return "TRINKET";
    }else {
        return slot;
    }
};

function hasSlot(slots, slot){
    var has = false; 
    slots.map( eSlot => {
        if(eSlot === slot){
            has = true;
        }
    });
    return has; 
};


export function itemById(slot, id){
    if(hasSlot(itemSlots, slot)){
        const slotID = idFor(slot);
        return armors[slotID][id];
    }
}

export function weapon(slot, id){
    if(hasSlot(weaponSlots, slot)){
        return weapons[slot][id];
    }
}

export function enchant(slot, id){

    if(hasSlot(enchantSlots, slot)){
        return enchants[slot][id];
    }

}

export function weaponsFor(slot){
    return weapons[slot];
}

export function enchantsFor(slot){
    return enchants[slot];
}

export default function itemsForSlot(slot) {
    return armors[idFor(slot)];
}

