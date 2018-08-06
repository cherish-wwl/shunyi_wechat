// pages/register/register.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    time: '点击获取验证码',
    disabled: false,
    currentTime: 61,
    phone:'',
    varyCode:'',
    passWd:'',
    toggleAgreeColor:'gray'
  },
  phoneInput: function () {

  },
  varyCodeInput: function () {

  },
  passWdInput: function () {

  },
  // 获取验证码
  getCode: function (options) {
    var that = this;
    var currentTime = that.data.currentTime
    var interval = setInterval(function () {
      currentTime--;
      that.setData({
        time: currentTime + '秒'
      })
      if (currentTime <= 0) {
        clearInterval(interval)
        that.setData({
          time: '重新发送',
          currentTime: 61,
          disabled: false
        })
      }
    }, 1000)
  },
  getVerificationCode: function () {
    this.getCode();
    var that = this
    that.setData({
      disabled: true
    })
  },
  // 切换同意注册协议
  toggleAgreeProtrol: function (){    
    var that = this
    if (that.data.toggleAgreeColor == 'gray'){
      that.setData({
        toggleAgreeColor: 'green'
      })
    }else{
      that.setData({
        toggleAgreeColor: 'gray'
      })
    }
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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