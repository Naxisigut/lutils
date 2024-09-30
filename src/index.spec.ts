import { test, expect } from 'vitest';
import { sum } from './index';

test('sum', () => {
  expect(sum(1, 23)).toBe(24)
})