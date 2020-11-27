// pages/flowerroom/flowerroom.js
import request from '../../service/network.js'
const app = getApp()
const time = require("../../utils/util.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showLog:false,
    soilMoisture:'',
    soilFertility:'',
    flowerLevel:'',
    mesList:[]
  },
  fertilizer(){
    request({
      data:{
        "dormitoryId":app.globalData.dormitoryId,
        "userId":app.globalData.userId
      },
      url: 'balcony/fertilize',
    }).then(res => {
      console.log(res)
      this.onLoad()
    }).catch(err => { 
    })
  },
  water(){
    request({
      data:{
        "dormitoryId":app.globalData.dormitoryId,
        "userId":app.globalData.userId
      },
      url: 'balcony/watering',
    }).then(res => {
      console.log(res)
      this.onLoad()
    }).catch(err => {
    })
  },
  changeLog(){
    this.setData({
      showLog:!this.data.showLog
    })
    request({
      data:{
        "dormitoryId":app.globalData.dormitoryId
      },
      url: 'balcony/plantingRecord',
    }).then(res => {
      console.log(res)
      this.setData({
        mesList:res.data.records
      })
    }).catch(err => {
      
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(app.globalData.dormitoryId)
    request({
      data:{
        "dormitoryId":app.globalData.dormitoryId
      },
      url: 'balcony/getFlowerInf',
    }).then(res => {
      console.log(res)
      this.setData({
        soilMoisture:res.data.soilMoisture,
        soilFertility:res.data.soilFertility,
        flowerLevel:res.data.flowerLevel,
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