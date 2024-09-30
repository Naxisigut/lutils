/**
 * 获取数组内的随机元素
 * @param array 
 * @returns 9
 */
export function getRandomFromArr(array: Array<any>) {
  let idx = Math.floor(Math.random() * array.length);
  return array[idx];
}