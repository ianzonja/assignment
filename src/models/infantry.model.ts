import { Unit } from "../abstractions/unit.abstract";

export class Infantry extends Unit{
    type = 'Soldier';
    health: number = 50;
    damage: number = 50;
    defence: number = 0;
}