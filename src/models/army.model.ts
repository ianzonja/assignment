import { Unit } from "src/abstracts/unit.abstract";

export class Army{
    public nationality: string;
    public totalInfrantryHealth: number;
    public totalArtilleryHealth: number;
    public totalAirforceHealth: number;
    public infantryUnits: Unit[] = [];
    public artilleryUnits: Unit[] = [];
    public airforceUnits: Unit[] = [];

    get getTotalInfantryHealth(): number{
        return this.totalInfrantryHealth;
    }

    setTotalInfantryHealth(): void{
        this.totalInfrantryHealth = this.getInfantryUnits.map(unit => unit.health).reduce((a,b) => a + b, 0);
    }

    get getTotalArtilleryHealth(): number{
        return this.totalArtilleryHealth;
    }

    setTotalArtilleryHealth(): void{
        this.totalArtilleryHealth = this.getArtilleryUnits.map(unit => unit.health).reduce((a,b) => a + b, 0);
    }

    get getTotalAirforceHealth(): number{
        return this.totalAirforceHealth;
    }

    setTotalAirforceHealth(): void{
        this.totalAirforceHealth = this.getAirforceUnits.map(unit => unit.health).reduce((a,b) => a + b, 0);
    }

    get getTotalArmyHealth(): number{
        return this.getTotalInfantryHealth + this.getTotalArtilleryHealth + this.getTotalAirforceHealth;
    }

    get getNationality(): string {
        return this.nationality;
    }

    set setNationality(nationality: string){
        this.nationality = nationality;
    }

    get getInfantryUnits(): Unit[]{
        return this.infantryUnits;
    }

    set setInfantryUnits(infantryUnits: Unit[]){
        this.infantryUnits = infantryUnits;
    }

    get getArtilleryUnits(): Unit[]{
        return this.artilleryUnits;
    }

    set setArtilleryUnits(artilleryUnits: Unit[]){
        this.artilleryUnits = artilleryUnits;
    }

    get getAirforceUnits(): Unit[]{
        return this.airforceUnits;
    }

    set setAirforceUnits(airforceUnits: Unit[]){
        this.airforceUnits = airforceUnits;
    }
}