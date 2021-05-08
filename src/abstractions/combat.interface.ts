import { Unit } from "src/abstractions/unit.abstract";
import { Army } from "src/models/army.model";

export interface Combat{
    findTarget(unit: Unit, enemyArmy: Army): Unit;
    attackEnemy(attacker: Unit, target: Unit): Unit;
    refreshCombatStatus(unit: Unit, army: Army): Army;
    performCombat(army1: Army, army2: Army): string;
}