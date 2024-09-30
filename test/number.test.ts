import { test, expect } from 'vitest';
import { add } from '../src/number/index';

test('add', () => {
  expect(add(1, 2)).toBe(3)    
  expect(add(1, 2, 3, 4)).toBe(10)    
})