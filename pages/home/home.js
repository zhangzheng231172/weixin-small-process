// pages/home/home.js
// 注册一个页面，
// 每个页面都有自己的生命周期函数

const app=getApp()
console.log(app.globalData.name)
const name=app.globalData.name;
const age=app.globalData.age;

Page({

  handleGetUserInfo(event){
    // console.log('--------')
    console.log(event)
  },

  //  页面的初始数据
  data: {
    // 2.初始化数据
    message: 'hahaha',
    list: []
  },


  //  生命周期函数--监听页面加载
  onLoad: function (options) {
    console.log('onLoad')
    console.log(this)
    // 1.获取网络数据
    wx.request({
      url: 'http://152.136.185.210:8000/api/n3/recommend',
      success: (res) => {
         console.log(res)
         console.log(this)

         const data=res.data.data.list;
         this.setData({
           list: data
         })
      }
    })
  },

  //   生命周期函数--监听页面初次渲染完成
  onReady: function () {
    console.log('onReady')
  },

  //  生命周期函数--监听页面显示,先show再ready
  onShow: function () {
    console.log('onShow')
  },


  //  * 生命周期函数--监听页面隐藏
  onHide: function () {
    console.log('onHide')
  },


  //  生命周期函数--监听页面卸载
  onUnload: function () {
    console.log('onUnload')
  },

  //  页面相关事件处理函数--监听用户下拉动作
  onPullDownRefresh: function () {
    console.log('onPullDownRefresh')
  },

    // 监听页面滚动
  onPageScroll(obj){
    // console.log(obj)
  },

  // 监听页面滑到底部
  onReachBottom(){
    console.log('onReachBottom')
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }

  // 3.监听事件

})