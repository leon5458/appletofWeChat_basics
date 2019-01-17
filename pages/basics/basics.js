Page({

  /**
   * 页面的初始数据
   */
  data: {
  },

  item_1_click:function(){
    wx.navigateTo({
      url: '../../pages/basics/progress/progress',
    })
  },

  item_2_click:function(){
    wx.navigateTo({
      url: '../../pages/basics/list/list',
    })
  },

  item_3_click:function(){
    wx.navigateTo({
      url: '../../pages/basics/refresh/refresh',
    })
  },

  item_4_click:function(){
    wx.navigateTo({
      url: '../../pages/basics/doubleclick/doubleclick',
    })
  },

  item_5_click:function(){
    wx.navigateTo({
      url:'../../pages/basics/clear/clear',
    })
  },

  item_6_click:function(){
    wx.navigateTo({
      url: '../../pages/basics/setdata/setdata',
    })
  },

  item_7_click:function(){
    wx.navigateTo({
      url: '../../pages/basics/template/post_detail/post_detail',
    })
  },

  item_8_click:function(){
    wx.navigateTo({
      url: '../../pages/basics/cache/cache',
    })
  },


  item_10_click:function(){
    wx.navigateTo({
      url: '../../pages/basics/tel/tel',
    })
  },

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