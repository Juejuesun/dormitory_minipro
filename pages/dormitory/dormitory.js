// pages/dormitory/dormitory.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showBoard:false,
    isfocus: false,
    value: '',
    blackList: [
      {
        content: '记得给花浇水。',
        time: '小蓝 2020 10/30'
      },
      {
        content: '啦啦啦啦拉拉',
        time: '小红 2020 9/30'
      }
    ]
  },
  toStudyroom(){
    wx.redirectTo({
      url: '/pages/studyroom/studyroom',
    })
  },
  toTreehool(){
    wx.redirectTo({
      url: '/pages/treehool/treehool',
    })
  },
  toUsercenter(){
    wx.redirectTo({
      url: '/pages/usercenter/usercenter',
    })
  },
  toFlowerroom(){
    wx.navigateTo({
      url: '/pages/flowerroom/flowerroom',
    })
  },
  toChatroom(){
    wx.navigateTo({
      url: '/pages/chatroom/chatroom',
    })
  },
  showBlackboard(){
    this.setData({
      showBoard:!this.data.showBoard
    })
  },
  addnewmes() {
    this.setData({
      isfocus: true
    })
  },
  blurfocus() {
    let ls = this.data.blackList
    ls.push({
      content: this.data.value,
      time: '小蓝 2020 10/30'
    })
    this.setData({
      isfocus: false,
      blackList: ls,
      value: ''
    })
  },
  pushems() {
    console.log(this.data.value)
    this.blurfocus
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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