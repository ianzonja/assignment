import { Army } from "src/models/army.model";

export interface BattleGround {
    name: string;
    country: string;
    effect: string;
    onBattleGroundEffect(army: Army): Army;
}