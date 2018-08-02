class Druid {
  constructor(name) {
    this.name = name;
    this.hp = 100 * this.level;
    this.mana = 100 * this.level;
    this.armor = 10 * this.level;
    this.intellect = 10 * this.level;
    this.agility = 10 * this.level;
    this.items = [];
    this.level = 1;
    this.exp = 0;
    this.equipped = [];
    this.abilities = [];
    this.abilityBank = {1: "swipe", 2: "heal", 3: "taunt"};
  }

  roll(min, max) {
    max += 1;
    return Math.floor(Math.random() * (max - min) + min);
  }
game.rollInitiative(druid.roll())
  rollInitiative(monster, monsterRoll, playerRoll) {
    let monsterRoll = this.roll(1, 5);
    let playerRoll = this.roll(6, 10);
    console.log("Monster Roll" + monsterRoll);
    console.log(playerRoll);
    if (monsterRoll > playerRoll) {
      monster.monsterTurn(monster);
      return "is monster turn";
    } else if (playerRoll > monsterRoll) {
      this.playerTurn(monster);
      return "is player turn";
    } else if (monsterRoll === playerRoll) {
      this.rollInitiative(monster);
      return "is a tie";
    } else {
      alert("There was an error!");
    }
  }

  playerTurn(mob) {
    this.chooseAbility("swipe", mob);
    if (mob.hp <= 0) {
      this.endTurn(mob);
      return "monster dead"
    } else {
      mob.monsterTurn(this);
    }
  }

  chooseAbility(ability, monster) {
    if (ability === "swipe") {
      this.swipe(monster);
      console.log(monster.hp);
    }
  }

  checkLoot(monster) {
    let droppedLoot = this.roll(0, (this.items.length - 1));
    this.items.push(monster.items[droppedLoot]);
  }

  endTurn(monster) {
    this.xp = this.xp + monster.xpAward;
    if (this.xp >= 100 * this.level) {
      this.checkLoot(monster);
      this.levelUp();
    } else {
      this.checkLoot(monster);
    }
  }

  levelUp() {
    this.level += 1;
    this.addAbility(this.level);
    this.xp = 0;
    this.hp = 100 * this.level;
    this.mana = 100* this.level;
  }

  addAbility() {
    this.abilities.push(this.abilityBank[this.level]);
  }

  swipe(monster) {
    const hitroll = this.roll(3, 10) + this.agility / 10;
    const dmgroll = this.roll(8, 10);
    let damage = dmgroll + this.agility;

    if (hitroll >= 3) {
        monster.hp -= damage;
        console.log(monster.hp + "in swipe method");
    }
    else {
      monster.hp = monster.hp;
    }
  }
}

export default Druid;
