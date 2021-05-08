import { Unit } from '../abstractions/unit.abstract';

export class Airforce extends Unit {
  type = 'Airforce unit';
  health = 150;
  damage = 300;
  defence = 100;
}
