class Druid {
  constructor(name) {
    this.name = name;
    this.hp = 100;
    this.mana = 100;
    this.armor = 10;
    this.intellect = 10;
    this.agility = 10;
    this.items = [];
    this.level = 1;
    this.exp = 0;
    this.equipped = [];
    this.abilities = [];
  }

  roll(min, max) {
    max += 1;
    return Math.floor(Math.random() * (max - min) + min);
  }

  rollInitiative(monster) {
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
    } else {
      mob.monsterTurn(this);
    }
  }

  chooseAbility(ability, monster) {
    if (ability === "swipe") {
      this.swipe(monster);
    }
  }

  endTurn(monster) {
    this.xp = this.xp + monster.xpAward;
    if (this.xp >= 100 * this.level) {
      monster.checkLoot(this);
      this.levelUp();
    } else {
      monster.checkLoot(this);
    }
  }


  swipe(monster) {
    const hitroll = this.roll(1, 10) + this.agility / 10;
    const dmgroll = this.roll(8, 10);
    let damage = dmgroll + this.agility;

    if (hitroll >= 3) {
        monster.hp -= damage;
    }
    else {
      monster.hp = monster.hp;
    }
  }
}

export default Druid;
