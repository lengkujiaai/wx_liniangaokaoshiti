// miniprogram/pages/page1/pages/math/years/years.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    year: ['2010', '2011','2012', '2013', '2014', '2015', '2016', '2017', '2018'],
    TOA: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (options.TOA == 'answer')
      this.navigatorTitle('数学真题答案')
    else
      this.navigatorTitle('语文真题')
    this.setData({
      TOA: options.TOA
    })
  },

  navigatorTitle: function (title) {
    wx.setNavigationBarTitle({
      title: title,
    })
  },

  toDownload: function (e) {
    let index = 2010 + parseInt(e.currentTarget.id)
    wx.navigateTo({
      url: '../download/download?year=' + index + '&TOA=' + this.data.TOA,
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