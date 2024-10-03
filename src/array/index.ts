/**
 * 获取数组内的随机元素
 * @param array 
 * @returns 9
 */
export function getRandomFromArr(array: Array<any>) {
  let idx = Math.floor(Math.random() * array.length);
  return array[idx];
}

/**
 * 数组去重
 * @param arr 
 * @returns 
 */
export const getArrDistinct = (arr: Array<any>) => [...new Set(arr)];

/**
 * 数组随机排序
 * @param arr 
 * @returns 
 */
export const shuffleArray = (arr: Array<any>) => arr.sort(() => 0.5 - Math.random());

/**
 * 判断数组是否不为空
 * @param arr 
 * @returns 
 */
export const isNotEmptyArr = (arr: Array<any>) => Array.isArray(arr) && arr.length > 0;