/**
 * 格式化时间
 * @param date 
 * @param formatStr 
 * @returns 
 */
export const formatTime = (date: Date, formatStr: string) => {
  const formatType = {
    Y: date.getFullYear(),
    M: date.getMonth() + 1,
    D: date.getDate(),
    h: date.getHours(),
    m: date.getMinutes(),
    s: date.getSeconds(),
  }
  type keys = 'Y' | 'M' | 'D' | 'h' | 'm' | 's'
  return formatStr.replace(
    /Y+|M+|D+|h+|m+|s+/g,
    target => (new Array(target.length).join('0') + formatType[target[0] as keys]).substr(-target.length)
  )
}


/** 
 * 阻塞指定时间
 * 需要配合await使用
 * @param ms 时间，单位毫秒 
 */
export const sleep = (ms: number) => new Promise(r => setTimeout(r, ms))