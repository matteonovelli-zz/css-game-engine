import { Player } from './player';

class Game {
  constructor () {
    this.init();
  }

  init () {
    const player = new Player('player');
    console.log(player);
  }
}

Game();
