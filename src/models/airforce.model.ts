import { Unit } from "../abstractions/unit.abstract";
import { Army } from "./army.model";
export class Airforce extends Unit{
    type: string = 'Airforce unit';
    health: number = 150;
    damage: number = 300;
    defence: number = 100;
}