import { Player } from './player';
import { SnakeBody } from './snakeBody';
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
    const objects = [];
    levels.level1.map.forEach((row, x) => {
      row.forEach((item, y) => {
        if (item === 'w') {
          obstacles.push(new Obstacle(`${item}_${x}_${y}`, x, y));
        }
      });
    });
    let player;
    levels.level1.gameObjects.forEach((gameObject) => {
      switch (gameObject.type) {
        case 'player':
          player = new Player(gameObject.elementId, gameObject.position.x, gameObject.position.y);
          break;
        case 'snakeBody':
          {
            const bodyPart = new SnakeBody(gameObject.elementId, gameObject.position.x, gameObject.position.y);
            objects.push(bodyPart);
          }
          break;
      }
    });
    player.obstacles = [].concat(objects).concat(obstacles);

    this.gameObjects = [].concat(player).concat(objects).concat(obstacles);

    addEventListener('playercollision', () => {
      this.collision();
    });
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
      document.getElementById('game-canvas').remove();
    }
  }

  collision () {
    this.runGame = false;
  }
}

export { Game };
