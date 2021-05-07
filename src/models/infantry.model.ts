import { Unit } from "../abstracts/unit.abstract";
import { Army } from "./army.model";

export class Infantry extends Unit{
    type = 'Soldier';
    health: number = 50;
    damage: number = 50;
    defence: number = 0;

    attackEnemy(enemyArmy: Army){
        if(enemyArmy.getInfantryUnits.length > 0 && enemyArmy.getTotalInfantryHealth > 0){
            enemyArmy.totalInfrantryHealth = enemyArmy.totalInfrantryHealth + enemyArmy.getInfantryUnits[0].defence - this.damage;
        }
    }
}