import { GameObject } from './gameObject';

class SnakeBody extends GameObject {
  followeePositionChanged (nextPosition) {
    this.position = nextPosition;
  }
}

export { SnakeBody };
