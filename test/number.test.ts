import { test, expect, describe, it } from 'vitest';
import { add, sub, mul, div, isInteger, isEven, average } from '../src/number/index';
import { zeroPadPre, getRandomNumber, getRandomNumberFactory } from '../src/number/index';
import { numSanitize } from '../src/number/index';

test('isInteger', () => {
  expect(isInteger(0.3)).toBe(false) 
  expect(isInteger(3)).toBe(true) 
  expect(isInteger(-0.1)).toBe(false) 
  expect(isInteger(-1)).toBe(true) 
})

test('isEven', () => {
  expect(isEven(1)).toBe(false) 
  expect(isEven(0)).toBe(true) 
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




describe('calculate', () => {
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

  test('average', () => {
    expect(average(0.1, 0.2)).toBe(0.15)  // 浮点数精度问题 
  })
})



describe('numSanitize', () => {
  it('happy path', () => {
    expect(numSanitize('-123abc456-.`*()')).toBe('123456')

    expect(numSanitize('-123abc', { 
      isMinusAllowed: true, 
    })).toBe('-123')

    expect(numSanitize('0.123', { 
      isDotAllowed: true, 
    })).toBe('0.123')

    expect(numSanitize('0.123', { 
      isDotAllowed: true, 
      digits: 2
    })).toBe('0.12')
  })
  
  it('normal edge case', () => {
    expect(numSanitize('0123')).toBe('123')

    expect(numSanitize('000123')).toBe('123')
  })

  it('minus edge case', () => {
    expect(numSanitize('--123', {
      isMinusAllowed: true
    })).toBe('-123')

    expect(numSanitize('--123--', {
      isMinusAllowed: true
    })).toBe('-123')
  })

  it('dot edge case', () => {
    expect(numSanitize('0..123', { 
      isDotAllowed: true, 
    })).toBe('0.123')

    expect(numSanitize('0..123..', { 
      isDotAllowed: true, 
    })).toBe('0.123')

    expect(numSanitize('.12', { 
      isDotAllowed: true, 
    })).toBe('12') // 不允许首位直接输入小数点

    expect(numSanitize('.', { 
      isDotAllowed: true, 
    })).toBe('')
  })

  it('digit edge case', () => {
    expect(numSanitize('0.123', { 
      isDotAllowed: true, 
      digits: 0
    })).toBe('0.1')

    expect(numSanitize('0.123', { 
      isDotAllowed: true, 
      digits: -1
    })).toBe('0.1')
  })

  it('compound edge case', () => {
    expect(numSanitize('--00123', {
      isMinusAllowed: true
    })).toBe('-123')

    expect(numSanitize('00..123', { 
      isDotAllowed: true, 
    })).toBe('0.123')

    expect(numSanitize('--00..1..23--', { 
      isMinusAllowed: true,
      isDotAllowed: true, 
      digits: 2
    })).toBe('-0.12')

    expect(numSanitize('000.23', { 
      isMinusAllowed: true,
      isDotAllowed: true, 
      digits: 2
    })).toBe('0.23')

    expect(numSanitize('01.23', { 
      isMinusAllowed: true,
      isDotAllowed: true, 
      digits: 2
    })).toBe('1.23')

    expect(numSanitize('-001.23', { 
      isMinusAllowed: true,
      isDotAllowed: true, 
      digits: 2
    })).toBe('-1.23')
  })
  
})





