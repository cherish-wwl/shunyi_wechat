Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;
    var websrc= "";

    _this.setData({
      websrc: "http://61.49.195.174/app/construction-by-phone-app!getNews.action?id=" + options.id,
    });
    
  }

})