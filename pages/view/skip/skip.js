Page({

  /**
   * 页面的初始数据
   */
  data: { 
      name:"胡雷阳",
      tel:"13162795419",
      adress:"上海市浦东新区张家浜路88号",
      city:""

  },



  submit: function () {
    console.log(this.data.city)
    wx.setStorageSync('city', this.data.city)//缓存
    wx.navigateTo({
      url: '../../view/skip/detail/detail?name=胡雷阳&tel=13162795419&adress=上海市浦东新区张家浜路88号', 
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

  input:function(e){
    this.setData({
      city: e.detail.value
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})