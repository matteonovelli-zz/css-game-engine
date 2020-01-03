import { Game } from '../src/game';

const mockLevels = {
  level1: {
    map: [['w', 'p', 'e']],
    gameObjects: [
      {
        elementId: 'player',
        class: 'p',
        type: 'player',
        position: { x: 3, y: 1 }
      },
      {
        elementId: 'body_0',
        class: 'p',
        type: 'snakeBody',
        position: { x: 2, y: 1 }
      }
    ]
  }
};

test('On init game objects must be created', () => {
  const sut = new Game(mockLevels);
  expect(sut.gameObjects.length).toBe(3);
});

test('Render function must be called after some time', () => {
  const timers = jest.useFakeTimers();
  const sut = new Game(mockLevels);
  sut.render = jest.fn();
  expect(sut.render).not.toBeCalled();
  timers.advanceTimersByTime(1);
  expect(sut.render).toBeCalled();
});

test('On render game the gameObject\'s render function must be called', () => {
  const sut = new Game(mockLevels);
  sut.gameObjects = sut.gameObjects.map((gameObject) => {
    gameObject.render = jest.fn();
    return gameObject;
  });
  sut.gameObjects.forEach((gameObject) => {
    expect(gameObject.render).not.toBeCalled();
  });
  sut.render();
  sut.gameObjects.forEach((gameObject) => {
    expect(gameObject.render).toBeCalled();
  });
});

test('On update game the gameObject\'s update function must be called', () => {
  const sut = new Game(mockLevels);
  sut.gameObjects = sut.gameObjects.map((gameObject) => {
    gameObject.update = jest.fn();
    return gameObject;
  });
  sut.gameObjects.forEach((gameObject) => {
    expect(gameObject.update).not.toBeCalled();
  });
  sut.update();
  sut.gameObjects.forEach((gameObject) => {
    expect(gameObject.update).toBeCalled();
  });
});

test('On end game the canvas must be removed from DOM', () => {
  document.body.innerHTML = '<div><div id="game-canvas"></div></div>';

  const sut = new Game(mockLevels);
  sut.render();
  expect(document.body.innerHTML).toBe('<div><div id="game-canvas"></div></div>');
  sut.runGame = false;
  sut.render();
  expect(document.body.innerHTML).toBe('<div></div>');
});

test('On collision event game must finish', () => {
  const sut = new Game(mockLevels);
  expect(sut.runGame).toBe(true);
  sut.collision();
  expect(sut.runGame).toBe(false);
});
