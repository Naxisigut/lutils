// @ts-nocheck


/* 获取平台信息 uniapp-微信小程序 支付宝小程序 */
export const getPlatForm = () => {
  // #ifdef MP-WEIXIN
  return 'weixin'
  // #endif
  // #ifdef MP-ALIPAY
  return 'alipay'
  // #endif
}

//#region 获取位置 uniapp-微信小程序 支付宝小程序
export const getLocation = () => {
  return new Promise((resolve, reject) => {
    // #ifdef MP-WEIXIN
    // 微信小程序中先检查是否有授权，没有的话重新请求授权后返回位置信息
    // 这里使用的是getFuzzyLocation，获取的是模糊位置，精度较低
    // 微信官方做了限制，特定品类的才能够使用getLocation，其他品类的只能使用getFuzzyLocation，且都需要申请和审核
    wx.getSetting({
      success: (res) => {
        if(res.authSetting['scope.userFuzzyLocation']){
          wx.getFuzzyLocation({
            type: 'gcj02',
            success: (res) => resolve(res),
            fail: (err) => reject({ code: 1, err})
          })
        }else{
          wx.authorize({
            scope: 'scope.userFuzzyLocation',
            success: () => {
              wx.getFuzzyLocation({
                type: 'gcj02',
                success: (res) => resolve(res), 
                fail: (err) => reject({ code: 2, err})
              })
            },
            fail: (err) => reject({ code: 3, err})
          })
        }
      },
      fail: (err) => reject({ code: 4, err})
    })
    // #endif


    // #ifdef MP-ALIPAY
    my.getLocation({
      type: 2,
      success: (res) => resolve(res), 
      fail: (err) => reject({ code: 5, err})
    })
    // #endif
  })
}
//#endregion


/* 滚动到指定位置 uniapp */
export const pageScrollTo = (data = {
  scrollTop: 0,
  duration: 2000
}) => {
  // #ifdef MP-ALIPAY
  // 20250722 使用uniapp api，支付宝无动画效果
  my.pageScrollTo(data)
  // #endif
  // #ifndef MP-ALIPAY
  uni.pageScrollTo(data)
  // #endif
}

/* 获取状态栏高度 uniapp */
// 常用于自定义导航栏
export const getStatusBarHeight = () => {
  return uni.getSystemInfoSync().statusBarHeight || 0
}

/* 获取标题栏高度 uniapp */
// 常用于自定义导航栏
export const getTitleBarHeight = () => {
  let titleBarHeight = 0
  // #ifdef MP-WEIXIN
  // 标题栏即导航栏，两个名称一个事物
  // 微信小程序中没有返回标题栏高度，所以需要通过胶囊按钮的高度来计算
  const custom = wx.getMenuButtonBoundingClientRect()
  const statusBarHeight = getStatusBarHeight()
  // titleBarHeight（导航栏高度/标题栏高度） = 胶囊高度 + （顶部距离 - 状态栏高度）*2
  titleBarHeight = custom.height + (custom.top - statusBarHeight) * 2
  // #endif

  // #ifndef MP-WEIXIN
  titleBarHeight = uni.getSystemInfoSync().titleBarHeight || 0
  // #endif
  return titleBarHeight
}

/* 获取底部安全区域高度 uniapp */
// 常用于自定义tabbar
export const getBottomSafeHeight = () => {
  return uni.getSystemInfoSync().safeAreaInsets.bottom || 0
}
