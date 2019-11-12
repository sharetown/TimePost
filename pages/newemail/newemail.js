// pages/newemail/newemail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:null,
    name1: '写一封信',
    name2: '许愿墙',
    name3: '树洞',
    logo: '../../imgs/logo.png',
    input3:null,
    input0: null,
    input1:null,
    input2: null,
    imgs:[
      {
        src: '    https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2532438066,681854754&fm=26&gp=0.jpg'
      },
      
      {
      src: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=394853478,3778554247&fm=26&gp=0.jpg'
    },
      {
        src: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3335092526,347775526&fm=26&gp=0.jpg'
      },
      {
        src: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1405027988,523201045&fm=26&gp=0.jpg'
      },
      {
        src: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2116676111,2620739804&fm=26&gp=0.jpg'
      },
      {
        src: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=275484151,1677693835&fm=26&gp=0.jpg'
      }]
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
  submit: function (e) {
    this.setData({
      input3: e.detail.value.input3,
      input0: e.detail.value.input0,
      input1: e.detail.value.input1,
      input2: e.detail.value.input2
    })
  },
  formName2: function (e) {
    console.log(1)
    this.setData({
      input2: e.detail.value,
    })
  },
  formName0: function (e) {
    console.log(1)
    this.setData({
      input0: e.detail.value,
    })
  },
  formName1:function(e){
    console.log(1)
    this.setData({
      input1:e.detail.value,
    })
  },
  formName3: function (e) {
    console.log(1)
    this.setData({
      input3: e.detail.value,
    })
  },
  href:function(){
    console.log(1);
    console.log(this.data.input2);
    console.log(this.data.input0);
    console.log(this.data.input1);
    if (this.data.input1 == null & this.data.input0 == null & this.data.input2 == null) {
      wx.showModal({
        content: '请填写以上相关信息',
      })
    }
    else if (this.data.input2 == null & this.data.input0 != null & this.data.input1 != null) {
      wx.showModal({
        // title: '123',
        content: '请填写姓名',
      })
    } 
    else if (this.data.input0 == null & this.data.input1 != null & this.data.input2 != null) {
      wx.showModal({
        // title: '123',
        content: '请填写邮箱',
      })
    } 
    else if (this.data.input1 == null & this.data.input0 != null & this.data.input2 != null) {
      wx.showModal({
        // title: '123',
        content: '请填写发信时间',
      })
    }
    else if (this.data.input1 == null & this.data.input0 != null & this.data.input2 == null) {
      wx.showModal({
        // title: '123',
        content: '请填写完整信息',
      })
    }
    else if (this.data.input1 == null & this.data.input0 == null & this.data.input2 != null) {
      wx.showModal({
        // title: '123',
        content: '请填写完整信息',
      })
    }
    else if (this.data.input1 != null & this.data.input0 == null & this.data.input2 == null) {
      wx.showModal({
        // title: '123',
        content: '请填写完整信息',
      })
    }
    else {
      wx.showModal({
        // title: '123',
        content: '已发送，保存至个人中心',
      })
    
    }

  },
  goto:function(){
    // wx.navigateTo({
    //   url: '../my_emil/my_emil?name='+this.data.input2+'&emil='+this.data.input0+'&time='+this.data.input1+'&inform='+this.data.inform
    // })
    console.log(13)
    var name = this.data.input2;
    var emil = this.data.input0;
    var time = this.data.input1;
    var inform = this.data.input3;
    // var inform = this.data.inform
    wx.setStorageSync('emil1', name)
    wx.setStorageSync('emil2', emil)
    wx.setStorageSync('emil3', time)
    wx.setStorageSync('emil4', inform)
  },
  href1: function () {
    console.log(1);
    console.log(this.data.input3);
    if (this.data.input3==null){
       wx.showModal({
      // title: '123',
      content: '请输入内容',
    })
    }else{
       wx.showModal({
      // title: '123',
      content: '保存成功',
    })
    }
  



  },
  href2: function () {
    console.log(1);
    wx.showActionSheet({
      itemList: ['分享到腾讯微博', '分享到QQ好友', '分享到QQ空间', '分享到微信好友', '分享到土豆网'],
      success(res) {
        console.log(res.tapIndex)
        if (res.tapIndex == 0) {
          wx.showModal({
      // title: '123',
         content: '分享成功',
    })
        }
        if (res.tapIndex == 1) {
          wx.showModal({
            // title: '123',
            content: '分享成功',
          })
        }
        if (res.tapIndex == 2) {
          wx.showModal({
            // title: '123',
            content: '分享成功',
          })
        }
        if (res.tapIndex == 3) {
          wx.showModal({
            // title: '123',
            content: '分享成功',
          })
        }
        if (res.tapIndex == 4) {
          wx.showModal({
            // title: '123',
            content: '分享成功',
          })
        }
      },
      fail(res) {
        console.log(res.errMsg)
      },
     
    })
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.setData({
      name: options.name1
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