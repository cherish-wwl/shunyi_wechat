 
 var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
  
    pageData: [], //图书数据
    id:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;
    // 发送网络请求
    wx.request({
      url: "http://ys.shunzhengjinfu.com/app/construction-by-phone-app!getNewsList.action",
      // data: { phoneString: userName, passWord: passWd },
      data: { pageNo: 1, pageSize: 20, type:"appnews"},
      method: 'GET',
      header: {
        "content-type": "application/json"
      },
      success: function (res) {
        // success
        var loginInfo = res.data

        if (loginInfo.Success) {
          console.log(loginInfo);

          _this.setData({
            pageData: _this.data.pageData.concat(loginInfo.Data)
          
          });
        } else {
          var msg = loginInfo.Message;
          console.log(loginInfo.Message);
        }
      }
    })

  },


   //跳转到详细页面
  toDetailPage: function (e) {
    var bid = e.currentTarget.dataset.bid; //新闻id [data-bid]
    // console.log(bid)
    wx.navigateTo({
      url: '../detail/detail?id=' + bid
    });
  }

})