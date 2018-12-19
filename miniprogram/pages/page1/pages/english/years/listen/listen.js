// miniprogram/pages/page1/pages/english/years/listen/listen.js
var app= getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    percent: 0,
    isDown: false,
    listenListYear:['2008-2012年','2013-2015年','2016年','2017年']
  },

  switchChange: function (e) {
    //此处设置后，跳到下一页时使用app.globalData.audioPlaying
    app.globalData.audioPlaying = e.detail.value
    if (e.detail.value == false)
      app.pauseAudio()
      //app.stopBackgroundAudio()
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.navigatorTitle()
  },

  navigatorTitle: function () {
    var title = '英语真题听力'
    wx.setNavigationBarTitle({
      title: title,
    })
  },

  toAudioPerYear: function (e) {
    //console.log(e.currentTarget.id)
    let index = e.currentTarget.id
    wx.navigateTo({
      url: '../audioPerYear/audioPerYear?year=' + index,
    })
  },

  downloadFile: function () {
    let url = 'https://6761-gaokaoshiti-d64046-1258198575.tcb.qcloud.la/英语/听力/听力答案.pdf'
    this.setData({
      percent: 0,
      isDown: false
    })
    this.setData({
      percent: 100,
      isDown: true
    })
    app.downloadFromUrl(url, 'pdf')
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