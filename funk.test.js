import { add, sub } from './src/modules/funk';

test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});

test('subs 1 - 2 to equal -1', () => {
  expect(sub(1, 2)).toBe(-1);
});
