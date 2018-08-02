import Druid from './druid';
class Monster {
  constructor(level, items) {
    this.hp = 100 * level;
    this.items = items;
    this.level = level;
    this.xpAward = 10 * level;
    this.damageDone = 8 * level;
  }

  attack(player) {
    const hitroll = player.roll(1, 10);
    const dmgroll = player.roll(5, 8) * this.level;
    let damage = dmgroll;

    if (hitroll >= 3) {
      player.hp -= damage + (player.armor / 5);
    }
    else {
      player.hp = player.hp;
    }
  }

  monsterTurn(player) {
    this.attack(player);
    if (player.hp <= 0) {
      player.endTurn(player);
    } else {
    player.playerTurn(this);
    }
  }
}
export default Monster;
