import { Unit } from "../abstracts/unit.abstract";
import { Army } from "./army.model";

export class Airforce extends Unit{
    type: string = 'Airforce unit';
    health: number = 150;
    damage: number = 300;
    defence: number = 100;

    attackEnemy(enemyArmy: Army){
        if(enemyArmy.getAirforceUnits.length > 0 && enemyArmy.getTotalAirforceHealth > 0){
            enemyArmy.totalAirforceHealth = enemyArmy.totalAirforceHealth + enemyArmy.getAirforceUnits[0].defence - this.damage;
        }
        else if(enemyArmy.getArtilleryUnits.length > 0 && enemyArmy.getTotalArtilleryHealth > 0){
            enemyArmy.totalArtilleryHealth = enemyArmy.totalArtilleryHealth + enemyArmy.getArtilleryUnits[0].defence - this.damage;
        }
        else if(enemyArmy.getInfantryUnits.length > 0 && enemyArmy.getTotalInfantryHealth > 0){
            enemyArmy.totalInfrantryHealth = enemyArmy.totalInfrantryHealth + enemyArmy.getInfantryUnits[0].defence - this.damage;
        }
    }
}