import { GameObject } from '../src/gameObject';

jest.useFakeTimers();

test('Time interval must be called', () => {
  GameObject('sut');
  expect(setInterval).toHaveBeenCalledTimes(1);
});
