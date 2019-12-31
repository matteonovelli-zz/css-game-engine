import { Player } from '../src/player';
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

  test('player\'s positions must be (0,0)', () => {
    const sut = new Player('palyer');
    expect(sut.position.x).toBe(0);
    expect(sut.position.y).toBe(0);
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
    const sut = new Player('player');
    sut.speed = 1;

    sut.direction = DIRECTION.RIGHT;
    sut.update(1000);
    expect(sut.position.y).toBe(0);
    expect(sut.position.x).toBe(1);

    sut.direction = DIRECTION.DOWN;
    sut.update(1000);
    expect(sut.position.y).toBe(1);
    expect(sut.position.x).toBe(1);

    sut.direction = DIRECTION.LEFT;
    sut.update(1000);
    expect(sut.position.y).toBe(1);
    expect(sut.position.x).toBe(0);

    sut.direction = DIRECTION.UP;
    sut.update(1000);
    expect(sut.position.y).toBe(0);
    expect(sut.position.x).toBe(0);
  });
});

describe('After render', () => {
  test('if elementRef is undefined do nothing', () => {
    const sut = new Player('player');

    sut.render();
    expect(sut.elementRef).toBe(null);
  });

  test('elementRef style properties must update', () => {
    const sut = new Player('player');

    sut.elementRef = {
      style: {
        left: 0,
        top: 0,
        display: ''
      }
    };

    sut.render();
    expect(sut.elementRef.style.left).toBe('calc(2vh + 1px)');
    expect(sut.elementRef.style.top).toBe('calc(2vh + 1px)');
    expect(sut.elementRef.style.display).toBe('block');
  });
});
