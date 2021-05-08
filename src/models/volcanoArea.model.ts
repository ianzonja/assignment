import { BattleGround } from "src/abstractions/battleground.interface";
import { Army } from "./army.model";
import { BattleGroundEffectData } from "./battleGroudEffectData.model";

export class VolcanoArea implements BattleGround{
    name: string = 'Hokkaido';
    country: string = 'Japan';
    effect: string = 'Earthquake';

    onBattleGroundEffect(){
        return new BattleGroundEffectData(-5, 0, -30, 0, -50, 0, 25, 0, 0);
    }
}