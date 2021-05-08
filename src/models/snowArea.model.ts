import { BattleGround } from "src/abstractions/battleground.interface";
import { BattleGroundEffectData } from "./battleGroudEffectData.model";

export class SnowArea implements BattleGround{
    name: string = 'Moscow';
    country: string = 'Russia';
    effect: string = 'Cold';

    onBattleGroundEffect(){
        return new BattleGroundEffectData(-20, 0, -20, 0, 0, -50, 30, 0, 0);
    }
}