// miniprogram/pages/page1/page1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    year: ['语文', '数学', '英语', '理综', '文综']
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.navigatorTitle()
  },

  subject: function (e) {
    let subject = e.currentTarget.id
    let TOA='test'
    if (subject == 'chineseAnswer') { subject = 'chinese', TOA = 'answer'}
    if (subject == 'mathAnswer') { subject = 'math', TOA = 'answer' }
    if (subject == 'englishAnswer') { subject = 'english', TOA = 'answer' }
    if (subject == 'physicalAnswer') { subject = 'physical', TOA = 'answer' }
    if (subject == 'chemistryAnswer') { subject = 'chemistry', TOA = 'answer' }
    if (subject == 'biologyAnswer') { subject = 'biology', TOA = 'answer' }
    
    wx.navigateTo({
      url: './pages/' + subject + '/years/years?TOA=' + TOA,
    })
  },

  navigatorTitle: function () {
    var title = '历年高考真题'
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