import armors from './ShadowPanther_ArmorsPVE.json';

const weaponIds = [
    {"WEAPON_M":""},
    {"WEAPON_O":""}
  ];

export function idFor(slot){
    if(slot === "RING_1" || slot === "RING_2"){
        return "FINGER";
    }else if(slot === "TRINKET_1" || slot === "TRINKET_2"){
        return "TRINKET";
    }else {
        return slot;
    }
}

export function item(slot, id){
    const slotID = idFor(slot);
    return armors[slotID][id];
}

export default function itemsForSlot(slot) {
    return armors[idFor(slot)];
}