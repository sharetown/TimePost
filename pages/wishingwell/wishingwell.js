// pages/wishingwell/wishingwell.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: null,
    nam1: null,
    nam2: null,
    name1: '写一封信',
    name2: '许愿墙',
    name3: '树洞',
    logo: '../../imgs/logo.png',
    a:null,
    b:null,
    c:null
  },
  formName1: function (e) {
    console.log(1)
    this.setData({
      a: e.detail.value,
    })
  },
  formName2: function (e) {
    console.log(1)
    this.setData({
      b: e.detail.value,
    })
  },
  formName3: function (e) {
    console.log(1)
    this.setData({
      c: e.detail.value,
    })
  },
  submit: function (e) {
    this.setData({
      a: e.detail.value.a,
      b: e.detail.value.b, 
      c: e.detail.value.c,
    })
  },
  goto: function () {
    console.log(1);
    wx.navigateTo({
      url: '../yuanwang/yuanwang?a='+this.data.a+'&b='+this.data.b+'&c='+this.data.c,
    })
    console.log(13)
    var a = this.data.a
    var b = this.data.b
    var c = this.data.c
    wx.setStorageSync('wish1', a)
    wx.setStorageSync('wish2', b)
    wx.setStorageSync('wish3', c)

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

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.setData({
      name: options.name,
      nam1: options.nam1,
      nam2: options.nam2,
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