/**
 * 获取min~max之间的随机整数
 * @param min 最小数
 * @param max 最大数
 * @returns 
 */
export const getRandomNumber = (min:number, max:number) => Math.floor(Math.random() * (max - min + 1)) + min;

/**
 * 获取min~max之间随机整数的工厂函数
 * @param min 最小数
 * @param max 最大数
 * @returns 
 */
export function getRandomNumberFactory(min:number, max:number) {
  return () => Math.floor(Math.random() * (max - min + 1)) + min;
}

/** 
 * 将字符串或整型数字补零至指定位数 
 * 比如 1 -> ${length * 0}1
 * @param target string | number
 * @param length number
 * @returns string
 */
export const zeroPadPre = (target:number | string, length:number = 1) => {
  if(typeof target === 'number')target = target.toString()
  while(target.length < length){
    target = '0' + target
  }
  return target
}





/** 
 * 判断输入是否为一个整数
 * @param val 
 * @returns boolean 
 */
export const isInteger = (val: number) => Math.floor(val) === val

/**
 * 将浮点数转成整数，返回整数和倍数。
 * 如 3.14 >> 314，倍数是 100, 返回 {times:100, num: 314}
 * @param floatNum 
 * @returns 
 */
function toInteger(floatNum: number) {
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
export const add = (a: number, b: number, ...args: Array<number>): number => {  
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
  // add(result / tmax, args.shift() as number, ...args) 这么写是为了防止ts类型报错
  return args.length ? add(result / tmax, args.shift() as number, ...args) : (result / tmax)
}

/**
 * 精准减法（避免浮点运算精度丢失）
 * @param a 
 * @param b 
 * @returns 
 */
export const sub = (a:number, b:number) => {
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
export const mul = (a:number, b:number, ...args: number[]): number => {
  let { num: n1, times: t1 } = toInteger(a)
  let { num: n2, times: t2 } = toInteger(b)
  let result = (n1 * n2) / (t1 * t2)

  return args.length ? mul(result, args.shift() as number, ...args) : result
}

/**
 * 精准除法（避免浮点运算精度丢失）
 * @param a 
 * @param b 
 * @returns 
 */
export function div(a:number, b:number){
  let { num: n1, times: t1 } = toInteger(a)
  let { num: n2, times: t2 } = toInteger(b)
  let result = (n1 / n2) * (t2 / t1)
  return result
}