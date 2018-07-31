
var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {

    pageData: {}, //列表数据


  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    var pageData = {}
    var that = this
    console.log(app.globalData.token)
    pageData = getBindUser()
    // this.setData({pageData: pageData})

  },

})

function getBindUser() {
  console.log("请求数据");
  var that = this;

  wx.showToast({
    title: '加载中',
    icon: 'loading'
  })


  // 发送网络请求
  wx.request({
    url: "http://ys.shunzhengjinfu.com/app/construction-by-phone-app!login.action?",
    // data: { phoneString: userName, passWord: passWd },
    data: { token: app.globalData.token },
    method: 'POST',
    header: {
      "content-type": "application/json"
    },
    success: function (res) {
      // success
      var loginInfo = res.data

      if (loginInfo.Success) {
        console.log(res.data);

      } else {
        var msg = loginInfo.Message;
        toast(loginInfo.Message);
      }
    }
  })


}