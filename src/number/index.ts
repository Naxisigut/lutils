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
 * 判断是否是偶数
 * @param num 
 * @returns 
 */
export const isEven = (num: number) => num % 2 === 0;

/** 
 * 判断输入是否为一个整数
 * @param val 
 * @returns boolean 
 */
export const isInteger = (val: number) => Math.floor(val) === val







