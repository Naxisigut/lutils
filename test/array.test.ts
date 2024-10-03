import { test, expect } from 'vitest';
import { getRandomFromArr, getArrDistinct, isNotEmptyArr, shuffleArray } from '../src/array/index';

test('getRandomFromArr', () => {
  const arr = [1, 2, 3, 4, 5]
  for (let i = 0; i < 100; i++) {
    expect(arr).toContain(getRandomFromArr(arr))    
  }
})
test('getArrDistinct', () => {
  const arr = [1, 2, 3, 3, 4, 5, 6, 6, 7, 7 ,8, 1]
  expect(getArrDistinct(arr)).toEqual([1, 2, 3, 4, 5, 6, 7, 8])
})
test('isNotEmptyArr', () => {
  expect(isNotEmptyArr([])).toBe(false)
  expect(isNotEmptyArr([undefined])).toBe(true)
})
test('shuffleArray', () => {
  for (let i = 0; i < 10; i++) {
    const arr = [1, 2, 3, 4]
    const newArr = shuffleArray(arr)
    expect(arr).toBe(newArr)
    arr.forEach(item => {
      expect(newArr).toContain(item)
    })
  }
})