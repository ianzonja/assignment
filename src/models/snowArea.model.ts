import { NationalitiesMap } from "src/constants/nationalities.constants";
import { BattleGround } from "src/interfaces/battleground.abstract";
import { Army } from "./army.model";

export class SnowArea implements BattleGround{
    name: string = 'Moscow';
    country: string = 'Russia';
    effect: string = 'Cold';

    onBattleGroundEffect(army: Army): Army {
        let infantryDamage = -20;
        let infantryHealth = -20;
        let artilleryHealth = -50;
        let airforceDamage = 30;
        if(army.getNationality === NationalitiesMap.get(this.country)){
            infantryDamage = infantryDamage + 50;
        }
        army.infantryUnits.forEach( unit => {
            unit.damage = unit.damage + infantryDamage;
            unit.health = unit.health + infantryHealth;
        });
        army.artilleryUnits.forEach( unit => {
            unit.health = unit.health + artilleryHealth;
        })
        army.airforceUnits.forEach( unit =>{
            unit.damage = unit.damage + airforceDamage;
        });
        return army;
    }
}