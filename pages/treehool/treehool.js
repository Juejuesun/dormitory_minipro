// pages/treehool/treehool.js
import request from '../../service/network.js'
const app = getApp()
const time = require("../../utils/util.js");
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
    switch_part:[],
    active_content:'',
    witch_part:1,
  },
  Publish(){
    request({
      data:{
        "userId":app.globalData.userId,
        "content":this.data.active_content,
        "partition":this.data.witch_part,
      },
      url: 'treeHole/createPost',
    }).then(res => {
      console.log(res)
    }).catch(err => {
    })
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
        request({
          data:{
            "partition":1,
          },
          url: 'treeHole/getPostsOfPartition',
        }).then(res => {
          console.log(res)
          this.setData({
            switch_part:res.data.posts,
            witch_part:1
          })
        }).catch(err => {
        })
        this.setData({
          img1:'../../assets/treehool/1_check.png',
          img2:'../../assets/treehool/2.png',
          img3:'../../assets/treehool/3.png',
          img4:'../../assets/treehool/4.png',
        })
        break;
      case "2":
        request({
          data:{
            "partition":2,
          },
          url: 'treeHole/getPostsOfPartition',
        }).then(res => {
          console.log(res)
          this.setData({
            switch_part:res.data.posts,
            witch_part:2
          })
        }).catch(err => {
        })
        this.setData({
          img1:'../../assets/treehool/1.png',
          img2:'../../assets/treehool/2_check.png',
          img3:'../../assets/treehool/3.png',
          img4:'../../assets/treehool/4.png',
        })
        break;
      case "3":
        request({
          data:{
            "partition":3,
          },
          url: 'treeHole/getPostsOfPartition',
        }).then(res => {
          console.log(res)
          this.setData({
            switch_part:res.data.posts,
            witch_part:3
          })
        }).catch(err => {
        })
        this.setData({
          img1:'../../assets/treehool/1.png',
          img2:'../../assets/treehool/2.png',
          img3:'../../assets/treehool/3_check.png',
          img4:'../../assets/treehool/4.png',
        })
        break;
      case "4":
        request({
          data:{
            "userId":app.globalData.userId,
          },
          url: 'treeHole/getPostsOfCollected',
        }).then(res => {
          console.log(res)
          this.setData({
            switch_part:res.data.posts,
          })
        }).catch(err => {
        })
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
  toActive(e){
    console.log(e)
    wx.navigateTo({
      url: '/pages/active/active?postid='+e.currentTarget.dataset.postid+'&postContent='+e.currentTarget.dataset.postcontent+'&publishTime='+e.currentTarget.dataset.publishtime,
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
  search: function (value) {
    return request({
      data:{
        "content":value,
      },
      url: 'treeHole/getPostsByContent',
    }).then(res => {
      console.log(res)
      this.setData({
        switch_part:res.data.posts,
        witch_part:3
      })
    }).catch(err => {
    })
  },
  selectResult: function (e) {
      console.log('select result', e.detail)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    request({
      data:{
        "partition":1,
      },
      url: 'treeHole/getPostsOfPartition',
    }).then(res => {
      console.log(res)
      this.setData({
        switch_part:res.data.posts.map(n=>{
          n.publishTime=time.formatTime(new Date(n.publishTime))
          return n
        }),
        search: this.search.bind(this),
      })
      console.log(this.data.switch_part)
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