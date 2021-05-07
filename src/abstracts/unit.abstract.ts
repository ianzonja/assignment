import { Army } from "src/models/army.model";
import { BattleGround } from "../interfaces/battleground.abstract";

export abstract class Unit{

    type: string;
    health: number;
    damage: number;
    defence: number;

    getType(): string{
        return this.type;
    }
    
    getHealth(): number{
        return this.health;
    }

    getAttack(): number{
        return this.damage;
    }

    getDefence(): number{
        return this.defence;
    }

    addDamage(damage: number){
        this.damage = this.damage + damage;
        return this;
    }

    addHealth(health: number){
        this.health = this.health + health;
        return this;
    }

    addDefence(defence: number){
        this.defence = this.defence + defence;
        return this;
    }

    abstract attackEnemy(enemyArmy: Army);
}