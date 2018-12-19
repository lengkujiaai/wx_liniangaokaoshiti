var app=getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    percent: 0,
    isDown: false,
    yearNum: '',
    TOA: '',

    yearList: '',//从上一页跳过来后，将对应年份的试卷存入此处
    year2010: [{ p: '安徽卷', tail: '' }, { p: '北京卷', tail: '' }, { p: '福建卷', tail: '' }, { p: '广东卷', tail: '' }, { p: '湖北卷', tail: '' }, { p: '湖南卷', tail: '' }, { p: '江苏卷', tail: '' }, { p: '江西卷', tail: '' }, { p: '辽宁卷', tail: '' }, { p: '全国大纲II卷', tail: '' }, { p: '全国大纲I卷', tail: '' }, { p: '全国新课标卷', tail: '' }, { p: '山东卷', tail: '' }, { p: '陕西卷', tail: '' }, { p: '上海卷', tail: '' }, { p: '四川卷', tail: '' }, { p: '天津卷', tail: '' }, { p: '浙江卷', tail: '' }, { p: '重庆卷', tail: '' }],

    year2011: [{ p: '安徽卷', tail: '' }, { p: '北京卷', tail: '' }, { p: '福建卷', tail: '' }, { p: '广东卷', tail: '' }, { p: '湖北卷', tail: '' }, { p: '湖南卷', tail: '' }, { p: '江苏卷', tail: '' }, { p: '江西卷', tail: '' }, { p: '辽宁卷', tail: '' }, { p: '全国大纲卷', tail: '' }, { p: '山东卷', tail: '' }, { p: '陕西卷', tail: '' }, { p: '上海卷', tail: '' }, { p: '四川卷', tail: '' }, { p: '天津卷', tail: '' }, { p: '新课标全国卷', tail: '' }, { p: '浙江卷', tail: '' }, { p: '重庆卷', tail: '' }],

    year2012: [{ p: '全国大纲卷', tail: '' }, { p: '新课标全国卷', tail: '' },{ p: '安徽卷', tail: '' }, { p: '北京卷', tail: '' }, { p: '福建卷', tail: '' }, { p: '广东卷', tail: '' }, { p: '湖北卷', tail: '' }, { p: '湖南卷', tail: '' }, { p: '江苏卷', tail: '' }, { p: '江西卷', tail: '' }, { p: '辽宁卷', tail: '' }, { p: '山东卷', tail: '' }, { p: '陕西卷', tail: '' }, { p: '上海卷', tail: '' }, { p: '四川卷', tail: '' }, { p: '天津卷', tail: '' }, { p: '浙江卷', tail: '' }, { p: '重庆卷', tail: '' }],

    year2013: [{ p: '安徽卷', tail: '' }, { p: '北京卷', tail: '' }, { p: '福建卷', tail: '' }, { p: '广东卷', tail: '' }, { p: '湖北卷', tail: '' }, { p: '湖南卷', tail: '' }, { p: '江苏卷', tail: '' }, { p: '江西卷', tail: '' }, { p: '辽宁卷', tail: '' }, { p: '全国大纲卷', tail: '' }, { p: '山东卷', tail: '' }, { p: '陕西卷', tail: '' }, { p: '上海卷', tail: '' }, { p: '四川卷', tail: '' }, { p: '天津卷', tail: '' }, { p: '新课标全国卷I', tail: '' }, { p: '新课标全国卷II', tail: '' }, { p: '浙江卷', tail: '' }, { p: '重庆卷', tail: '' }],

    year2014: [{ p: '江苏卷', tail: '' }, { p: '安徽卷', tail: '' }, { p: '北京卷', tail: '' }, { p: '福建卷', tail: '' }, { p: '广东卷', tail: '' }, { p: '湖北卷', tail: '' }, { p: '湖南卷', tail: '' }, { p: '江西卷', tail: '' }, { p: '辽宁卷', tail: '' }, { p: '全国大纲卷', tail: '' }, { p: '山东卷', tail: '' }, { p: '陕西卷', tail: '' }, { p: '上海卷', tail: '' }, { p: '四川卷', tail: '' }, { p: '天津卷', tail: '' }, { p: '新课标全国卷I', tail: '' }, { p: '新课标全国卷II', tail: '' },  { p: '浙江卷', tail: '' }, { p: '重庆卷', tail: '' }],

    year2015: [{ p: '安徽卷', tail: '' }, { p: '北京卷', tail: '' }, { p: '福建卷', tail: '' }, { p: '广东卷', tail: '' }, { p: '湖北卷', tail: '' }, { p: '湖南卷', tail: '' }, { p: '江苏卷', tail: '' }, { p: '山东卷', tail: '' }, { p: '陕西卷', tail: '' }, { p: '上海卷', tail: '' }, { p: '四川卷', tail: '' }, { p: '天津卷', tail: '' }, { p: '新课标全国卷I', tail: '' }, { p: '新课标全国卷II', tail: '' }, { p: '浙江卷', tail: '' }, { p: '重庆卷', tail: '' }],

    year2016: [{ p: '北京卷', tail: '' }, { p: '江苏卷', tail: '' }, { p: '山东卷', tail: '' }, { p: '上海卷', tail: '' }, { p: '四川卷', tail: '' }, { p: '天津卷', tail: '' }, { p: '新课标丙卷全国III', tail: '' }, { p: '新课标甲卷全国II', tail: '' }, { p: '新课标乙卷全国I', tail: '' }, { p: '浙江卷', tail: '' }],

    year2017: [{ p: '北京卷', tail: '' }, { p: '丙卷新课标III', tail: '' }, { p: '甲卷新课标II', tail: '' }, { p: '山东卷', tail: '' }, { p: '天津卷', tail: '' }, { p: '乙卷新课标I', tail: '' },{ p: '江苏卷', tail: '' }, { p: '上海卷', tail: '' }, { p: '浙江卷', tail: '' }],

    year2018: [{ p: '北京卷', tail: '' }, { p: '江苏卷', tail: '' }, { p: '全国卷I', tail: '' }, { p: '全国卷II', tail: '' }, { p: '全国卷III', tail: '' }, { p: '上海卷', tail: '' }, { p: '天津卷', tail: '' }, { p: '浙江卷', tail: '' }],
  },

  downloadFile: function (event) {
    let province = event.currentTarget.id
    let url = this.setUrl(province)
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

  setUrl: function (province) {
    let yearNum = this.data.yearNum
    let url = ''
    let TOA = this.data.TOA
    let TOAcn = '试题/'
    if (TOA == 'answer') { TOAcn = '答案/' }
    if (yearNum == '2010') {
      url = 'https://6761-gaokaoshiti-d64046-1258198575.tcb.qcloud.la/理科数学/2010/' + TOAcn + province +'.pdf'
    }
    if (yearNum == '2011') {
      url = 'https://6761-gaokaoshiti-d64046-1258198575.tcb.qcloud.la/理科数学/2011/' + TOAcn + province +'.pdf'
    }
    if (yearNum == '2012') {
      url = 'https://6761-gaokaoshiti-d64046-1258198575.tcb.qcloud.la/理科数学/2012/' + TOAcn + province +'.pdf'
    }
    if (yearNum == '2013') {
      url = 'https://6761-gaokaoshiti-d64046-1258198575.tcb.qcloud.la/理科数学/2013/' + TOAcn + province +'.pdf'
    }
    if (yearNum == '2014') {
      url = 'https://6761-gaokaoshiti-d64046-1258198575.tcb.qcloud.la/理科数学/2014/' + TOAcn + province +'.pdf'
    }
    if (yearNum == '2015') {
      url = 'https://6761-gaokaoshiti-d64046-1258198575.tcb.qcloud.la/理科数学/2015/' + TOAcn + province +'.pdf'
    }
    if (yearNum == '2016') {
      url = 'https://6761-gaokaoshiti-d64046-1258198575.tcb.qcloud.la/理科数学/2016/' + TOAcn + province +'.pdf'
    }
    if (yearNum == '2017') {
      url = 'https://6761-gaokaoshiti-d64046-1258198575.tcb.qcloud.la/理科数学/2017/' + TOAcn + province +'.pdf'
    }
    if (yearNum == '2018') {
      url = 'https://6761-gaokaoshiti-d64046-1258198575.tcb.qcloud.la/理科数学/2018/' + TOAcn + province +'.pdf'
    }
    return url
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //console.log(options.year)
    let yearList = ''
    if (options.year == '2010') yearList = this.data.year2010
    if (options.year == '2011') yearList = this.data.year2011
    if (options.year == '2012') yearList = this.data.year2012
    if (options.year == '2013') yearList = this.data.year2013
    if (options.year == '2014') yearList = this.data.year2014
    if (options.year == '2015') yearList = this.data.year2015
    if (options.year == '2016') yearList = this.data.year2016
    if (options.year == '2017') yearList = this.data.year2017
    if (options.year == '2018') yearList = this.data.year2018
    this.setData({
      yearList: yearList,
      yearNum: options.year,
      TOA: options.TOA
    })
    if (options.TOA == 'answer')
      this.navigatorTitle(options.year + '年数学真题答案')
    else
      this.navigatorTitle(options.year + '年数学真题')
  },

  navigatorTitle: function (title) {
    wx.setNavigationBarTitle({
      title: title,
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