// pages/friendhome/friendhome.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: null,
    infor:null,
    record:null,
    type1: '详情',
    type2: '邮件记录',
    type: '详情'


  },
  tleft: function() {
    console.log();
    console.log(this.data);
    var record = this.data.record
      this.setData({
        type:'详情',
        infor: record
      })
  },
  tright: function () {
    console.log();
    console.log(this.data);
    this.setData({
      type: '邮件记录',
      infor: '2019年11月5日 晚上19：00'
    })
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.setData({
      infor: options.infor,
      name: options.name,
      record: options.infor
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