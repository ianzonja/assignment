import { NationalitiesMap, Nations } from "src/constants/nationalities.constants";
import { BattleGround } from "src/interfaces/battleground.abstract";
import { Army } from "./army.model";

export class DesertArea implements BattleGround{
    name: string = 'Sahara';
    country: string = Nations.EGYPT;
    effect: string = 'Desert storm';

    onBattleGroundEffect(army: Army): Army {
        let infantryDamage = -20;
        let infantryHealth = -10;
        let artilleryDamage = 20;
        let airforceDamage = -50;
        if(army.getNationality === NationalitiesMap.get(this.country)){
            infantryDamage = infantryDamage + 50;
        }
        army.infantryUnits.forEach( unit => {
            unit.damage = unit.damage + infantryDamage;
            unit.health = unit.health + infantryHealth;
        });
        army.artilleryUnits.forEach( unit => {
            unit.damage = unit.damage + artilleryDamage;
        })
        army.airforceUnits.forEach( unit =>{
            unit.damage = unit.damage + airforceDamage;
        });
        return army;
    }
}