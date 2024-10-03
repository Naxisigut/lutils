/** 
 * 返回删除字符串的最后一位的结果
 * @param str 
 * @returns 
 */
export const strPop = (str: string) => str.slice(0, -1)

/**
 * 返回删除字符串的第一位的结果
 * @param str 
 * @returns 
 */
export const strShift = (str: string) => str.slice(1)

/**
 * 字符串首字母大写
 * @param str 
 * @returns 
 */
export const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1)

/**
 * 反转字符串
 * @param str 
 * @returns 
 */
export const strReverse = (str: string) => str.split('').reverse().join('');



/**
 * 将对象拼接为请求字符串
 * @param params 参数对象
 * @param noQM 是否需要前面的问号
 * @returns string
 * 可能有问题，值类型为数字和字符串结果是一样的
 */
export const obj2Query = (params: Record<string, any>, noQM: boolean = false) => {
  const arr = Object.entries(params)
  if(!arr.length)return ''
  let query = ''
  for(let [key, val] of arr){
    query += `&${key}=${val}`
  }
  
  return `${noQM ? '' : '?'}${query.slice(1)}` 
}

/**
 * 从URL中获取查询参数对象
 * @param URL 
 * @returns 
 */
export const getQueryObj = (URL: string) => {
  let str = decodeURI(URL.split("?")[1] || '').replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"')
  return str ? JSON.parse(`{"${str}"}`) : {}
}