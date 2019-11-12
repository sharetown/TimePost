// pages/friend/friend.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:null,
    emil:null,
    url: '../friendhome/friendhome',
    src: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2962166990,353693425&fm=26&gp=0.jpg',
    imgs:[
      { name:' 彭 松',
        infor:'2106474371@qq.com'
      },
      {name: ' 田文文',
        infor: '2453763440@qq.com'
      },
      {name: ' 池 豪',
        infor: '2267949319@qq.com'
      }
    ]
  },
  // 向数组添加元素




  
  // opationArray() {
  //   var obj = { name: "周小屋", infor: "125" };
  //   var arrayT = this.data.imgs;
  //   arrayT.push(obj);
  //   this.setData({ imgs: arrayT });
  // },
  // change(e) {
  //   var index = e.currentTarget.dataset.id;
  //   var deletedtodo = 'todos[' + index + '].idDelete';
  //   this.setData({
  //     [deletedtodo]: true
  //   })
  // },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    if (options != undefined) {
      var imgsnow = this.data.imgs;
      var newobj = {
        name: options.name,
        infor: options.emil
      }
      imgsnow.push(newobj);
      this.setData({
        imgs: imgsnow
      })
    }
   

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function (options) {
    
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