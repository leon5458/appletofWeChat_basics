Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:"",
    sex:"",
    birth:"",
    tel:""
  },
 
  save_content:function(e){
   if(this.data.name=="" || this.data.sex =="" ||this.data.birth=="" || this.data.tel==""){
     wx.showToast({
       title: '填写内容为空',
     })
   }else {

     wx.setStorage({
       key: "name",
       data: this.data.name,
       success: function () {
         console.log('写入value1成功')
       },
       fail: function () {
         console.log('写入value1发生错误')
       }
     })

     wx.setStorage({
       key: "sex",
       data: this.data.sex,
       success: function () {
         console.log('写入value2成功')
       },
       fail: function () {
         console.log('写入value2发生错误')
       }
     })

     wx.setStorage({
       key: "birth",
       data: this.data.birth,
       success: function () {
         console.log('写入value3成功')
       },
       fail: function () {
         console.log('写入value3发生错误')
       }
     })

     wx.setStorage({
       key: "tel",
       data: this.data.tel,
       success: function () {
         console.log('写入value4成功')
       },
       fail: function () {
         console.log('写入value4发生错误')
       }
     })

   }
   

    
     
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     var that = this ;
     wx.getStorage({
       key: 'name',
       success: function(res) {
         console.log(res)
         that.setData({
           name:res.data
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