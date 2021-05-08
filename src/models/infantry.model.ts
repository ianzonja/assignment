import { Unit } from '../abstractions/unit.abstract';

export class Infantry extends Unit {
  type = 'Soldier';
  health = 50;
  damage = 50;
  defence = 0;
}
