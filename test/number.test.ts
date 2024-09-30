import { test, expect } from 'vitest';
import { add, sub, mul, div, isInteger } from '../src/number/index';
import { zeroPadPre, getRandomNumber, getRandomNumberFactory } from '../src/number/index';

test('add', () => {
  expect(add(1, 2, 3, 4)).toBe(10)  // 两数加法 => 多数求和
  expect(add(0.1, 0.2)).toBe(0.3) // 浮点数精度问题
})

test('sub', () => {
  expect(sub(0.3, 0.1)).toBe(0.2) // 浮点数精度问题 
})

test('mul', () => {
  expect(mul(0.1, 0.2)).toBe(0.02)  // 浮点数精度问题 
  expect(mul(0.1, 0.2, 1, 2, )).toBe(0.04)  // 两数乘法 => 多数求积
})

test('div', () => {
  expect(div(0.3, 0.1)).toBe(3)  // 浮点数精度问题 
})

test('isInteger', () => {
  expect(isInteger(0.3)).toBe(false) 
  expect(isInteger(3)).toBe(true) 
  expect(isInteger(-0.1)).toBe(false) 
  expect(isInteger(-1)).toBe(true) 
})

test('zeroPadPre', () => {
  expect(zeroPadPre(1, 6)).toBe('000001') 
  expect(zeroPadPre(10000, 5)).toBe('10000') 
})

test('getRandomNumber', () => {
  for (let i = 0; i < 100; i++) {
    expect(getRandomNumber(-5, 5)).toBeLessThanOrEqual(5)
    expect(getRandomNumber(-5, 5)).toBeGreaterThanOrEqual(-5)
    expect(getRandomNumber(-5, 5)).toSatisfy(isInteger)
  }
})

test('getRandomNumberFactory', () => {
  const func = getRandomNumberFactory(-5, 5)
  expect(func).toBeTypeOf('function')
  for (let i = 0; i < 100; i++) {
    expect(func()).toBeLessThanOrEqual(5)
    expect(func()).toBeGreaterThanOrEqual(-5)
    expect(func()).toSatisfy(isInteger)
  }
})

