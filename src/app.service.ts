import { Injectable } from '@nestjs/common';
import { ArmyImplementor } from './concretes/army.concrete';
import { Army } from './models/army.model';
import { DesertArea } from './models/desertArea.model';
import { SnowArea } from './models/snowArea.model';
import { VolcanoArea } from './models/volcanoArea.model';
import { CombatImplementor } from './concretes/combat.concrete';
import { BattleGround } from './abstractions/battleground.interface';

@Injectable()
export class AppService {
  generateUnitSize(armySize: number) {
    const _infantrySize = Math.floor(Math.random() * armySize);
    const _artillerySize = Math.floor(
      Math.random() * (armySize - _infantrySize),
    );
    const _airforceSize = armySize - _infantrySize - _artillerySize;
    return {
      infantrySize: _infantrySize,
      artillerySize: _artillerySize,
      airforceSize: _airforceSize,
    };
  }

  generateArmyNationalities() {
    let army1Nationality = 0;
    let army2Nationality = 0;
    do {
      army1Nationality = Math.floor(Math.random() * 3) + 1;
      army2Nationality = Math.floor(Math.random() * 3) + 1;
    } while (army1Nationality === army2Nationality);
    return {
      nationality1: this.getNationalityName(army1Nationality),
      nationality2: this.getNationalityName(army2Nationality),
    };
  }

  getNationalityName(id: number): string {
    if (id === 1) {
      return 'Egyptian';
    } else if (id === 2) {
      return 'Russian';
    } else if (id === 3) {
      return 'Japanese';
    }
  }

  buildArmy(
    nationality: string,
    infantrySize: number,
    artillerySize: number,
    airforceSize: number,
    battleGround: BattleGround,
  ): Army {
    const army = new ArmyImplementor();
    return army
      .buildInfantry(infantrySize)
      .buildArtillery(artillerySize)
      .buildAirforce(airforceSize)
      .buildNationality(nationality)
      .refreshUnitStats(battleGround)
      .build();
  }

  generateBattleGround(): BattleGround {
    const randomBattleGround = Math.floor(Math.random() * 3) + 1;
    if (randomBattleGround === 1) {
      return new DesertArea();
    } else if (randomBattleGround === 2) {
      return new SnowArea();
    } else if (randomBattleGround === 3) {
      return new VolcanoArea();
    }
  }

  performCombat(armyOne: Army, armyTwo: Army): string {
    const combat = new CombatImplementor();
    return combat.performCombat(armyOne, armyTwo);
  }
}
