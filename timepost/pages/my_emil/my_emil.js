// pages/my_emil/my_emil.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:null,
    emil:null,
    time:null,
    inform:null

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.setData({
      name:options.name,
      emil:options.emil,
      time:options.time,
      inform: options.inform
    })

    console.log(wx.getStorageSync('emil1'))
    console.log(wx.getStorageSync('emil2'))
    console.log(wx.getStorageSync('emil3'))
    console.log(wx.getStorageSync('emil4'))
    this.setData({
      emil1: wx.getStorageSync('emil1'),
      emil2: wx.getStorageSync('emil2'),
      emil3: wx.getStorageSync('emil3'),
      emil4: wx.getStorageSync('emil4')
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