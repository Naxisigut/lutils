/** 
 * 判断输入是否为一个整数
 * @param val 
 * @returns boolean 
 */
const isInteger = (val) => Math.floor(val) === val

/**
 * 将浮点数转成整数，返回整数和倍数。
 * 如 3.14 >> 314，倍数是 100, 返回 {times:100, num: 314}
 * @param floatNum 
 * @returns 
 */
function toInteger(floatNum) {
  var ret = {times: 1, num: 0}
  if (isInteger(floatNum)) {
    ret.num = floatNum
    return ret
  }
  var strfi  = floatNum + ''
  var dotPos = strfi.indexOf('.')
  var len    = strfi.substr(dotPos+1).length
  var times  = Math.pow(10, len)
  var intNum = Number(floatNum.toString().replace('.',''))
  ret.times  = times // 倍数
  ret.num    = intNum // 整型数
  return ret
}

/**
 * 精准加法（避免浮点运算精度丢失）
 * @param a 参与运算的数1
 * @param b 参与运算的数2
 * @param args 其余所有参与运算的数
 * @returns 
 */
const add = (...args) => {  
  if (args.length === 0) return 0;
  if (args.length === 1) return args[0];
  let a = args[0]
  let b = args[1]
  let { num: n1, times: t1 } = toInteger(a)
  let { num: n2, times: t2 } = toInteger(b)
  let tmax = t1 > t2 ? t1 : t2
  let result = 0
  if (t1 === t2) { // 两个小数位数相同
    result = n1 + n2
  } else if (t1 > t2) { // o1 小数位 大于 o2
    result = n1 + n2 * (t1 / t2)
  } else { // o1 小数位 小于 o2
    result = n1 * (t2 / t1) + n2
  }

  // 若存在其它参数，递归调用函数以计算所有数之和
  args.splice(0, 2, result / tmax)
  return add(...args)
}

/**
 * 精准减法（避免浮点运算精度丢失）
 * @param a 
 * @param b 
 * @returns 
 */
const sub = (a, b) => {
  let { num: n1, times: t1 } = toInteger(a)
  let { num: n2, times: t2 } = toInteger(b)
  let tmax = t1 > t2 ? t1 : t2
  let result = 0
  if (t1 === t2) {
    result = n1 - n2
  } else if (t1 > t2) {
      result = n1 - n2 * (t1 / t2)
    } else {
      result = n1 * (t2 / t1) - n2
  }
  return result / tmax
}
/**
 * 精准乘法（避免浮点运算精度丢失）
 * @param a 
 * @param b 
 * @returns 
 */
const mul = (a, b, ...args) => {
  let { num: n1, times: t1 } = toInteger(a)
  let { num: n2, times: t2 } = toInteger(b)
  let result = (n1 * n2) / (t1 * t2)

  return args.length ? mul(result, args.shift(), ...args) : result
}

/**
 * 精准除法（避免浮点运算精度丢失）
 * @param a 
 * @param b 
 * @returns 
 */
const div = (a, b) => {
  let { num: n1, times: t1 } = toInteger(a)
  let { num: n2, times: t2 } = toInteger(b)
  let result = mul(n1 / n2, t2 / t1)
  return result
}

/**
 * 求平均值
 * @param args 
 * @returns 
 */
const average = (...args) => div(add(...args), args.length);

const AccurateCal = {
  add,
  sub,
  mul,
  div,
  average
}
export default AccurateCal