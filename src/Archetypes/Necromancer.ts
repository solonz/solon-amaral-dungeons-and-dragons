import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  private _type: EnergyType;
  static createdInstances = 0;

  constructor(name: string) {
    super(name);
    this._type = 'mana';
    Necromancer.createdInstances += 1;
  }

  get energyType(): EnergyType {
    return this._type;
  }
  
  static createdArchetypeInstances() : number {
    return this.createdInstances;
  }
}