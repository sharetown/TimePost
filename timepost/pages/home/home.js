// pages/home/home.js
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
    time: null,
    beatuifull: [{
        wen: '你走以后，后来的故事我都是听别人说：这是你离开我的第一年零六个月，你的样子在我脑海里还是那么清晰随处可见。突然想起那句歌词“我过的不是很好，但想问你好吗”。自你离开以后，从此就丢了温柔，每天都在浑浑噩噩中度过，偶尔也还是会听到有关你的消息，还有你的故事。听说忘记一个人最好的方式就是开始一段新的感情，你选选择了新欢，而我选择了时间。他对你好吗？是否会像我一样每天起来给你弄早餐、是否像我一样在你肚子痛的时候把你搂在怀里、是否会像我一样为了你想吃的小吃为你跑几条街。我做过最勇敢的事，就是听别人说完你的故事。再见了，不管你在我心里下过多大的雪，我都应该收拾收拾，奔向春天了。以后没有我的日子里，愿你天黑有灯，下雨有伞，路上有良人相伴。'
      },
      {
        wen: '有人说，想要看一个人是否优秀，那就看他闲下来做什么。这世上有人忙里偷闲，利用坐车和排队的间隙，读书，思考，写作，也有人终日无所事事，虚度光阴。闲，并不是一个人的福气。相反，废掉一个人最快的方式就是让他闲下来。正如罗曼·罗兰所说：“生活中最沉重的负担不是工作，而是无聊。”'
      },
      {
        wen: '徐志摩曾说过：“一生中至少该有一次，为了某个人而忘记了自己，不求结果，不求同行，不求曾经拥有，甚至不求你爱我，只求在我最美的年华里，遇见你。”我不知道自己是何等的幸运能在茫茫人海中与你相遇？我也不知道你的出现是恩赐还是劫？但总归要说声“谢谢你，谢谢你曾来过……”'
      },
      {
        wen: '“路漫漫其修远兮，吾将上下而求索”人生的路坎坎坷坷，舍与得在一念之间，我也曾满怀期待所有的相遇与分别是事出有因或者可以久别重逢。可怎奈，当再次面临抉择时才知道有的相遇只是漫漫人生路上的一个劫，一份缘的未尽而已……'
      },
    ]
  },
  home: function() {
    wx.navigateTo({
      url: '../home/home'
    })
  },
  run: function() {
    wx.navigateTo({
      url: '../newemail/newemail?name1=带你穿越时空，给你不一样的体验'
    })
  },
  wishingwell: function() {
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
  onLoad: function(options) {
    //获取当前时间戳  
    var timestamp = Date.parse(new Date());
    timestamp = timestamp / 1000;

    // console.log("当前时间戳为：" + timestamp);

    //获取当前时间  
    var n = timestamp * 1000;
    var date = new Date(n);
    //年  
    var Y = date.getFullYear();
    //月  
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
    //日  
    var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    //时  
    var h = date.getHours();
    //分  
    var m = date.getMinutes();
    //秒  
    var s = date.getSeconds();
    var time = Y + '年' + M + '月' + D + '日';
    this.setData({
      time: time
    })

    //转换为时间格式字符串 
    var time = console.log(date.toLocaleString())
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