import { Injectable } from '@nestjs/common';
import { BattleGround } from './interfaces/battleground.abstract';
import { Unit } from './abstracts/unit.abstract';
import { AbstractArmy } from './builders/army/armyAbstract.builder';
import { ArmyImplementor } from './builders/army/armyImplementor.builder';
import { Army } from './models/army.model';
import { DesertArea } from './models/desertArea.model';
import { SnowArea } from './models/snowArea.model';
import { VolcanoArea } from './models/volcanoArea.model';

@Injectable()
export class AppService {

  getHello(): string {
    return 'Hello World!';
  }

  generateUnitSize(armySize: number){
    const _infantrySize = Math.floor(Math.random() * armySize);
    const _artillerySize = Math.floor(Math.random() * (armySize - _infantrySize));
    const _airforceSize = armySize - _infantrySize - _artillerySize;
    return {infantrySize: _infantrySize, artillerySize: _artillerySize, airforceSize: _airforceSize};
  }

  generateArmyNationalities(){
    let army1Nationality = 0;
    let army2Nationality = 0;
    do{
      army1Nationality = Math.floor(Math.random() * 3) + 1;
      army2Nationality = Math.floor(Math.random() * 3) + 1;
    }while(army1Nationality === army2Nationality);
    return { nationality1: this.getNationalityName(army1Nationality), nationality2: this.getNationalityName(army2Nationality) };
  }

  getNationalityName(id: number){
    if(id === 1){
      return 'Egyptian';
    }
    else if(id === 2){
      return 'Russian';
    }
    else if(id === 3){
      return 'Japanese';
    }
  }

  buildArmy(nationality: string, infantrySize: number, artillerySize: number, airforceSize: number): Army{
    const army = new ArmyImplementor();
    return army.buildInfantry(infantrySize).buildArtillery(artillerySize).buildAirforce(airforceSize).buildNationality(nationality).buildTotalValues().build();
  }

  generateBattleGround(){
    const randomBattleGround = Math.floor(Math.random() * 3) + 1;
    if(randomBattleGround === 1){
      return new DesertArea();
    }
    else if(randomBattleGround === 2){
      return new SnowArea();
    }
    else if(randomBattleGround === 3){
      return new VolcanoArea();
    }
  }

  performCombat(armyOne: Army, armyTwo: Army): string{
    do{
      armyOne.getAirforceUnits.forEach(unit => unit.attackEnemy(armyTwo));
      armyTwo = this.calculateAllUnitsDeaths(armyTwo);
      armyTwo.getAirforceUnits.forEach(unit => unit.attackEnemy(armyOne));
      armyOne = this.calculateAllUnitsDeaths(armyOne);
      armyOne.getArtilleryUnits.forEach(unit => unit.attackEnemy(armyTwo));
      armyTwo = this.calculateAllUnitsDeaths(armyTwo);  
      armyTwo.getArtilleryUnits.forEach(unit => unit.attackEnemy(armyOne));
      armyOne = this.calculateAllUnitsDeaths(armyOne);
      armyOne.getInfantryUnits.forEach(unit => unit.attackEnemy(armyTwo));
      armyTwo = this.calculateAllUnitsDeaths(armyTwo);
      armyTwo.getInfantryUnits.forEach(unit => unit.attackEnemy(armyOne));
      armyOne = this.calculateAllUnitsDeaths(armyOne);
    }while(armyOne.getTotalArmyHealth > 0 && armyTwo.getTotalArmyHealth > 0);
    if(armyOne.getTotalArmyHealth > 0){
      return "THe winner is army One.";
    }
    else if(armyTwo.getTotalArmyHealth > 0){
      return "The winner is army Two.";
    }
    else{
      return "There is no victorious team. Both team are dead.";
    }
  }

  calculateAllUnitsDeaths(army: Army): Army{
    army = this.calculateDeaths(army, army.getInfantryUnits);
    army = this.calculateDeaths(army, army.getArtilleryUnits);
    army = this.calculateDeaths(army, army.getAirforceUnits);
    return army;
  }

  calculateDeaths(army: Army, units: Unit[]): Army{
    const singleUnit = units.find(unit => unit !== undefined);
    if(singleUnit === undefined){
      return army;
    }
    let totalUnitsHealth = units.map(unit => unit.getHealth()).reduce((a,b) => a + b, 0);
    const singleUnitHealth = singleUnit.getHealth();
    let totalCurrentUnitsHealth = 0;
    if(singleUnit.getType() === 'Soldier'){
      totalCurrentUnitsHealth = army.getTotalInfantryHealth;
    }
    else if(singleUnit.getType() === 'Artillery unit'){
      totalCurrentUnitsHealth = army.getTotalArtilleryHealth;
    }
    else{
      totalCurrentUnitsHealth = army.getTotalAirforceHealth;
    }
    const diff = totalUnitsHealth - totalCurrentUnitsHealth;
    let deadUnits = 0;
    if(diff > singleUnitHealth){
      deadUnits = Math.floor(diff/singleUnitHealth);
    }
    for(let i=0; i<deadUnits; i++){
      if(singleUnit.getType() === 'Soldier'){
        army.infantryUnits.pop();
        console.log('soldier died');
      }
      else if(singleUnit.getType() === 'Artillery unit'){
        army.artilleryUnits.pop();
        console.log('arttillery died');
      }
      else{
        army.airforceUnits.pop();
        console.log('airforce died');
      }
    }
    return army;
  }
}
