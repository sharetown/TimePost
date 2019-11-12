// pages/shudong/shudong.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: '时光邮局',
    name1: '写一封信',
    name2: '许愿墙',
    name3: '树洞',
    logo: '../../imgs/logo.png',

  },
  home: function () {
    wx.switchTab({
      url: '../home/home',
    })
  },
  run: function () {
    wx.navigateTo({
      url: '../newemail/newemail?name1=带你穿越时空，给你不一样的体验'
    })
  },
  wishingwell: function () {
    wx.navigateTo({
      url: '../wishingwell/wishingwell?name=一月后的愿望:&nam1=一年后的愿望：&nam2=十年后的愿望:'
    })
  },
  shudong: function () {
    wx.navigateTo({
      url: '../shudong/shudong'
    })
  },
  herf1: function() {
    console.log(1);
    wx.navigateTo({
      url: '../new/new?name=秘密树洞',
    })
  },
  herf2: function() {
    console.log(1);
    wx: wx.navigateTo({
      url: '../xinqing/xinqing?name1=心情树洞',
    })
  },
  herf3: function() {
    console.log(1);
    wx: wx.navigateTo({
      url: '../qinggan/qinggan?name2=情感树洞',
    })
  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
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