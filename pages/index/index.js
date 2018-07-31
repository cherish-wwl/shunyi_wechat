
var app = getApp()
var isLogin = false;

Page({
  data: {

    imgUrls: [
      // 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      // 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      // 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
      "/images/1.jpg",
      "/images/2.jpg",
      "/images/3.jpg",
      "/images/4.jpg"
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1500
  },

  onLoad() {

  },
  //缴费充值点击事件
  payment: function () {

    isLogin = app.globalData.isLogin;
    console.log(app.globalData.isLogin)
    console.log(isLogin)
    if (isLogin) {
      wx.navigateTo({
        url: '../payment/payment',
      })
      
    }else{
      wx.navigateTo({
        url: '../login/login',
      })
    }

  },
  //用户绑定点击事件
  bind: function () {

  },
  //报修预约点击事件
  baoxiu: function () {

  },
  //报装预约点击事件
  baozhaung: function () {

  },
  //新闻资讯点击事件
  news: function () {
    wx.navigateTo({
      url: '../newsList/newsList',
    })
  },
  //通知公告点击事件
  notices: function () {
    wx.navigateTo({
      url: '../notificationList/notificationList',
    })
  }
})