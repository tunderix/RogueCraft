import armors from './ShadowPanther_ArmorsPVE.json';
import weapons from './ShadowPanther_WeaponsPVE.json';
import enchants from './ShadowPanther_Enchants.json';
import { enchantSlots } from './Slots';
import { weaponSlots } from './Slots';

export function idFor(slot){
    if(slot === "RING_1" || slot === "RING_2"){
        return "FINGER";
    }else if(slot === "TRINKET_1" || slot === "TRINKET_2"){
        return "TRINKET";
    }else {
        return slot;
    }
}

export function itemById(slot, id){
    const slotID = idFor(slot);
    return armors[slotID][id];
}

export function weapon(slot, id){
    return weapons[slot][id];
}

export function enchant(slot, id){
    return enchants[slot][id];
    
}

export function enchantsFor(slot){
    return enchants[slot];
}

export default function itemsForSlot(slot) {
    return armors[idFor(slot)];
}

