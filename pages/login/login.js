
//获取应用实例
var app = getApp()

var isLogin = false;

Page({
  data: {
    userName: '',
    passWd: '',
  },

  onLoad: function (options) {

  },
  //用户名，手机号，密码输入框
  userNameInput: function (e) {
    this.setData({
      userN: e.detail.value
    })
  },
  passWdInput: function (e) {
    this.setData({
      passW: e.detail.value
    })
  },

  //登录按钮点击事件，调用参数要用：this.data.参数；
  loginBtnClick: function () {
    console.log("点击-------------");
    var that = this;

    var userName = this.data.userN;

    var passWd = this.data.passW;
    if (userName == '') {
      console.log("用户名不能为空");
      toast('用户名不能为空');
      return;
    }
    if (passWd == '') {
      console.log("密码不能为空");
      toast('密码不能为空');
      return;
    }

    wx.showToast({
      title: '加载中',
      icon: 'loading'
    })


    // 发送网络请求
    wx.request({
      url: "http://ys.shunzhengjinfu.com/app/construction-by-phone-app!login.action?",
      // data: { phoneString: userName, passWord: passWd },
      data: { phoneString: "18560937681", passWord: "12345678" },
      method: 'GET',
      header: {
        "content-type": "application/json"
      },
      success: function (res) {
        // success
        var loginInfo = res.data
        
        if (loginInfo.Success) {
          console.log(res.data);

          app.globalData.isLogin = true;
          app.globalData.token = res.data.Data.token;
          // 至主页
          toast(loginInfo.Message);
          wx.switchTab({ url: "../index/index" });
         
        } else {
          var msg = loginInfo.Message;
          toast(loginInfo.Message);
        }
      },
      fail: function (res) {
        // fail
        toast('登录失败,请重试');
        console.log('登录失败:', res);
      },
      complete: function () {
        // complete
        console.log('comlete');
      }
    })


  },

})
function toast(toast) {
  wx.showToast({
    title: toast,
    duration: 2000
  })
}
