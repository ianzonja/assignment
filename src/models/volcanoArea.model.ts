import { BattleGround } from 'src/abstractions/battleground.interface';
import { BattleGroundEffectData } from './battleGroudEffectData.model';

export class VolcanoArea implements BattleGround {
  name = 'Hokkaido';
  country = 'Japan';
  effect = 'Earthquake';

  onBattleGroundEffect() {
    return new BattleGroundEffectData(-5, 0, -30, 0, -50, 0, 25, 0, 0);
  }
}
