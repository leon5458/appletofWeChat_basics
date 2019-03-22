Page({

  /**
   * 页面的初始数据
   */
  data: {
    showModal : false,
    showDialog: false
  },

  submit: function () {
    this.setData({
      showModal: true
    })
  },

  preventTouchMove: function () {
  },

  go: function () {
    this.setData({
      showModal: false
    })
  },

  /**
    * 控制 pop 的打开关闭
    * 该方法作用有2:
    * 1：点击弹窗以外的位置可消失弹窗
    * 2：用到弹出或者关闭弹窗的业务逻辑时都可调用
    */
  toggleDialog() {
    this.setData({
      showDialog: !this.data.showDialog
    });
  },

  btn77 : function(){
    this.setData({
      showDialog: !this.data.showDialog
    })
  },

  btn11 :function(){
    wx.showToast({
      title: '你是谁',
      duration:2000,
      icon:'success'
    })
  },

  btn22 : function(){
    wx.showLoading({
      title: '加载中',
    })
    setTimeout(function(){
      wx.hideLoading()
    },2000)
  },

  btn33 :function(){
    wx.showActionSheet({
      itemList: ['苹果','香蕉','栗子','菠萝'],
      success(res){
        console.log(res.tapIndex)
      },
       fail(res){
       console.log(res.tapIndex)
       }
    })
  },

  btn44 :function(){
   wx.showModal({
     title: '温馨提示',
     content: '是否删除内容',
   })
},
 
 btn55 : function(){
   wx.showModal({
     title: '删除图片',
     content: '确定要删除该图片？',
     showCancel: true,//是否显示取消按钮
     cancelText: "否",//默认是“取消”
     cancelColor: 'skyblue',//取消文字的颜色
     confirmText: "是",//默认是“确定”
     confirmColor: 'skyblue',//确定文字的颜色
     success: function (res) {
       if (res.cancel) {
         //点击取消,默认隐藏弹框
       } else {
         //点击确定
         temp.splice(index, 1),
           that.setData({
             tempFilePaths: temp,
           })
       }
     },
     fail: function (res) { },//接口调用失败的回调函数
     complete: function (res) { },//接口调用结束的回调函数（调用成功、失败都会执行）
   })
 },

 btn66 : function(){
   wx.showModal({
     title : "标题",
     content : "内容",
     showCancel: false
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