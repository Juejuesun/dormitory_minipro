// pages/studyroom/studyroom.js
import request from '../../service/network.js'
const app = getApp()
const time = require("../../utils/util.js");
Page({
  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0,
    fertilizerQuantity:0,
    studyTimeTotal:0,
    numberOfStudy:0,
    M:'',
    S:'',
    count:0,
    timer:0,
    today_check:'today-card-hover',
    week_check:'week-card'
  },
  switchNav: function(e) {
    var page = this;
    var id = e.target.id;
    if (this.data.currentTab == id) {
      return false;
    } else {
      page.setData({
        currentTab: id
      });
    }
  },
  changeCss(){
    if(this.data.today_check=='today-card-hover'){
      this.setData({
        today_check:'today-card',
        week_check:'week-card-hover'
      })
    }else{
      this.setData({
        today_check:'today-card-hover',
        week_check:'week-card'
      })
    }
  },
  showNum(num){
    if (num < 10) {
        return '0' + num
    }
    return num
  },
  begin(){
    var that=this
    request({
      url: 'study/beginStudy',
    }).then(res => {
      console.log(res)
    }).catch(err => {
    })
    var count=this.data.count
    var timer = setInterval(function(){
      count++
      var S=that.showNum(count % 60)
      var M=that.showNum(parseInt(count / 60) % 60)
      that.setData({
        count:count,
        M:M,
        S:S
      })
    },1000)
    this.setData({
      timer:timer
    })
  },
  pause(){
    request({
      url: 'study/stopStudy',
    }).then(res => {
      console.log(res)
    }).catch(err => {
    })
    clearInterval(this.data.timer)
  },
  end(){
    clearInterval(this.data.timer)
    request({
      data:{
        "userId":app.globalData.userId,
        "studyTime":this.data.count
      },
      url: 'study/recorddStudy',
    }).then(res => {
      console.log(res)
      this.setData({
        M:'00',
        S:'00',
        count:0,
        timer:0,
      })
    }).catch(err => {
    })
  },
  toDormitory(){
    wx.redirectTo({
      url: '/pages/dormitory/dormitory',
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
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    request({
      data:{
        "userId":app.globalData.userId,
      },
      url: 'study/getInf',
    }).then(res => {
      console.log(res)
      this.setData({
        fertilizerQuantity:res.data.fertilizerQuantity||0,
        studyTimeTotal:res.data.studyTimeTotal||0,
        numberOfStudy:res.data.numberOfStudy||0,
        M:'00',
        S:'00',
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