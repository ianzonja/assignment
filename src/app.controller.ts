import { BadRequestException, ParseIntPipe, Query, Render } from '@nestjs/common';
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Airforce } from './models/airforce.model';
import { Artillery } from './models/artillery.model';
import { Infantry } from './models/infantry.model';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService){}

  @Get()
  @Render('index')
  root(@Query('army1') army1: string, @Query('army2') army2: string) {
    if(army1 !== undefined && army2 !== undefined){
      const army1Size = parseInt(army1);
      const army2Size = parseInt(army2);
      if(isNaN(army1Size) || isNaN(army2Size)){
        throw new BadRequestException({ message: 'Wrong input. Please, enter the numbers in inputs. '});
        console.log('You have entered wrong inputs. Please, enter the numbers in inputs.');
      }
      //generate unit type sizes randomly
      const army1UnitSize = this.appService.generateUnitSize(army1Size);
      const army2UnitSize = this.appService.generateUnitSize(army2Size);
      //generate armies nationality randomly
      const armyNationalities = this.appService.generateArmyNationalities();
      //build armies with builder design pattern
      const armyOne = this.appService.buildArmy(armyNationalities.nationality1, army1UnitSize.infantrySize, army1UnitSize.artillerySize, army1UnitSize.airforceSize);
      const armyTwo = this.appService.buildArmy(armyNationalities.nationality2, army2UnitSize.infantrySize, army2UnitSize.artillerySize, army2UnitSize.airforceSize);
      //generate battleground randomly
      const battleGround = this.appService.generateBattleGround();
      //perform combat
      const winner = this.appService.performCombat(armyOne, armyTwo);
      console.log(winner);
      return { message: winner };
    }
    else{
      return { message: 'Hello!' };
    }
  }
}
