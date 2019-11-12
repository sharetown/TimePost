// pages/qinggan/qinggan.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name2: '情感树洞',
    qinggan:null

  },
  submit: function (e) {
    this.setData({
      qinggan: e.detail.value.qinggan
    })
  },
  goto: function () {
    wx.navigateTo({
      url: '../mm/mm?qinggan=' + this.data.qinggan
    })
    console.log(13)
    var qinggan = this.data.qinggan
    wx.setStorageSync('qg', qinggan)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(options)
    this.setData({
      name2: options.name2,
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