import { GameObject } from '../src/gameObject';

test('Render function must exists', () => {
  const sut = new GameObject('sut');
  const render = sut.render();
  expect(render).toBeUndefined();
});

test('Update function must exists', () => {
  const sut = new GameObject('sut');
  const update = sut.update();
  expect(update).toBeUndefined();
});
