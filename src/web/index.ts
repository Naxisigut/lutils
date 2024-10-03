export * from './fetch'
export * from './file'

/** 
 * 以JSON解析后输出至工作台
 * @param obj 解析对象
 * @param tag 输出标签
 */
export const jsonLog = (obj: any, tag: string) => {
  const output = obj === undefined ? undefined : JSON.parse(JSON.stringify(obj))
  console.log(
    `%cJsonLog${tag ? `%c${tag}` : ''}`, 
    'background: #00cc00; color: #fff; border-radius: 3px 0 0 3px; padding: 2px 5px',
    tag ? 'background: #1475B2; color: #fff; border-radius: 0 3px 3px 0; padding: 2px 5px' : '',
    output
  );
}

/** 
 * 复制指定文本到剪切板1
 * 只在web环境中生效
 * @param string 
 * @returns
 */
export const copyTextOnWeb = (str: string) => {
  const ipt = document.createElement('input')
  ipt.value = str
  document.body.appendChild(ipt)
  ipt.select()
  const copyRes = document.execCommand('copy')
  document.body.removeChild(ipt)
  return copyRes
}

/**
 * 复制指定文本到剪切板2
 * 只在web环境中生效
 * @param text 
 * @returns 
 */
export const copyToClipboard = (text: string) => navigator.clipboard.writeText(text);

/**
 * 获取选中的文本
 * 只在web环境中生效
 * @returns 
 */
export const getSelectedText = () => window.getSelection()?.toString() || '';

/** 
 * 浏览器调用拨打电话
 * @param phoneNumber 
 */
export const callOnWeb = (phoneNumber: string) => {
  window.location.href = "tel://" + phoneNumber
}

/**
 * 获取浏览器Cookie
 * @param name 
 * @returns 
 */
export const getWebCookie = (name: string) => (`; ${document.cookie}`.split(`; ${name}=`).pop() as string).split(';').shift()

/**
 * 清除浏览器所有Cookie
 */
export const clearWebCookie = () => document.cookie.split(';').forEach(cookie => document.cookie = cookie.replace(/^ +/, '').replace(/=.\*/, `=;expires=${new Date(0).toUTCString()};path=/`))

/**
 * 回到顶部（适用于网页右下角快捷返回功能）
 * @returns 
 */
export const goToTop = () => window.scrollTo(0, 0);

/**
 * 检查用户是否处于暗模式
 */
export const isDarkMode = () => window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
