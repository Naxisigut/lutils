import { test, expect } from 'vitest';
import { strPop, obj2Query, capitalize, strShift, getQueryObj, strReverse } from '../src/string/index';

test('strPop', () => {
  expect(strPop('')).toBe('')
  expect(strPop('123')).toBe('12')
})
test('strShift', () => {
  expect(strShift('')).toBe('')
  expect(strShift('123')).toBe('23')
})
test('capitalize', () => {
  expect(capitalize('')).toBe('')
  expect(capitalize('123')).toBe('123')
  expect(capitalize('abc')).toBe('Abc')
})
test('strReverse', () => {
  expect(strReverse('')).toBe('')
  expect(strReverse('123')).toBe('321')
})





test('obj2Query', () => {
  const params = {a: 1, b: 2,c: 3}
  expect(obj2Query({})).toBe('')
  expect(obj2Query(params)).toBe('?a=1&b=2&c=3')
  expect(obj2Query(params, true)).toBe('a=1&b=2&c=3')
})

test('getQueryObj', () => {
  expect(getQueryObj('www.baidu.com?a=1&b=2&c=3')).toEqual({a:'1', b:'2', c:'3'})
  expect(getQueryObj('www.baidu.com')).toEqual({})
  expect(getQueryObj('www.baidu.com?')).toEqual({})

})