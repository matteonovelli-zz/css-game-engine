import { Player } from './player';
import { Obstacle } from './obstacle';

class Game {
  constructor (levels) {
    this.lastUpdate = performance.now();
    this.deltatime = 0;
    this.gameObjects = [];
    this.runGame = true;
    this.init(levels);
    this.update();
  }

  init (levels) {
    const obstacles = [];
    let player;
    levels.level1.forEach((row, x) => {
      row.forEach((item, y) => {
        switch (item) {
          case 'w':
            obstacles.push(new Obstacle(`${item}_${x}_${y}`, x, y));
            break;
          case 'p':
            player = new Player(`${item}_${x}_${y}`);
            player.collisionObservers.push(this);
            break;
          default:
            break;
        }
      });
    });
    player.obstacles = obstacles;
    this.gameObjects = [].concat(player).concat(obstacles);
  }

  update () {
    const now = performance.now();
    this.deltatime = now - this.lastUpdate;
    this.lastUpdate = now;
    this.gameObjects.forEach((gameObject) => {
      gameObject.deltatime = this.deltatime;
      gameObject.update(this.deltatime);
    });
    setTimeout(() => {
      this.render();
    }, 0);
  }

  render () {
    if (this.runGame) {
      this.gameObjects.forEach((gameObject) => {
        gameObject.render();
      });
      this.update();
    } else {
      console.log('REMOVE GAME CANVAS');
      document.getElementById('game-canvas').remove();
    }
  }

  endGameEvent () {
    console.log('FIN');
    this.runGame = false;
  }
}

export { Game };
