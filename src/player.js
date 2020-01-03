import swipeListenerMin from 'swipe-listener';
import { GameObject } from './gameObject';
import { DIRECTION } from './constants';

class Player extends GameObject {
  constructor (elementId, x, y) {
    super(elementId);
    this.init(x, y);
  }

  init (x, y) {
    this.position = { x, y };
    this.direction = DIRECTION.RIGHT;
    this.speed = 3;
    this.obstacles = [];
    this.collisionObservers = [];
    this.positionObservers = [];

    const container = document.querySelector('#container');
    swipeListenerMin(container);
    container.addEventListener('swipe', (event) => {
      console.log(event);
    });

    document.onkeydown = (key) => this.processInputs(key);
  }

  processInputs (key) {
    if (![DIRECTION.UP, DIRECTION.RIGHT, DIRECTION.DOWN, DIRECTION.LEFT].includes(key.keyCode)) { return; }
    this.direction = key.keyCode;
  }

  update (deltatime) {
    const position = this.speed * (deltatime / 1000);
    const nextPosition = { ...this.position };
    switch (this.direction) {
      case DIRECTION.UP:
        nextPosition.y -= position;
        break;

      case DIRECTION.RIGHT:
        nextPosition.x += position;
        break;

      case DIRECTION.DOWN:
        nextPosition.y += position;
        break;

      case DIRECTION.LEFT:
        nextPosition.x -= position;
        break;
    }

    if (!this.detectCollisions(nextPosition)) {
      this.positionObservers.forEach((observer) => {
        observer.playerPositionChanged(this.position, nextPosition);
      });
      this.position = nextPosition;
    } else {
      this.notifyCollision();
    }
  }

  render () {
    if (!this.elementRef) { return; }
    this.elementRef.style.display = 'block';
    this.elementRef.style.left = `calc(${Math.trunc(this.position.x) * 2}vh + 1px)`;
    this.elementRef.style.top = `calc(${Math.trunc(this.position.y) * 2}vh + 1px)`;
  }

  detectCollisions (nextPosition) {
    return this.obstacles.some((obstacle) => {
      return (obstacle.position.x === Math.trunc(nextPosition.x) && obstacle.position.y === Math.trunc(nextPosition.y));
    });
  }

  notifyCollision () {
    this.collisionObservers.forEach((observer) => {
      observer.collision();
    });
  }
}

export { Player };
