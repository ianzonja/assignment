import { Army } from "src/models/army.model";

export interface BattleGroundEvent{
    onBattleGroundEffect(army: Army): void;
}