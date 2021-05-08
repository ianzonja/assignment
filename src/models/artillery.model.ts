import { Unit } from "../abstractions/unit.abstract";

export class Artillery extends Unit{
    type: string = 'Artillery unit';
    health: number = 200;
    damage: number = 200;
    defence: number = 100;
}