import { BattleGround } from 'src/abstractions/battleground.interface';
import { BattleGroundEffectData } from './battleGroudEffectData.model';

export class SnowArea implements BattleGround {
  name = 'Moscow';
  country = 'Russia';
  effect = 'Cold';

  onBattleGroundEffect() {
    return new BattleGroundEffectData(-20, 0, -20, 0, 0, -50, 30, 0, 0);
  }
}
