import { test, expect } from 'vitest';
import { 
  StringUtils, 
  strPop, 
  obj2Query 
} from '../src/index';

test('string utils', () => {
  expect(StringUtils.strPop).toBeTypeOf('function')
  expect(StringUtils.obj2Query).toBeTypeOf('function')
  expect(strPop).toBeTypeOf('function')
  expect(obj2Query).toBeTypeOf('function')
})