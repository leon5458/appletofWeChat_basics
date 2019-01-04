Page({

  /**
   * 页面的初始数据
   */
  data: {
    widthScreen: null,
    moveData: null,
    moveData1:null,
    rotateData: null,
    alphaData: null,
    scaleData: null,
    skewData: null,
    matrixData: null

  },

  moveClick:function(){
    const animation = wx.createAnimation({
      duration: 3000,
      delay: 0,
      timingFunction: "ease",
    });
    animation.translate((this.data.widthScreen + 160), 0).step({ duration: 3000 })
    this.setData({ moveData: animation.export() })
  },

  moveClick1:function(){
   const animation = wx.createAnimation({
    //  delay: 0,
    //  timingFunction: "ease",
   })
   //设置循环动画
   this.animation = animation
    var flag = true;
    setInterval(function(){
      if(flag){
        animation.translate(300, 800).step({ duration: 3000 })
        flag = !flag
      }else{
        animation.translate(-200, -700).step({ duration: 3000 })
        flag = !flag
      }
      this.setData({
        moveData1: animation.export()
      })
    }.bind(this),1500)
  },


  rotateClick:function(){
    var animation = wx.createAnimation({
      
    })

    animation.rotate(180).step({duration:3000})
    this.setData({rotateData:animation.export()})
  },

  alphaClick:function(){
    const animation = wx.createAnimation({
      
    })
    animation.opacity(0.1).step({ duration: 2000 })
    this.setData({ alphaData: animation.export() })
  },

  scaleClick:function(){
  const animation = wx.createAnimation({
    
  })
    animation.scale(1.6).step({ duration: 2000 })
    this.setData({ scaleData: animation.export() })
  },

  skewClick:function(){
    const animation = wx.createAnimation({
      
    })
    animation.skew(160).step({ duration: 2000 })
    this.setData({ skewData: animation.export() })

  },

  matrixClick:function(){
    const animation = wx.createAnimation({
      
    })
    animation.matrix(1, 3, 4, 5, 2, 2).step({ duration: 2000 })
    this.setData({ matrixData: animation.export() })

  },

  queueClick:function(){
    const animation = wx.createAnimation({
      
    })
    
    animation.translate((this.data.widthScreen - 60), 0).scale(0.3).opacity(0.5).step({ duration: 3000 })
    this.setData({ queueData: animation.export() })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取屏蔽宽
    var thisBlock = this;
    wx.getSystemInfo({
      success: function(res) {
        thisBlock.setData({
          widthScreen: res.screenWidth

        })
      },
    })

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