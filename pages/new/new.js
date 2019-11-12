// pages/shudong/shudong.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: '秘密树洞',
    inform:null
  },
  // herf: function () {
  //   console.log(1);
  //   wx.navigateTo({
  //     url: '../moduan/moduan',
  //   })
  // },
  submit: function (e) {
    this.setData({
      inform: e.detail.value.inform,
    })
  },
  goto: function () {
    wx.navigateTo({
      url: '../mm/mm?inform=' + this.data.inform
    })
    console.log(13)
    var inform = this.data.inform
    wx.setStorageSync('mimi', inform)
  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.setData({
      name: options.name,
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
