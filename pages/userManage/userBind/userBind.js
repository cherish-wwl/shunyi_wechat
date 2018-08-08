// pages/userManage/userBind/userBind.js
var app = getApp()
var isLogin = false;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    clientNum:'',
    clientName:'',
    activeIndex:'1',
    plotNum:"",
    buildingNum:'',
    unitNum:'',
    houseNum:'',
    hostName:'',
    hiddenmodalput:true,
    plotData:null,
  },
  // 设置当前显示的tab页
  setActive: function (e) {
    console.log(e)
    var index = e.currentTarget.dataset.num
    this.setData({
      activeIndex:index
    })
  },
  // 绑定客户编号输入事件
  inputOne: function () {

  },
  // 绑定客户名称输入事件
  inputTwo: function () {

  },
  // 显示弹出框
  showModel:function () {
    // 加载小区数据
    var plotData = [{ id: 1, name: "小区1" },{ id: 2, name: "小区2" },
      { id: 3, name: "小区3" }, { id: 4, name: "小区4" }, { id: 5, name: "小区5" }, 
      { id: 6, name: "小区6" }]
    this.setData ({
      plotData: plotData,
      hiddenmodalput: false
    })
    
  },
  // 获取选中的小区 
  choosePolt: function (e) {
    console.log(e)
    this.setData({
      hiddenmodalput: true,
      plotNum: e.currentTarget.dataset.plotnum
    })
  },
  hideModel: function (){
    this.setData({
      hiddenmodalput: true
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    isLogin = app.globalData.isLogin;
  //  判断是否登录，未登录则跳转到登录页面
    // if (!isLogin) {
    //   wx.navigateTo({
    //     url: '../../login/login',
    //   })
    // }
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