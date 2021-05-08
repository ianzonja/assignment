import { Unit } from "src/abstractions/unit.abstract";
import { Airforce } from "src/models/airforce.model";
import { Army } from "src/models/army.model";
import { Artillery } from "src/models/artillery.model";
import { Infantry } from "src/models/infantry.model";
import { AbstractArmy } from "../abstractions/army.abstract";

export class ArmyImplementor extends AbstractArmy{
    public ArmyImplementor(army: Army){ this.army = army};

    public army: Army;

    public buildNationality(nationality: string): AbstractArmy{
        this.army.setNationality = nationality;
        return this;
    }

    public buildInfantry(size: number): AbstractArmy {
        for(let i = 0; i<size; i++){
            const unit = new Infantry();
            unit.setId = this.army.units.length + 1;
            this.army.units.push(unit);
        }
        return this;
    }
    
    public buildArtillery(size: number): AbstractArmy {
        for(let i = 0; i<size; i++){
            const unit = new Artillery();
            unit.setId = this.army.units.length + 1;
            this.army.units.push(unit);
        }
        return this;
    }

    public buildAirforce(size: number): AbstractArmy {
        for(let i = 0; i<size; i++){
            const unit = new Airforce();
            unit.setId = this.army.units.length + 1;
            this.army.units.push(unit);
        }
        return this;
    }

    public build(): Army {
        return this.army;
    }
}