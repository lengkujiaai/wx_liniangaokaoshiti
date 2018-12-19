// miniprogram/pages/page1/pages/english/years/audioPerYear/audioPerYear.js
var app=getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    percent: 0,
    isDown: false,

    listenListYear: ['2008-2012年', '2013-2015年', '2016年', '2017年'],
    year2008:['2008辽宁卷','2008宁夏、海南卷','2009辽宁卷','2009宁夏、海南卷','2010课标全国卷','2010辽宁卷','2011课标全国卷','2011辽宁卷','2012课标全国卷','2012辽宁卷'],
    year2013:['2013课标全国卷I','2013课标全国卷II','2013辽宁卷','2014课标全国卷I','2014课标全国卷II','2014辽宁卷','2015北京卷','2015江苏卷','2015课标全国卷I','2015课标全国卷II','2015上海卷'],
    year2016: ['2016北京卷', '2016江苏卷', '2016课标全国卷I', '2016课标全国卷II','2016课标全国卷III','2016上海卷','2016浙江卷10月'],
    year2017:['2017北京卷','2017江苏卷','2017课标全国卷I','2017课标全国卷II','2017课标全国卷III','2017浙江卷'],
    yearsAudioList:'',
    currentYear:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //console.log(options.year)
    let index = options.year
    let currentYear = this.data.listenListYear[index]
    let yearsAudioList=''
    if (currentYear == '2008-2012年') yearsAudioList =this.data.year2008
    if (currentYear == '2013-2015年') yearsAudioList = this.data.year2013
    if (currentYear == '2016年') yearsAudioList = this.data.year2016
    if (currentYear == '2017年') yearsAudioList = this.data.year2017
    this.setData({
      yearsAudioList: yearsAudioList
    })
    this.navigatorTitle()
  },

  navigatorTitle: function () {
    var title = '英语真题听力'
    wx.setNavigationBarTitle({
      title: title,
    })
  },

  toAudio: function (e) {
    let index = e.currentTarget.id
    let audioYear = this.data.yearsAudioList[index]
    this.downloadFile(audioYear)
    if (app.globalData.audioPlaying)
      app.playAudio(audioYear)

  },

  downloadFile: function (audioYear) {
    let url = 'https://6761-gaokaoshiti-d64046-1258198575.tcb.qcloud.la/英语/听力/试题/' + audioYear + '.pdf'
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