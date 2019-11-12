// pages/xinqing/xinqing.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name1: '心情树洞',
    xingqing:null
  },
  submit: function (e) {
    this.setData({
      xingqing: e.detail.value.xingqing,
    })
  },
goto: function () {
    wx.navigateTo({
      url: '../mm/mm?xingqing=' + this.data.xingqing
    })
    console.log(13)
    var xingqing = this.data.xingqing
    wx.setStorageSync('xq', xingqing)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(options)
    this.setData({
      name1: options.name1,
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})