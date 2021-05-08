import { Unit } from 'src/abstractions/unit.abstract';
import { Combat } from 'src/abstractions/combat.interface';
import { Army } from 'src/models/army.model';

export class CombatImplementor implements Combat {
  findTarget(unit: Unit, enemyArmy: Army): Unit {
    const enemySoldiers = enemyArmy.units.filter(
      (unit) => unit.getType() === 'Soldier' && unit.isAlive,
    );
    const enemyArtillery = enemyArmy.units.filter(
      (unit) => unit.getType() === 'Artillery unit' && unit.isAlive,
    );
    const enemyAirforce = enemyArmy.units.filter(
      (unit) => unit.getType() === 'Airforce unit' && unit.isAlive,
    );
    if (unit.getType() === 'Soldier') {
      if (enemySoldiers.length > 0) {
        return this.findSoldier(enemySoldiers);
      }
    } else if (unit.getType() === 'Artillery unit') {
      if (enemyArtillery.length > 0) {
        return this.findArtilleryUnit(enemyArtillery);
      } else {
        if (enemySoldiers.length > 0) {
          return this.findSoldier(enemySoldiers);
        }
      }
    } else {
      if (enemyAirforce.length > 0) {
        return this.findAirforceUnit(enemyAirforce);
      } else if (enemyArtillery.length > 0) {
        return this.findArtilleryUnit(enemyArtillery);
      } else {
        return this.findSoldier(enemySoldiers);
      }
    }
  }

  findSoldier(soldiers: Unit[]): Unit {
    return soldiers[Math.floor(Math.random() * soldiers.length)];
  }

  findArtilleryUnit(artillery: Unit[]): Unit {
    return artillery[Math.floor(Math.random() * artillery.length)];
  }

  findAirforceUnit(airforce: Unit[]): Unit {
    return airforce[Math.floor(Math.random() * airforce.length)];
  }

  attackEnemy(attacker: Unit, target: Unit): Unit {
    target.health = target.health + target.defence - attacker.damage;
    if (target.health <= 0) {
      target.isAlive = false;
    }
    return target;
  }

  refreshCombatStatus(unit: Unit, army: Army): Army {
    for (let i = 0; i < army.units.length; i++) {
      if (army.units[i].id === unit.id) {
        army.units[i].health = unit.health;
        army.units[i].isAlive = unit.isAlive;
      }
    }
    return army;
  }

  performCombatWithArmyUnit(
    index: number,
    attackingArmy: Army,
    defendingArmy: Army,
  ): Army {
    const target = this.findTarget(attackingArmy.units[index], defendingArmy);
    if (target !== undefined) {
      const attackedTarget = this.attackEnemy(
        attackingArmy.units[index],
        target,
      );
      defendingArmy = this.refreshCombatStatus(attackedTarget, defendingArmy);
    }
    return defendingArmy;
  }

  performCombat(army1: Army, army2: Army): string {
    let index1 = 0;
    let index2 = 0;
    while (
      army1.units.find((unit) => unit.isAlive) &&
      army2.units.find((unit) => unit.isAlive)
    ) {
      if (index1 == army1.units.length) index1 = 0;
      if (index2 == army2.units.length) index2 = 0;
      army2 = this.performCombatWithArmyUnit(index1, army1, army2);
      army1 = this.performCombatWithArmyUnit(index2, army2, army1);
      index1 = index1 + 1;
      index2 = index2 + 1;
    }
    if (army1.units.find((unit) => unit.isAlive)) return 'Army 1 wins!';
    else if (army2.units.find((unit) => unit.isAlive)) return 'Army 2 wins!';
    else return 'Both armies are dead! Noone wins.';
  }
}
