import { Unit } from "../abstracts/unit.abstract";
import { Army } from "./army.model";

export class Artillery extends Unit{
    type: string = 'Artillery unit';
    health: number = 200;
    damage: number = 200;
    defence: number = 100;

    attackEnemy(enemyArmy: Army){
        if(enemyArmy.getArtilleryUnits.length > 0 && enemyArmy.getTotalArtilleryHealth > 0){
            enemyArmy.totalArtilleryHealth = enemyArmy.totalArtilleryHealth + enemyArmy.getArtilleryUnits[0].defence - this.damage;
        }
        else if(enemyArmy.getInfantryUnits.length > 0 && enemyArmy.getTotalInfantryHealth > 0){
            enemyArmy.totalInfrantryHealth = enemyArmy.totalInfrantryHealth + enemyArmy.getInfantryUnits[0].defence - this.damage;
        }
    }
}