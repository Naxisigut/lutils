import { test, expect } from "vitest"
import {
  ArrayUtils,
  getRandomFromArr,
  NumberUtils,
  getRandomNumber,
  getRandomNumberFactory,
  zeroPadPre,
  isInteger,
  add,
  sub,
  mul,
  div,
  numSanitize,
  OtherUtils,
  formatTime,
  sleep,
  StringUtils,
  strPop,
  obj2Query,
  WebUtils,
  easyFetch,
  file2Url,
  copyTextOnWeb,
  callOnWeb,
  jsonLog,
} from "../src/index"

test("array utils", () => {
  expect(ArrayUtils.getRandomFromArr).toBeTypeOf("function")
  expect(getRandomFromArr).toBeTypeOf("function")
})

test("number utils", () => {
  expect(NumberUtils.add).toBeTypeOf("function")
  expect(NumberUtils.sub).toBeTypeOf("function")
  expect(NumberUtils.mul).toBeTypeOf("function")
  expect(NumberUtils.div).toBeTypeOf("function")
  expect(NumberUtils.getRandomNumber).toBeTypeOf("function")
  expect(NumberUtils.getRandomNumberFactory).toBeTypeOf("function")
  expect(NumberUtils.isInteger).toBeTypeOf("function")
  expect(NumberUtils.numSanitize).toBeTypeOf("function")
  expect(NumberUtils.zeroPadPre).toBeTypeOf("function")
  expect(add).toBeTypeOf("function")
  expect(sub).toBeTypeOf("function")
  expect(mul).toBeTypeOf("function")
  expect(div).toBeTypeOf("function")
  expect(getRandomNumber).toBeTypeOf("function")
  expect(getRandomNumberFactory).toBeTypeOf("function")
  expect(isInteger).toBeTypeOf("function")
  expect(numSanitize).toBeTypeOf("function")
  expect(zeroPadPre).toBeTypeOf("function")
})

test("other utils", () => {
  expect(OtherUtils.formatTime).toBeTypeOf("function")
  expect(OtherUtils.sleep).toBeTypeOf("function")
  expect(formatTime).toBeTypeOf("function")
  expect(sleep).toBeTypeOf("function")
})

test("web utils", () => {
  expect(WebUtils.easyFetch.get).toBeTypeOf("function")
  expect(WebUtils.easyFetch.post).toBeTypeOf("function")
  expect(WebUtils.file2Url).toBeTypeOf("function")
  expect(WebUtils.copyTextOnWeb).toBeTypeOf("function")
  expect(WebUtils.callOnWeb).toBeTypeOf("function")
  expect(WebUtils.jsonLog).toBeTypeOf("function")

  expect(easyFetch.get).toBeTypeOf("function")
  expect(easyFetch.post).toBeTypeOf("function")
  expect(file2Url).toBeTypeOf("function")
  expect(copyTextOnWeb).toBeTypeOf("function")
  expect(callOnWeb).toBeTypeOf("function")
  expect(jsonLog).toBeTypeOf("function")
})

test("string utils", () => {
  expect(StringUtils.strPop).toBeTypeOf("function")
  expect(StringUtils.obj2Query).toBeTypeOf("function")
  expect(strPop).toBeTypeOf("function")
  expect(obj2Query).toBeTypeOf("function")
})
