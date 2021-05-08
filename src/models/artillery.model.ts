import { Unit } from '../abstractions/unit.abstract';

export class Artillery extends Unit {
  type = 'Artillery unit';
  health = 200;
  damage = 200;
  defence = 100;
}
