// comingsoon.js
var that;
var currentPage = 0;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    movies: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    that = this;
    that.getMoviesFromNet(0);
    
  
  },
 
  getMoviesFromNet: function (page) {

    wx.request({
      header: {
        "Content-Type": "json"
      },
      url: 'https://api.douban.com/v2/movie/coming_soon',
      data: {
        start: 10 * page,
        count: 10

      },
      success: function (obj) {
        console.log(obj);

        if (obj.data.subjects.length == 0) {
          console.log("没有数据了");
          wx.showToast({
            title: '没有更多数据了！',
          })

        } else {
          that.setData({
            movies: that.data.movies.concat(obj.data.subjects)
          })
        }
      }
    })
  },

  //点击后的跳转
  jumptodetail: function (event) {
    wx.navigateTo({
      url: '/pages/xiangqing/xiangqing?id=' + event.currentTarget.id,
    })
  },
  onReachBottom: function () {

    that.getMoviesFromNet(++currentPage)
  }
})