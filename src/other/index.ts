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
 * 检查日期是否有效
 * @param dateStr 
 * @returns 
 */
// @ts-ignore
export const isDateValid = (...dateStr: (string | number)[]) => !Number.isNaN(new Date(...dateStr).valueOf());

/**
 * 给出一个日期，返回属于本年的第多少天
 * @param date 
 * @returns 
 */
export const dayOfYear = (date: Date) => Math.floor(((date as any) - (new Date(date.getFullYear(), 0, 0) as any)) / 86400000);

/**
 * 计算两个日期相差的天数
 * @param date1 
 * @param date2 
 * @returns 
 */
export const dayDiff = (date1: Date, date2: Date) => Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000)

/** 
 * 阻塞指定时间
 * 需要配合await使用
 * @param ms 时间，单位毫秒 
 */
export const sleep = (ms: number) => new Promise(r => setTimeout(r, ms))

/**
 * 将RGB转换为16进制
 * 结果为6位16进制数字字符串，字母小写
 * @param r red
 * @param g green
 * @param b blue
 * @returns 
 */
export const rgb2Hex = (r: number, g: number, b: number) => "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);

/**
 * 生成随机的16进制数
 * 结果为6位16进制数字字符串，字母小写
 * @returns 
 */
export const getRandomColorHex = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`