//app.js
App({
  onLaunch: function () {
    
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        traceUser: true,
      })
    }

    this.globalData = {}
  },

  //背景音乐开始播放英语听力
  playAudio: function (audioYear) {
    let url = 'https://6761-gaokaoshiti-d64046-1258198575.tcb.qcloud.la/英语/听力/音频/' + audioYear + '.mp3'
    console.log(url)
    wx.playBackgroundAudio({
      dataUrl: url,
      title: audioYear
    })
  },


  //用户点击switch组件关闭背景播放听力
  pauseAudio:function(){
    wx.pauseBackgroundAudio();
  },

  //从url下载文件并打开
  downloadFromUrl: function (url,filetype) {
    var that = this
    const downloadTask = wx.downloadFile({
      url: url,
      success: function (res) {
        if (res.statusCode === 200) {
        }
        wx.openDocument({
          filePath: res.tempFilePath,
          fileType: filetype,
          success: function (res) {
            console.log('打开成功')
          },
          fail: function (res) {
          }
        })
      }
    })
    downloadTask.onProgressUpdate((res) => {
      //console.log('下载进度', res.progress)
      //console.log('已经下载的数据长度', res.totalBytesWritten)
      //console.log('预期需要下载的数据总长度', res.totalBytesExpectedToWrite)
    })
  },

  globalData:{
    audioPlaying:false
  }
})
