// pages/userManage/userInfo/userInfo.js
var app = getApp()
var isLogin = false;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    typp: 1,
    userList:[]
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
    // 加载用户列表
    var userList = [
      { id: 1, name: '袁月明', num: "600000001", phone: 13488733905, portrait:'/images/app_logo.png' },
      { id: 2, name: '郑涛', num: "0200104120001", phone: 13488733905, portrait: '/images/app_logo.png' },
      { id: 11, name: '袁月明', num: "600000001", phone: 13488733905, portrait: '/images/app_logo.png' },
      { id: 22, name: '郑涛', num: "0200104120001", phone: 13488733905, portrait: '/images/app_logo.png' },
      { id: 13, name: '袁月明', num: "600000001", phone: 13488733905, portrait: '/images/app_logo.png' },
      { id: 23, name: '郑涛', num: "0200104120001", phone: 1348873390, portrait: '/images/app_logo.png' },
      { id: 23, name: '郑涛', num: "0200104120001", phone: 1348873390, portrait: '/images/app_logo.png' },
      { id: 14, name: '袁月明', num: "600000001", phone: 13488733905, portrait: '/images/app_logo.png' },
      { id: 23, name: '郑涛', num: "0200104120001", phone: 1348873390, portrait: '/images/app_logo.png' },
      { id: 24, name: '郑涛', num: "0200104120001", phone: 13488733905, portrait: '/images/app_logo.png' }
    ]

    this.setData({
      userList: userList
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