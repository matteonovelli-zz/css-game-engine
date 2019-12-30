import { GameObject } from './gameObject';

class Player extends GameObject {
  constructor (elementId) {
    super();
    this.init(elementId);
  }

  init (elementId) {
    this.position = { x: 0, y: 0 };
    this.direction = 39;
    this.speed = 3;
    this.elementRef = document.getElementById(elementId);
    this.elementRef.style.display = 'block';

    document.onkeydown = (key) => {
      if (key.keyCode >= 37 && key.keyCode <= 40) {
        this.direction = key.keyCode;
      }
    };
  }

  update (deltatime) {
    const position = this.speed * (deltatime / 1000);
    switch (this.direction) {
      case 38: // UP
        this.position.y -= position;
        break;

      case 39: // RIGHT
        this.position.x += position;
        break;

      case 40: // DOWN
        this.position.y += position;
        break;

      case 37: // LEFT
        this.position.x -= position;
        break;
    }
  }

  render () {
    if (!this.elementRef) { return; }
    this.elementRef.style.left = `calc(${Math.trunc(this.position.x) * 2 + 2}vh + 1px)`;
    this.elementRef.style.top = `calc(${Math.trunc(this.position.y) * 2 + 2}vh + 1px)`;
  }
}

export { Player };
