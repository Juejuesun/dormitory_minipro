// pages/usercenter/usercenter.js
import request from '../../service/network.js'
const app = getApp()
const time = require("../../utils/util.js");
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
    showQuit:false,
    showBuild:false,
    showJoinmes:false,
    showQuitmes:false,
    studentNumber:'',
    userSex:'',
    userRealName:'',
  },
  toMatchcenter(){
    wx.navigateTo({
      url: '/pages/matchcenter/matchcenter',
    })
  },
  quitRoom(){
    request({
      data:{
        "userId":app.globalData.userId,
      },
      url: 'userCenter/quitDormitory',
    }).then(res => {
      console.log(res)
      this.changeQuit()
      this.onLoad()
    }).catch(err => {
      
    })
  },
  createRoom(){
    request({
      data:{
        "userId":app.globalData.userId,
        "dormitoryId":this.data.roomId,
        "joinPassword":this.data.password,
      },
      url: 'userCenter/createDormitory',
    }).then(res => {
      console.log(res)
      this.quitCreate()  
      this.changeBuild()
      this.onLoad()
    }).catch(err => {
      
    })
  },
  quitJoin(){
    this.setData({
      showJoinmes:!this.data.showJoinmes,
      roomId:'',
      password:''
    })
  },
  joinRoom(){
    request({
      data:{
        "userId":app.globalData.userId,
        "dormitoryId":this.data.roomId,
        "joinPassword":this.data.password,
      },
      url: 'userCenter/joinDormitory',
    }).then(res => {
      console.log(res)
      this.quitJoin()  
      this.changeBuild()
      this.onLoad()
    }).catch(err => {
      
    })
  },
  quitCreate(){
    this.setData({
      showBuildmes:!this.data.showBuildmes,
      roomId:'',
      password:''
    })
  },
  changeJoin(){
    this.setData({
      showJoinmes:!this.data.showJoinmes,
    })
  },
  changeQuit(){
    this.setData({
      showQuitmes:!this.data.showQuitmes
    })
  },
  changeCreate(){
    console.log(1)
    request({
      url: 'userCenter/randomDormitoryId',
    }).then(res => {
      console.log(res)
      this.setData({
        roomId:res.data.dormitoryId
      })
    }).catch(err => {
    })
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
        "userId":app.globalData.userId,
        "studentNumber":this.data.studentNumber||this.data.userInfo.studentNumber,
        "userSex":this.data.userSex||this.data.userInfo.sex,
        "userRealName":this.data.userRealName||this.data.userInfo.realName,
      },
      url: 'userCenter/setBaseInf',
    }).then(res => {
      console.log(res)
    }).catch(err => {
      
    })
    request({
      data:{
        "userId":app.globalData.userId,
        "nickname":this.data.name||this.data.userInfo.nickname,
      },
      url: 'userCenter/setNickname',
    }).then(res => {
      console.log(res)
    }).catch(err => {
      
    })
    this.onLoad()
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
        "userId":app.globalData.userId
      },
      url: 'userCenter/getDetailsOfPeople',
    }).then(res => {
      console.log(res)
      this.setData({
        userInfo:res.data,
      })
      if(res.data.dormitoryId==0){
        this.setData({
          showQuit:false,
          showBuild:true,
        })
      }else{
        wx.setStorageSync('dormitoryId', res.data.dormitoryId)
        this.setData({
          showQuit:true,
          showBuild:false,
        })
      }
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