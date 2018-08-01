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

  roll(max, min) {
    let roll = Math.floor((Math.random() * max) + min);
  }

  rollInitiative(monster) {
    let monsterRoll = roll(20, 1);
    let playerRoll = roll(20, 1);
    if (monsterRoll > playerRoll) {
      monster.monsterTurn(monster);
    } else if (playerRoll > monsterRoll) {
      this.playerTurn(monster);
    } else if (monsterRoll === playerRoll) {
      this.rollInitiative(monster);
    } else {
      alert("There was an error!");
    }
  }

  playerTurn(mob) {
    chooseAbility(mob);
    if (mob.hp <= 0) {
      endTurn(mob);
    } else {
    changeTurn(mob);
    }
  }

  chooseAbility(ability, monster) {
    if (ability === "swipe") {
      swipe(monster);
    }
  }

  changeTurn(monster) {
    monster.monsterTurn();
  }

  endTurn(monster) {
    this.xp = this.xp + monster.xpAward;
    if (this.xp >= 100 * this.level) {
      monster.checkLoot();
      this.levelUp();
    } else {
      monster.checkLoot();
    }
  }


  swipe(monster) {
    const hitroll = roll(10, 1) + this.agility / 10;
    const dmgroll = roll(10, 8);
    let damage = dmgroll() + this.agility;

    if (hitroll >= 3) {
        monster.hp -= damage;
    }
    else {
      monster.hp = monster.hp;
    }
  }
}
