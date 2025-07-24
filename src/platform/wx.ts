/* 获取状态栏 + 胶囊高度 */
export function getTitleBarHeight(){
  // @ts-ignore
  const sysInfo = wx.getSystemInfoSync() // 系统信息
  const statusHeight = sysInfo.statusBarHeight // 系统状态栏高度
  // @ts-ignore
  const capInfo = wx.getMenuButtonBoundingClientRect() // 小程序胶囊信息
  const capHeight = capInfo.height // 胶囊高度
  const capHeightDiff = capInfo.top - statusHeight // 胶囊顶部到屏幕顶部的距离 与 状态栏底部到屏幕顶部的距离 的高度差
  const height = statusHeight + capHeight + 2 * capHeightDiff 

  // console.log(111 ,sysInfo);
  // console.log(222 ,statusHeight);
  // console.log(333, capInfo);
  // console.log(444, capHeight);
  // console.log(555, capHeightDiff);
  // console.log(666, height);
  return height as number

}
