// pages/matchcenter/matchcenter.js
import request from '../../service/network.js'
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    int:Array(59),
    intString:'',
    showQuitmes:false,
  },
  matching(){
    request({
      data:{
        "userId":app.globalData.userId,
        "tags":this.data.intString,
      },
      url: 'userCenter/setUserTag',
    }).then(res => {
      console.log(res)
    }).catch(err => {
    })
    request({
      data:{
        "userId":app.globalData.userId,
        "ifOnMatching":1,
      },
      url: 'userCenter/setIfOnMatching',
    }).then(res => {
      console.log(res)
    }).catch(err => {
    })
  },
  changeQuit(){
    this.setData({
      showQuitmes:!this.data.showQuitmes
    })
  },
  match(){
    this.setData({
      intString:this.data.int.join('')
    })
    console.log(this.data.intString)
    this.changeQuit()
  },
  select(e){
    console.log(e)
    var int=this.data.int
    if(int[e.currentTarget.id]==0){
      int[e.currentTarget.id]=1
    }else{
      int[e.currentTarget.id]=0
    }
    this.setData({
      int:int
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var j=[59]
    for(var i=0;i<this.data.int.length;i++){
      j[i]=0;
    }
    this.setData({
      int:j
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