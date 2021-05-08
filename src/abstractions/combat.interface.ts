import { Army } from 'src/models/army.model';
import { Unit } from './unit.abstract';

export interface Combat {
  findTarget(unit: Unit, enemyArmy: Army): Unit;
  attackEnemy(attacker: Unit, target: Unit): Unit;
  refreshCombatStatus(unit: Unit, army: Army): Army;
  performCombat(army1: Army, army2: Army): string;
}
