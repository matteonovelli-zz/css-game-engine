import { Player } from '../src/player';
import { Obstacle } from '../src/obstacle';
import { DIRECTION } from '../src/constants';

describe('When game starts', () => {
  test('player\'s direction must be RIGHT', () => {
    const sut = new Player('player');
    expect(sut.direction).toBe(DIRECTION.RIGHT);
  });

  test('player\'s speed must be 3', () => {
    const sut = new Player('player');
    expect(sut.speed).toBe(3);
  });

  test('player\'s positions must be (4, 1)', () => {
    const sut = new Player('palyer', 4, 1);
    expect(sut.position.x).toBe(4);
    expect(sut.position.y).toBe(1);
  });
});

describe('After keydown', () => {
  const emitKeydownEvent = (keyCode) => {
    document.dispatchEvent(new KeyboardEvent('keydown', { keyCode }));
  };

  test('Player\'s direction must change only if arrow keys pressed', () => {
    const sut = new Player('player');

    emitKeydownEvent(DIRECTION.UP);
    expect(sut.direction).toBe(DIRECTION.UP);

    emitKeydownEvent(DIRECTION.DOWN);
    expect(sut.direction).toBe(DIRECTION.DOWN);

    emitKeydownEvent(DIRECTION.LEFT);
    expect(sut.direction).toBe(DIRECTION.LEFT);

    emitKeydownEvent(DIRECTION.RIGHT);
    expect(sut.direction).toBe(DIRECTION.RIGHT);

    emitKeydownEvent(100);
    expect(sut.direction).toBe(DIRECTION.RIGHT);
  });
});

describe('After one second update', () => {
  test('Player must move as many units per second as its speed and direction', () => {
    const sut = new Player('player', 4, 1);
    sut.speed = 1;

    sut.direction = DIRECTION.RIGHT;
    sut.update(1000);
    expect(sut.position.y).toBe(1);
    expect(sut.position.x).toBe(5);

    sut.direction = DIRECTION.DOWN;
    sut.update(1000);
    expect(sut.position.y).toBe(2);
    expect(sut.position.x).toBe(5);

    sut.direction = DIRECTION.LEFT;
    sut.update(1000);
    expect(sut.position.y).toBe(2);
    expect(sut.position.x).toBe(4);

    sut.direction = DIRECTION.UP;
    sut.update(1000);
    expect(sut.position.y).toBe(1);
    expect(sut.position.x).toBe(4);
  });
});

describe('After render', () => {
  test('if elementRef is undefined do nothing', () => {
    const sut = new Player('player');

    sut.render();
    expect(sut.elementRef).toBe(null);
  });

  test('elementRef style properties must update', () => {
    const sut = new Player('player', 4, 1);

    sut.elementRef = {
      style: {
        left: 0,
        top: 0,
        display: ''
      }
    };

    sut.render();
    expect(sut.elementRef.style.left).toBe('calc(8vh + 1px)');
    expect(sut.elementRef.style.top).toBe('calc(2vh + 1px)');
    expect(sut.elementRef.style.display).toBe('block');
  });
});

test('If not collide on next frame emit end game event must not be called', () => {
  const sut = new Player('player');
  sut.obstacles = [new Obstacle('1', 1, 0)];
  sut.speed = 1;
  sut.direction = DIRECTION.DOWN;

  sut.notifyCollision = jest.fn();
  sut.update(1000);
  expect(sut.notifyCollision).not.toBeCalled();
});

test('If collide on next frame must emit end game event', () => {
  const sut = new Player('player', 4, 1);
  sut.obstacles = [new Obstacle('1', 5, 1)];
  sut.speed = 1;
  sut.direction = DIRECTION.RIGHT;

  sut.notifyCollision = jest.fn();
  expect(sut.notifyCollision).not.toBeCalled();
  sut.update(1000);
  expect(sut.notifyCollision).toBeCalled();
});

test('Notify collision by emitting playercollision event', () => {
  const sut = new Player('player');

  const observer = jest.fn();
  addEventListener('playercollision', observer);
  expect(observer).not.toBeCalled();
  sut.notifyCollision();
  expect(observer).toBeCalled();
});

test('When change position notify by emittin playerpositionchange event', () => {
  const sut = new Player('player', 4, 1);
  sut.speed = 1;
  sut.direction = DIRECTION.RIGHT;

  const observer = jest.fn();
  addEventListener('playerpositionchange', observer);
  expect(observer).not.toBeCalled();
  sut.update(1000);
  expect(observer).toBeCalled();
});
