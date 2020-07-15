//app.js
// 注册小程序示例，绑定生命周期函数
// 监听
App({
  // 小程序初始化完成时，执行的生命周期函数,异步执行
  onLaunch: function () {
  },

  // 页面显示出来后执行的生命周期函数
  onShow: function(options) {
    // 1.判断进入小程序的场景
    console.log(options)
    switch (options) {
      case 1001:
        break;
        case 1005:
          break;
    }

    // 2.获取用户信息
    wx.getUserInfo({
      success: function (res) {
        console.log(res)
      },
    })
  },

// 页面被隐藏会执行
  onHide: function () {
    console.log('界面被隐藏起来会执行：onHide')
  },

  // 发生错误会执行
  onError: function () {
    console.log('界面发生错误会执行：onError')
  },

  // 保存全局变量
  globalData: {
    name: 'zhangzheng',
    age: 25
  }
})