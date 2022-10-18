export default class Character {
  static #types = ['Bowerman', 'Daemon', 'Magician', 'Swordsman', 'Undead', 'Zombie'];

  constructor(name, type) {
    this.name = name;
    this.type = type;
    if (name.length < 2 || name.length > 10 || !Character.#types.includes(type)) {
      throw new Error('Некорректные данные!');
    }
  }

  levelup() {
    if (this.health > 0) {
      this.health = 100;
      this.level = +this.level + 1;
      this.attack = +this.attack + (this.attack * 20) / 100;
      this.defence = +this.defence + (this.defence * 20) / 100;
    } else throw new Error('нельзя повысить левел умершего');
  }

  damage(points) {
    if (this.health > 0) {
      this.health -= points * (1 - this.defence / 100);
    } else throw new Error('rерой мертвый');
  }
}
