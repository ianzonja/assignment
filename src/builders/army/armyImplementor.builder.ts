import { Unit } from "src/abstracts/unit.abstract";
import { Airforce } from "src/models/airforce.model";
import { Army } from "src/models/army.model";
import { Artillery } from "src/models/artillery.model";
import { Infantry } from "src/models/infantry.model";
import { AbstractArmy } from "./armyAbstract.builder";

export class ArmyImplementor extends AbstractArmy{
    public ArmyImplementor(army: Army){ this.army = army};

    public army: Army;

    public buildNationality(nationality: string): AbstractArmy{
        this.army.setNationality = nationality;
        return this;
    }

    public buildTotalValues(): AbstractArmy{
        this.army.setTotalInfantryHealth();
        this.army.setTotalArtilleryHealth();
        this.army.setTotalAirforceHealth();
        return this;
    }

    public buildInfantry(size: number): AbstractArmy {
        const units: Unit[] = [];
        for(let i = 0; i<size; i++){
            units.push(new Infantry());
        }
        this.army.setInfantryUnits = units;
        return this;
    }
    
    public buildArtillery(size: number): AbstractArmy {
        const units: Unit[] = [];
        for(let i = 0; i<size; i++){
            units.push(new Artillery());
        }
        this.army.setArtilleryUnits = units;
        return this;
    }

    public buildAirforce(size: number): AbstractArmy {
        const units: Unit[] = [];
        for(let i = 0; i<size; i++){
            units.push(new Airforce());
        }
        this.army.setAirforceUnits = units;
        return this;
    }

    public build(): Army {
        return this.army;
    }
}