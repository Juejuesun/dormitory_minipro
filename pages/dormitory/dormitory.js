// pages/dormitory/dormitory.js
import request from '../../service/network.js'
import { format } from '../../utils/util.js'
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showBoard:false,
    isfocus: false,
    value: '',
    toView: 'itemInput',
    height: 0,
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
    this.getHeight()
    // console.log(format(1606144511000))
    this.getBlackBoard()
  },
  addnewmes() {
    this.setData({
      isfocus: true
    })
  },
  async pushems() {
    if(this.data.value) {
      const { data } = await request({
        data:{
          dormitoryId: 153432,
          userId: app.globalData.userId,
          content: this.data.value
        },
        url: 'dormitory/leaveMessage',
      })
      if(data.status == 'succeed') {
        await this.getBlackBoard()
        this.setData({
          isfocus: false,
          value: ''
        })
      }
    }
  },
  proms() {
    let promise = new Promise(function (resolve, reject) {
      let query = wx.createSelectorQuery();
      query.select('#cont').boundingClientRect()
      query.exec(function (res) {  
        // console.log(res);
        // console.log(res[0].height);
        let ss = res[0].height
        resolve(ss);
      })
    })
    return promise
  },
  async getHeight() {
    let he = await this.proms() - 80
    this.setData({
      height: he
    })
  },
  getBlackBoard() {
    request({
      data:{
        "dormitoryId": 153432,
      },
      url: 'dormitory/getMessageBoard',
    }).then(res => {
      console.log(res)
      let data = res.data
      if(data.status == 'succeed') {
        let con = []
        for(let val of data.messages) {
          console.log(format(val.messageTime))
          con.push({
            content: val.messageContent,
            time: val.nickname+ ' ' + format(val.messageTime).toString()
          })
        }
        this.setData({
          blackList: con
        })
      }
    }).catch(err => {
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