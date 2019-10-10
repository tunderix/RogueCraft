import armors from './ShadowPanther_ArmorsPVE';
import weapons from './ShadowPanther_WeaponsPVE';

  const weaponIds = [
    {"WEAPON_M":""},
    {"WEAPON_O":""}
  ];

function idFor(slot){
    if(slot === "RING_1" || slot === "RING_2"){
        return "FINGER";
    }else if(slot === "TRINKET_1" || slot === "TRINKET_2"){
        return "TRINKET";
    }else {
        return slot;
    }
}

export function armorsOfType(slot){
    return armors[idFor(slot)];
}

