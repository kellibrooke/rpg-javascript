class Game {
  constructor() {
    this.player;
    this.itemArray = [];
    this.enemyArray = [];
  }

  instantiateLoots() {
    const halberk = new Item("halberk", "armor", 2, 0, 0, 0, 5, 0);
    const polearm = new Item("polearm", "weapon", 0, 0, 0, 0, 2, 3);
    const manaPot = new Item("manaPotion", "potion", 0, 20, 2, 0, 0, 0);
    const healthPot = new Item("healthPotion", "potion", 20, 0, 0, 0, 5, 0);
    const bagIsBack = [halberk, polearm, manaPot, healthPot];
    this.itemArray = bagIsBack;
  }

  instantiateEnemies() {
    const abrassosaurus = new Monster(1, this.itemArray);
    const murlock = new Monster(1, this.itemArray);
    const bagOMobs = [];
    this.enemyArray = bagOMobs;
  }

  createNewPlayer(name, charClass) {
    if(charClass === "druid") {
      const player1 = new Druid(name);
    } else if (charClass === "mage") {
      const player1 = new Mage(name);
    } else if (charClass === "rogue") {
      const player1 = new Rogue(name);
    }
    this.player = player1;
  }

  initializeGame() {
    this.instantiateLoots();
    this.instantiateEnemies();
    this.createNewPlayer();
  }

  battle(player, enemy) {

  }
}
