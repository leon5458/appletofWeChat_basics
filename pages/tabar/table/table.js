Page({

  /**
   * 页面的初始数据
   */
  data: {
    // table_data:[
    //   {"name":"Button"},
    //   { "name": "checkbox" }
    // ],
    
  },

  // table_item_click: function (options){
  //   console.log(options)
  //   var that = this
  //   var id = options.currentTarget.dataset;
  //   console.log(id)
  //   wx.navigateTo({
  //     url: '../../pages/table/button/button',
       
  //   })
  // },


  btn_click:function(){
    wx.navigateTo({
      url: '../../../pages/table/button/button',
    })
  },

  check_click:function(){
    wx.navigateTo({
      url: '../../../pages/table/checkbox/checkbox',
    })
  },

  switch_click:function(){
    wx.navigateTo({
      url: '../../../pages/table/switch/switch',
    })
  },

  textarea_click:function(){
    wx.navigateTo({
      url: '../../../pages/table/textarea/textarea',
    })
  } ,

  slider_click:function(){
    wx.navigateTo({
      url: '../../../pages/table/slider/slider',
    })
  },

  radio_click:function(){
    wx.navigateTo({
      url: '../../../pages/table/radio/radio',
    })
  },

  picker_click:function(){
    wx.navigateTo({
      url: '../../../pages/table/picker/picker',
    })
  },

  form_click:function(){
    wx.navigateTo({
      url: '../../../pages/table/form/form',
    })
  },

  input_click:function(){
    wx.navigateTo({
      url: '../../../pages/table/input/input',
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