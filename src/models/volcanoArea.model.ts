import { NationalitiesMap } from "src/constants/nationalities.constants";
import { BattleGround } from "src/interfaces/battleground.abstract";
import { Army } from "./army.model";

export class VolcanoArea implements BattleGround{
    name: string = 'Hokkaido';
    country: string = 'Japan';
    effect: string = 'Earthquake';

    onBattleGroundEffect(army: Army): Army {
        let infantryHealth = -30;
        let artilleryDefence = -50;
        let airforceDamage = 25;
        let infantryDamage = -5;
        if(army.getNationality === NationalitiesMap.get(this.country)){
            infantryDamage = infantryDamage + 50;
        }
        army.infantryUnits.forEach( unit => {
            unit.damage = unit.damage + infantryDamage;
            unit.health = unit.health + infantryHealth;
        });
        army.artilleryUnits.forEach( unit => {
            unit.defence = unit.defence + artilleryDefence;
        })
        army.airforceUnits.forEach( unit =>{
            unit.damage = unit.damage + airforceDamage;
        });
        return army;
    }
}