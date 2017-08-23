// xiangqing.js
var that;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    images: "",
    moviename:"",
    moviedirectors:[],
    moviecasts:[],
    moviegenres:[],
    movieyear:"",
    countries:[],
    movieaverage:"",
    castimages:[],
    summary:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    that = this;
    console.log(options)
    var movieid = options.id;
    wx.request({
      header: {
        "Content-Type": "json"
      },
      url: 'https://api.douban.com/v2/movie/subject/' + movieid,
      success:function(obj){
        console.log(obj.data);
        
        that.setData({
          images: obj.data.images.medium,
          moviename: obj.data.title,
          moviedirectors: obj.data.directors,
          moviecasts: obj.data.casts,
          moviegenres: obj.data.genres,
          movieyear: obj.data.year,
          countries: obj.data.countries,
          movieaverage: obj.data.rating.average,
          castimages: obj.data.casts,
          summary: obj.data.summary
        })
      }
    })
  }
})