import { Unit } from "src/abstractions/unit.abstract";
import { NationalitiesMap } from "src/constants/nationalities.constants";
import { BattleGround } from "src/abstractions/battleground.interface";

export class Army{
    public nationality: string;
    public units: Unit[] = [];
    get getNationality(): string {
        return this.nationality;
    }
    set setNationality(nationality: string){
        this.nationality = nationality;
    }
}