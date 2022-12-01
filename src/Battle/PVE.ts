import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  private _fighter: Fighter;
  private _monster: SimpleFighter[];

  constructor(fighter: Fighter, monster: SimpleFighter[]) {
    super(fighter);
    this._fighter = fighter;
    this._monster = monster;
  }

  private fighterAttack(monsters: SimpleFighter[]): void {
    this._fighter.attack(monsters[0]);
  }

  private monstersAttack(monsters: SimpleFighter[]): void {
    monsters.forEach((e) => {
      if (this._fighter.lifePoints > 0) {
        e.attack(this._fighter);
      }
    });
  }

  get fighter(): Fighter {
    return this._fighter;
  }

  get monsters(): SimpleFighter[] {
    return this._monster;
  }

  fight(): number {
    let monsters = this._monster;
    while (this._fighter.lifePoints > 0 
        && monsters.some((e) => e.lifePoints > 0)) {
      this.fighterAttack(monsters);
      this.monstersAttack(monsters);
      monsters = this._monster.filter((e) => e.lifePoints > 0);
    }
    return super.fight();
  }
}