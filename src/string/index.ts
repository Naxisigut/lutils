/** 
 * 返回删除字符串的最后一位的结果
 * @param str 
 * @returns 
 */
export const strPop = (str: string) => str.slice(0, -1)

/**
 * 将对象拼接为请求字符串
 * @param params 参数对象
 * @param noQM 是否需要前面的问号
 * @returns string
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