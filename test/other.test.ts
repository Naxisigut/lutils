import { test, expect } from 'vitest';
import { formatTime, sleep } from '../src/other/index';

test('formatTime', () => {
  const dateObj = new Date()
  const dateStr = `${dateObj.getFullYear()}-${dateObj.getMonth() + 1}-${dateObj.getDate().toString().length === 1 && 0}${dateObj.getDate()}`
  expect(formatTime(new Date, 'YYYY-MM-DD')).toBe(dateStr)
})

test('sleep', async () => {
  const startTime = Date.now()
  await sleep(1000)
  const endTime = Date.now()
  expect(endTime - startTime).toBeGreaterThan(1000)
})