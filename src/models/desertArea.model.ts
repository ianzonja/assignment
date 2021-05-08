import { Nations } from 'src/constants/nationalities.constants';
import { BattleGround } from 'src/abstractions/battleground.interface';
import { BattleGroundEffectData } from './battleGroudEffectData.model';

export class DesertArea implements BattleGround {
  name = 'Sahara';
  country: string = Nations.EGYPT;
  effect = 'Desert storm';

  onBattleGroundEffect() {
    return new BattleGroundEffectData(-20, 0, -10, 20, 0, 0, -50, 0, 0);
  }
}
