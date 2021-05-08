import { Army } from 'src/models/army.model';
import { BattleGround } from './battleground.interface';

export abstract class Unit {
  type: string;
  health: number;
  damage: number;
  defence: number;
  id: number;
  isAlive = true;

  getType(): string {
    return this.type;
  }

  getHealth(): number {
    return this.health;
  }

  getAttack(): number {
    return this.damage;
  }

  getDefence(): number {
    return this.defence;
  }

  addDamage(damage: number) {
    this.damage = this.damage + damage;
    return this;
  }

  addHealth(health: number) {
    this.health = this.health + health;
    return this;
  }

  addDefence(defence: number) {
    this.defence = this.defence + defence;
    return this;
  }

  set setId(id: number) {
    this.id = id;
  }
}
