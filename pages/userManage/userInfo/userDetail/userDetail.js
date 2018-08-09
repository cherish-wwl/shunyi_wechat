// pages/userManage/userInfo/userDetail/userDetail.js
var app = getApp()
var isLogin = false;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userinfo:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 验证用户是否登录
    var isLogin = app.globalData.isLogin;
    //  判断是否登录，未登录则跳转到登录页面
    // if (!isLogin) {
    //   wx.navigateTo({
    //     url: '../../login/login',
    //   })
    // }
    console.log(options)
    var userID = options.userID
    // 根据用户id 获取用户信息
    var userInfo ={
      name:"袁月明",
      num:"6200000001",
      address:"前景路2号院001号楼-01-0101",
      phone:"13488733905"
    }
    this.setData({
      userinfo:userInfo
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