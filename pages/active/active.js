// pages/active/active.js
import request from '../../service/network.js'
const app = getApp()
const time = require("../../utils/util.js");
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
        { text: '色情低俗', value: 'vulgar' },
        { text: '政治敏感', value: 'sensitivity	' },
        { text: '违法', value: 'illegal' },
        { text: '广告', value: 'advertisement' },
        { text: '病毒木马', value: 'virus' },
        { text: '其他', value: 'others' },
    ],
    img:'../../assets/treehool/cellect.png',
    isCollect:false,
    commentList:[],
    Authname:'',
    publishTime:'',
    postContent:'',
    comment_content:'',
    postId:'',
    vulgar:0,
    sensitivity:0,
    illegal:0,
    advertisement:0,
    virus:0,
    others:0,
    active_content:''
  },
  publish(){
    request({
      data:{
        "userId":app.globalData.userId,
        "postId":this.data.postId,
        "content":this.data.active_content,
      },
      url: 'treeHole/createComment',
    }).then(res => {
      console.log(res)
    }).catch(err => {
    })
    this.changeShowComment()
  },
  changeCollect(){
    if(this.data.isCollect==false){
      request({
        data:{
          "userId":app.globalData.userId,
          "postId":this.data.postId,
        },
        url: 'treeHole/collectPost',
      }).then(res => {
        console.log(res)
        this.setData({
          img:'../../assets/treehool/cellect_check.png',
          isCollect:true
        })
      }).catch(err => {
      })
      
    }else{
      request({
        data:{
          "userId":app.globalData.userId,
          "postId":this.data.postId,
        },
        url: 'treeHole/cancelCollect',
      }).then(res => {
        console.log(res)
        this.setData({
          img:'../../assets/treehool/cellect.png',
          isCollect:false
        })
      }).catch(err => {
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
      switch(e.detail.value){
        case "vulgar":
          this.setData({
            vulgar:1
          })
          break;
        case "sensitivity":
          this.setData({
            sensitivity:1
          })
          break;
        case "illegal":
          this.setData({
            illegal:1
          })
          break;
        case "advertisement":
          this.setData({
            advertisement:1
          })
          break;
        case "virus":
          this.setData({
            virus:1
          })
          break; 
        case "others":
          this.setData({
            others:1
          })
          break;                                       
        default:
          break;
      } 
      request({
        data:{
          "postId":this.data.postId,
          "vulgar":this.data.vulgar,
          "sensitivity":this.data.sensitivity,
          "illegal":this.data.illegal,
          "advertisement":this.data.advertisement,
          "virus":this.data.virus,
          "others":this.data.others,
        },
        url: 'treeHole/reportPost',
      }).then(res => {
        console.log(res)
      }).catch(err => {
      })
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
    console.log(options)
    request({
      data:{
        "userId":app.globalData.userId,
        "postId":options.postid
      },
      url: 'treeHole/postDetail',
    }).then(res => {
      console.log(res)
      this.setData({
        commentList:res.data.comments.map(n=>{
          n.commentTime=time.formatTime(new Date(n.commentTime))
          return n
        }),
        nbTitle: '#'+options.postid,
        Authname:res.data.nicknameOfAuthor,
        postContent:options.postContent,
        publishTime:options.publishTime,
        postId:options.postid
      })
      if(res.data.ifCollect==1){
        this.setData({
          isCollect:true
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