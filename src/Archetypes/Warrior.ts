import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Warrior extends Archetype {
  private _type: EnergyType;
  static createdInstances = 0;

  constructor(name: string) {
    super(name);
    this._type = 'stamina';
    Warrior.createdInstances += 1;
  }
  
  get energyType() : EnergyType {
    return this._type; 
  }

  static createdArchetypeInstances(): number {
    return this.createdInstances;
  } 
}