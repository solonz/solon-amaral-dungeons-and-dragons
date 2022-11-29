import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Mage extends Archetype {
  private _type: EnergyType;
  static createdInstances = 0;

  constructor(name: string) {
    super(name);
    this._type = 'mana';
    Mage.createdInstances += 1;
  }

  get energyType(): EnergyType {
    return this._type;
  }

  static createdArchetypeInstances(): number {
    return this.createdInstances;
  }
}
