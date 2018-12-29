const app = getApp();
const util = require('../../../utils/util')

Page({
  /**
   * 页面的初始数据
   */
 
    data: {
      text: 'tomfriwel'
    },
  
  button1:function(){
    //延迟2秒后弹框
    setTimeout(function(){
      wx.showToast({
        title: '点击了',
        duration: 500
      }) 
    },1000)
  },
 
  tap: util.throttle(function (e) {
    console.log(this)
    console.log(e)
    console.log((new Date()).getSeconds())
  }, 1000),

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
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
})