import { GameObject } from './gameObject';
import { DIRECTION } from './constants';

class Player extends GameObject {
  constructor (elementId) {
    super(elementId);
    this.init();
  }

  init () {
    this.position = { x: 0, y: 0 };
    this.direction = DIRECTION.RIGHT;
    this.speed = 3;
    document.onkeydown = (key) => {
      if (![DIRECTION.UP, DIRECTION.RIGHT, DIRECTION.DOWN, DIRECTION.LEFT].includes(key.keyCode)) { return; }
      this.direction = key.keyCode;
    };
  }

  update (deltatime) {
    const position = this.speed * (deltatime / 1000);
    switch (this.direction) {
      case DIRECTION.UP:
        this.position.y -= position;
        break;

      case DIRECTION.RIGHT:
        this.position.x += position;
        break;

      case DIRECTION.DOWN:
        this.position.y += position;
        break;

      case DIRECTION.LEFT:
        this.position.x -= position;
        break;
    }
  }

  render () {
    if (!this.elementRef) { return; }
    this.elementRef.style.display = 'block';
    this.elementRef.style.left = `calc(${Math.trunc(this.position.x) * 2 + 2}vh + 1px)`;
    this.elementRef.style.top = `calc(${Math.trunc(this.position.y) * 2 + 2}vh + 1px)`;
  }
}

export { Player };
