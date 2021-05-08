import { Unit } from 'src/abstractions/unit.abstract';

export class Army {
  public nationality: string;
  public units: Unit[] = [];
  get getNationality(): string {
    return this.nationality;
  }
  set setNationality(nationality: string) {
    this.nationality = nationality;
  }
}
