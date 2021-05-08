import { Army } from 'src/models/army.model';
import { BattleGround } from './battleground.interface';

export abstract class AbstractArmy {
  protected army: Army = new Army();
  public abstract buildNationality(nationality: string): AbstractArmy;
  public abstract buildInfantry(size: number): AbstractArmy;
  public abstract buildArtillery(size: number): AbstractArmy;
  public abstract buildAirforce(size: number): AbstractArmy;
  public abstract refreshUnitStats(battleGround: BattleGround): AbstractArmy;
  public abstract build(): Army;
}
