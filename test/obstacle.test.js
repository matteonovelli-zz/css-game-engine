import { Obstacle } from '../src/obstacle';

test('Obstacles must have an (x, y) position', () => {
  const sut = new Obstacle('sut', 0, 1);
  expect(sut.position.x).toBe(0);
  expect(sut.position.y).toBe(1);
});
