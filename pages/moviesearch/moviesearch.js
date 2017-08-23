// moviesearch.js
var input;
var that;
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
  inputEvent: function (event) {
    input = event.detail.value
  },
  mSearch: function () {

    wx.request({
      header: {
        "Content-Type": "json"
      },
      url: 'https://api.douban.com/v2/movie/search?q=' + input,
      success: function (obj) {
        console.log(obj);
        that.setData({
          movies: obj.data.subjects
        })

      }
    })

  },
  jumpToDetail: function (event) {

    wx.navigateTo({
      url: '/pages/xiangqing/xiangqing?id=' + event.currentTarget.id,
    })
  },
})