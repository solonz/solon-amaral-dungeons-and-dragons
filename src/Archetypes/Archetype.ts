import { EnergyType } from '../Energy';

export default abstract class Archetype {
  private _name: string;
  private _special: number;
  private _cost: number;

  constructor(name: string) {
    this._name = name;
    this._special = 0;
    this._cost = 0;
  } 

  static createdArchetypeInstances(): number {
    throw new Error('Not implemented');
    // return Race.length;
  }
  
  abstract get energyType() : EnergyType;
  
  public get name() : string {
    return this._name;
  }
  
  public get special() : number {
    return this._special;
  }
  
  public get cost() : number {
    return this.cost;
  }
}