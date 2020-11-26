// pages/treehool/treehool.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    img1:'../../assets/treehool/1_check.png',
    img2:'../../assets/treehool/2.png',
    img3:'../../assets/treehool/3.png',
    img4:'../../assets/treehool/4.png',
    showWriteActive:false,
  },
  changeShowWrite(){
    this.setData({
      showWriteActive:!this.data.showWriteActive
    })
  },
  changeBrock(e){
    console.log(e)
    switch(e.currentTarget.id){
      case "1":
        this.setData({
          img1:'../../assets/treehool/1_check.png',
          img2:'../../assets/treehool/2.png',
          img3:'../../assets/treehool/3.png',
          img4:'../../assets/treehool/4.png',
        })
        break;
      case "2":
        this.setData({
          img1:'../../assets/treehool/1.png',
          img2:'../../assets/treehool/2_check.png',
          img3:'../../assets/treehool/3.png',
          img4:'../../assets/treehool/4.png',
        })
        break;
      case "3":
        this.setData({
          img1:'../../assets/treehool/1.png',
          img2:'../../assets/treehool/2.png',
          img3:'../../assets/treehool/3_check.png',
          img4:'../../assets/treehool/4.png',
        })
        break;
      case "4":
        this.setData({
          img1:'../../assets/treehool/1.png',
          img2:'../../assets/treehool/2.png',
          img3:'../../assets/treehool/3.png',
          img4:'../../assets/treehool/4_check.png',
        })
        break;
      default:
        break;
 } 
  },
  toActive(){
    wx.navigateTo({
      url: '/pages/active/active',
    })
  },
  toDormitory(){
    wx.redirectTo({
      url: '/pages/dormitory/dormitory',
    })
  },
  toStudyroom(){
    wx.redirectTo({
      url: '/pages/studyroom/studyroom',
    })
  },
  toUsercenter(){
    wx.redirectTo({
      url: '/pages/usercenter/usercenter',
    })
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