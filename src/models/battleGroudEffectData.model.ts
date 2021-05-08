export class BattleGroundEffectData{
    addInfantryDamage: number;
    addInfantryHealth: number;
    addInfantryDefence: number;
    addArtilleryDamage: number;
    addArtilleryDefence: number;
    addArtilleryHealth: number;
    addAirforceDamage: number;
    addAirforceHealth: number;
    addAirforceDefence: number;

    constructor(
        infantryDamage: number, 
        infantryDefence: number, 
        infantryHealth: number,
        artilleryDamage: number, 
        artilleryDefence: number, 
        artilleryHealth: number, 
        airforceDamage: number, 
        airforceDefence: number, 
        airforceHealth: number){
            this.addInfantryDamage = infantryDamage;
            this.addInfantryDefence = infantryDefence;
            this.addInfantryHealth = infantryHealth;
            this.addArtilleryDamage = artilleryDamage;
            this.addArtilleryDefence = artilleryDefence;
            this.addArtilleryHealth = artilleryHealth;
            this.addAirforceDamage = airforceDamage;
            this.addAirforceDefence = airforceDefence;
            this.addAirforceHealth = airforceHealth;
        }
}