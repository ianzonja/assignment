import { Unit } from "src/abstracts/unit.abstract";
import { Army } from "src/models/army.model";

export abstract class AbstractArmy{
    protected army: Army = new Army();
    public abstract buildNationality(nationality: string);
    public abstract buildInfantry(size: number): AbstractArmy;
    public abstract buildArtillery(size: number): AbstractArmy;
    public abstract buildAirforce(size: number): AbstractArmy;
    public abstract buildTotalValues(): AbstractArmy;
    public abstract build(): Army;
}