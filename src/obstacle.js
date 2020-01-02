import { GameObject } from './gameObject';

class Obstacle extends GameObject {
  constructor (elementId, x, y) {
    super(elementId);
    this.position = { x, y };
  }
}

export { Obstacle };
