// pages/welcome/welcome.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
   inTheaters:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var inTheatersURL=app.globalData.doubanBase+
    app.globalData.inTheaters+
    "?start=0&count= 10"
    this.getMovieListData(inTheatersURL,"inTheaters","影院热映");
    // this.getMovieListData(comingSoonURl,"comingSoon","即将上映")；
  },
  getMovieListData:function(url,
   settedKey,catagoryTitle){
   wx.showToast({
     title:'加载中',
     icon:'loading',
     duration:10000
   });
   var that = this;
   wx.request({
     url:url,
     method:'GET',
     header:{
       "content-type":"json"
     },
     success:function(res){
       var data = res.data;
       console.log(data);
     }
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
