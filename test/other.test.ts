import { test, expect } from 'vitest';
import { formatTime, sleep } from '../src/other/index';

test('formatTime', () => {
  expect(formatTime(new Date, 'YYYY-MM-DD')).toBe('2024-10-01')
})

test('sleep', async () => {
  const startTime = Date.now()
  await sleep(1000)
  const endTime = Date.now()
  expect(endTime - startTime).toBeGreaterThan(1000)
})