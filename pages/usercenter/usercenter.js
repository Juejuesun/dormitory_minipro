// pages/usercenter/usercenter.js
import request from '../../service/network.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:{
      sex:'gender',
      realName:'name',
      dormitoryId:'dormitory ID',
      studentNumber:'student number'
    },
    name:'',
    showBuildroom:false,
    showBuildmes:false,
    roomId:'',
    password:'',
  },
  joinRoom(){
    request({
      data:{
        "userId":"123456",
        "dormitoryId":this.data.roomId,
        "joinPassword":this.data.password,
      },
      url: '/userCenter/createDormitory',
    }).then(res => {
      console.log(res)
      this.changeCreate()  
      this.changeBuild()
    }).catch(err => {
      
    })
  },
  changeCreate(){
    this.setData({
      showBuildmes:!this.data.showBuildmes
    })
  },
  changeBuild(){
    this.setData({
      showBuildroom:!this.data.showBuildroom
    })
  },
  changeName(){
    console.log(this.data.name)
    request({
      data:{
        "userId":"123456",
        "nickname":this.data.name,
      },
      url: 'userCenter/setNickname',
    }).then(res => {
      console.log(res)
    }).catch(err => {
      
    })
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
  toDormitory(){
    wx.redirectTo({
      url: '/pages/dormitory/dormitory',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    request({
      data:{
        "userId":"123456"
      },
      url: 'userCenter/getDetailsOfPeople',
    }).then(res => {
      console.log(res)
      this.setData({
        userInfo:res.data,
        name:res.data.nickname
      })
    }).catch(err => {
      
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