class Battle {
  constructor(player, enemy) {
    this.player = player;
    this.enemy = enemy;
  }

  roll(min, max) {
    max += 1;
    return Math.floor(Math.random() * (max - min) + min);
  }
}

initializeBattle(monster, player, monsterRoll, playerRoll) {
  let monsterRoll = this.roll(1, 20);
  let playerRoll = this.roll(1, 20);
  if (monsterRoll > playerRoll) {
    this.monsterTurn(monster);
    return "is monster turn";
  } else if (playerRoll > monsterRoll) {
    this.playerTurn(monster);
    return "is player turn";
  } else if (monsterRoll === playerRoll) {
    this.intializeBattle(monster);
    return "is a tie";
  } else {
    alert("There was an error!");
  }
}

monsterTurn(monster) {
  monster.attack(this.player);
  if (this.player.hp <= 0) {
    this.endTurn(monster);
  } else {
  this.playerTurn(monster);
  }
}

playerTurn(ability, monster) {
  this.player.chooseAbility(ability, monster);
  if (monster.hp <= 0) {
    this.endTurn(monster);
    return "monster dead"
  } else {
    this.monsterTurn(monster);
  }
}

endTurn(monster) {
  this.player.xp += monster.xpAward;
  if (this.player.xp >= 100 * this.player.level) {
    this.checkLoot(monster);
    this.levelUp();
  } else {
    this.checkLoot(monster);
  }
}

  checkLoot(monster) {
    let droppedLoot = this.roll(0, (this.player.items.length - 1));
    this.player.items.push(monster.items[droppedLoot]);
  }
