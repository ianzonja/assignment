import { BattleGroundEffectData } from 'src/models/battleGroudEffectData.model';

export interface BattleGround {
  name: string;
  country: string;
  effect: string;
  onBattleGroundEffect(): BattleGroundEffectData;
}
