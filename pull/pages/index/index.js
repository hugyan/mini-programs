//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    vertical: false,
    autoplay: true,
    interval: 3000,
    duration: 500,
    images: [
     'http://www.kfc.com.cn/kfccda/UploadPic/HomePage/201704/20170424014514_10.jpg',
     'http://www.kfc.com.cn/kfccda/UploadPic/HomePage/201704/20170424014651_46.jpg',
     'http://www.kfc.com.cn/kfccda/UploadPic/HomePage/201703/20170320121212_90.jpg',
     'http://www.kfc.com.cn/kfccda/UploadPic/HomePage/201704/20170424014405_11.jpg'
    ]
  },
  toSelectKFC: function() {
    wx.navigateTo({
      url:'/pages/order/order'
    })
    console.log('点击了按钮');
  },
  onPullDownRefresh: function() {
    console.log('ddd');
  },
  onReachBottom: function() {
    console.log('bottom');
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
