// pages/active/active.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nbBackgroundColor: '#ffffff',
    nbFrontColor: '#000000',
    showWriteComment:false,
    showActionsheet: false,
    groups: [
        { text: '色情低俗', value: 1 },
        { text: '政治敏感', value: 2 },
        { text: '违法', value: 3 },
        { text: '广告', value: 4 },
        { text: '病毒木马', value: 5 },
        { text: '其他', value: 6 },
    ],
    img:'../../assets/treehool/cellect.png'
  },
  changeCollect(){
    if(this.data.img=='../../assets/treehool/cellect.png'){
      this.setData({
        img:'../../assets/treehool/cellect_check.png'
      })
    }else{
      this.setData({
        img:'../../assets/treehool/cellect.png'
      })
    }
  },
  changeReport: function () {
    this.setData({
        showActionsheet: !this.data.showActionsheet
    })
  },
  btnClick(e) {
      console.log(e)
      this.changeReport()
  },
  changeShowComment(){
    this.setData({
      showWriteComment:!this.data.showWriteComment
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      nbTitle: '#310310',
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