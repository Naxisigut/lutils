import { test, expect } from 'vitest';
import { getRandomFromArr } from '../src/array/index';

test('getRandomFromArr', () => {
  const arr = [1, 2, 3, 4, 5]
  for (let i = 0; i < 100; i++) {
    expect(arr).toContain(getRandomFromArr(arr))    
  }
})