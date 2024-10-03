import { test, expect } from 'vitest';
import { formatTime, sleep, rgb2Hex, isDateValid, dayOfYear, dayDiff, getRandomColorHex } from '../src/other/index';
import { strShift } from '../src/string/index';

test('formatTime', () => {
  const dateObj = new Date()
  const dateStr = `${dateObj.getFullYear()}-${dateObj.getMonth() + 1}-${dateObj.getDate().toString().length === 1 && 0}${dateObj.getDate()}`
  expect(formatTime(new Date, 'YYYY-MM-DD')).toBe(dateStr)
})

test('sleep', async () => {
  const startTime = Date.now()
  await sleep(1000)
  const endTime = Date.now()
  expect(endTime - startTime).toBeGreaterThanOrEqual(1000)
})

test('rgb2Hex', () => {
  expect(rgb2Hex(0, 0, 0)).toBe('#000000')
  expect(rgb2Hex(255, 255, 255)).toBe('#ffffff')
})

test('getRandomColorHex', () => {
  for (let i = 0; i < 100; i++) {
    expect(parseInt(strShift(getRandomColorHex()), 16)).toBeGreaterThanOrEqual(0x0)
    expect(parseInt(strShift(getRandomColorHex()), 16)).toBeLessThanOrEqual(0xffffff)
  }
})

test('isDateValid', () => {
  expect(isDateValid(2014, 9, 10)).toBe(true)
  expect(isDateValid(Infinity)).toBe(false)
  expect(isDateValid("December 17, 1995 03:24:00")).toBe(true)
  expect(isDateValid("Decemberrrrr")).toBe(false)
  expect(isDateValid()).toBe(true)
})


test('dayOfYear', () => {
  const date = new Date('2014-1-1')
  expect(dayOfYear(date)).toBe(1)
})

test('dayDiff', () => {
  expect(dayDiff(new Date('2014-1-1'), new Date('2014-1-2'))).toBe(1)
  expect(dayDiff(new Date('2014-1-2'), new Date('2014-1-1'))).toBe(1)
})