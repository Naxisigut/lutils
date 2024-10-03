import { test, expect } from "vitest"
import {
  ArrayUtils, //数组
  getRandomFromArr,
  getArrDistinct,
  shuffleArray,
  isNotEmptyArr,
  
  NumberUtils, //数字
  getRandomNumber,
  getRandomNumberFactory,
  zeroPadPre,
  isInteger,
  isEven,
  add,
  sub,
  mul,
  div,
  average,
  numSanitize,
  OtherUtils, //其它
  formatTime,
  isDateValid,
  dayOfYear,
  dayDiff,
  sleep,
  rgb2Hex,
  getRandomColorHex,
  StringUtils, //字符串
  strPop,
  strShift,
  capitalize,
  strReverse,
  obj2Query,
  getQueryObj,
  WebUtils, //web
  easyFetch,
  file2Url,
  copyTextOnWeb,
  copyToClipboard,
  getSelectedText,
  getWebCookie,
  clearWebCookie,
  goToTop,
  isDarkMode,
  callOnWeb,
  jsonLog,
} from "../src/index"

test("array utils", () => {
  expect(ArrayUtils.getRandomFromArr).toBeTypeOf("function")
  expect(ArrayUtils.getArrDistinct).toBeTypeOf("function")
  expect(ArrayUtils.shuffleArray).toBeTypeOf("function")
  expect(ArrayUtils.isNotEmptyArr).toBeTypeOf("function")
  expect(getRandomFromArr).toBeTypeOf("function")
  expect(getArrDistinct).toBeTypeOf("function")
  expect(shuffleArray).toBeTypeOf("function")
  expect(isNotEmptyArr).toBeTypeOf("function")
})

test("number utils", () => {
  expect(NumberUtils.add).toBeTypeOf("function")
  expect(NumberUtils.sub).toBeTypeOf("function")
  expect(NumberUtils.mul).toBeTypeOf("function")
  expect(NumberUtils.div).toBeTypeOf("function")
  expect(NumberUtils.average).toBeTypeOf("function")
  expect(NumberUtils.getRandomNumber).toBeTypeOf("function")
  expect(NumberUtils.getRandomNumberFactory).toBeTypeOf("function")
  expect(NumberUtils.isInteger).toBeTypeOf("function")
  expect(NumberUtils.isEven).toBeTypeOf("function")
  expect(NumberUtils.numSanitize).toBeTypeOf("function")
  expect(NumberUtils.zeroPadPre).toBeTypeOf("function")
  expect(add).toBeTypeOf("function")
  expect(sub).toBeTypeOf("function")
  expect(mul).toBeTypeOf("function")
  expect(div).toBeTypeOf("function")
  expect(average).toBeTypeOf("function")
  expect(getRandomNumber).toBeTypeOf("function")
  expect(getRandomNumberFactory).toBeTypeOf("function")
  expect(isInteger).toBeTypeOf("function")
  expect(isEven).toBeTypeOf("function")
  expect(numSanitize).toBeTypeOf("function")
  expect(zeroPadPre).toBeTypeOf("function")
})

test("other utils", () => {
  expect(OtherUtils.formatTime).toBeTypeOf("function")
  expect(OtherUtils.isDateValid).toBeTypeOf("function")
  expect(OtherUtils.dayOfYear).toBeTypeOf("function")
  expect(OtherUtils.dayDiff).toBeTypeOf("function")
  expect(OtherUtils.sleep).toBeTypeOf("function")
  expect(OtherUtils.rgb2Hex).toBeTypeOf("function")
  expect(OtherUtils.getRandomColorHex).toBeTypeOf("function")
  expect(formatTime).toBeTypeOf("function")
  expect(isDateValid).toBeTypeOf("function")
  expect(dayOfYear).toBeTypeOf("function")
  expect(dayDiff).toBeTypeOf("function")
  expect(sleep).toBeTypeOf("function")
  expect(rgb2Hex).toBeTypeOf("function")
  expect(getRandomColorHex).toBeTypeOf("function")
})

test("string utils", () => {
  expect(StringUtils.strPop).toBeTypeOf("function")
  expect(StringUtils.strShift).toBeTypeOf("function")
  expect(StringUtils.capitalize).toBeTypeOf("function")
  expect(StringUtils.strReverse).toBeTypeOf("function")
  expect(StringUtils.obj2Query).toBeTypeOf("function")
  expect(StringUtils.getQueryObj).toBeTypeOf("function")
  expect(strPop).toBeTypeOf("function")
  expect(strShift).toBeTypeOf("function")
  expect(capitalize).toBeTypeOf("function")
  expect(strReverse).toBeTypeOf("function")
  expect(obj2Query).toBeTypeOf("function")
  expect(getQueryObj).toBeTypeOf("function")
})

test("web utils", () => {
  expect(WebUtils.easyFetch.get).toBeTypeOf("function")
  expect(WebUtils.easyFetch.post).toBeTypeOf("function")
  expect(WebUtils.file2Url).toBeTypeOf("function")
  expect(WebUtils.copyTextOnWeb).toBeTypeOf("function")
  expect(WebUtils.copyToClipboard).toBeTypeOf("function")
  expect(WebUtils.getSelectedText).toBeTypeOf("function")
  expect(WebUtils.callOnWeb).toBeTypeOf("function")
  expect(WebUtils.getWebCookie).toBeTypeOf("function")
  expect(WebUtils.clearWebCookie).toBeTypeOf("function")
  expect(WebUtils.goToTop).toBeTypeOf("function")
  expect(WebUtils.isDarkMode).toBeTypeOf("function")
  expect(WebUtils.jsonLog).toBeTypeOf("function")

  expect(easyFetch.get).toBeTypeOf("function")
  expect(easyFetch.post).toBeTypeOf("function")
  expect(file2Url).toBeTypeOf("function")
  expect(copyTextOnWeb).toBeTypeOf("function")
  expect(copyToClipboard).toBeTypeOf("function")
  expect(getSelectedText).toBeTypeOf("function")
  expect(callOnWeb).toBeTypeOf("function")
  expect(getWebCookie).toBeTypeOf("function")
  expect(clearWebCookie).toBeTypeOf("function")
  expect(goToTop).toBeTypeOf("function")
  expect(isDarkMode).toBeTypeOf("function")
  expect(jsonLog).toBeTypeOf("function")
})

