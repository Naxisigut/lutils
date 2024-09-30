import { test, expect } from 'vitest';
import { strPop, obj2Query } from '../src/string/index';

test('strPop', () => {
  expect(strPop('')).toBe('')
  expect(strPop('123')).toBe('12')
})


test('obj2Query', () => {
  const params = {
    a: 1, 
    b: 2,
    c: 3
  }

  expect(obj2Query({})).toBe('')
  expect(obj2Query(params)).toBe('?a=1&b=2&c=3')
  expect(obj2Query(params, true)).toBe('a=1&b=2&c=3')
})