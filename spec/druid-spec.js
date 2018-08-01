import Druid from './../src/druid.js';
import Monster from './../src/monster.js';

describe('DruidStuff', function() {

  it('should choose who goes first in a battle', function() {
    var items = ["Bow", "Health potion", "Mana potion"];
    var player1 = new Druid("Kiatatina");
    var enemy1 = new Monster(1, items);
    var result = player1.rollInitiative(enemy1);
    expect(result).toEqual("is player turn");
  });

  it('should choose who goes first in a battle', function() {
    var items = ["Bow", "Health potion", "Mana potion"];
    var player1 = new Druid("Kiatatina");
    var enemy1 = new Monster(1, items);
    expect().toEqual();
  });
});
