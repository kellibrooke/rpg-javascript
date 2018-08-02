import Druid from './../src/druid.js';
import Monster from './../src/monster.js';

describe('DruidStuff', function() {

  // it('rollInitiative - should choose who goes first in a battle', function() {
  //   let items = ["Bow", "Health potion", "Mana potion"];
  //   let player1 = new Druid("Kiatatina");
  //   let enemy1 = new Monster(1, items);
  //   let result = player1.rollInitiative(enemy1, 1, 5);
  //   expect(result).toEqual("is player turn");
  // });

  // it('swipe - should decrease mob hp', function() {
  //   let items = ["Bow", "Health potion", "Mana potion"];
  //   let player1 = new Druid("Kiatatina");
  //   let enemy1 = new Monster(1, items);
  //   player1.swipe(enemy1);
  //   let result = enemy1.hp;
  //   expect(result).toEqual(95);
  // });

  it('levelUp - should increase a player level', function() {
    let player1 = new Druid("Kiatatina");
    player1.levelUp();
    let result = player1.level;
    expect(result).toEqual(2);
  });

  it('addAbility - should add an ability to array based on level', function() {
    let player1 = new Druid("Kiatatina");
    player1.level = 2;
    player1.addAbility();
    let result = player1.abilities[0];
    expect(result).toEqual("heal");
  });

  it('checkLoot - should put an item from monster in inventory', function() {
    let items = ["Bow"];
    let player1 = new Druid("Kiatatina");
    let enemy1 = new Monster(1, items);
    player1.checkLoot(enemy1);
    let result = player1.items[0];
    expect(result).toEqual("Bow");
  });

  // it('chooseAbility - should choose which attack to perform on an enemy', function() {
  //   let items = ["Bow"];
  //   let player1 = new Druid("Kiatatina");
  //   let enemy1 = new Monster(1, items);
  //   player1.chooseAbility("swipe", enemy1);
  //   let result = enemy1.hp;
  //   expect(result).toEqual(95);
  // });
});
