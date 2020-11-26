// pages/chatroom/chatroom.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    height: 0,
    chatList: [
      {
        types: 'left',
        constext: '哈哈哈哈哈哈哈哈',
        avadar: 'https://img.yzcdn.cn/vant/cat.jpeg'
      },
      {
        types: 'right',
        constext: '聊天内容聊天内容聊天内容聊天内容聊天内容聊天内',
        avadar: 'https://pic.downk.cc/item/5f2421ae14195aa594afa560.jpg'
      },
      {
        types: 'left',
        constext: '什么什么什么？？？？？',
        avadar: 'https://img.yzcdn.cn/vant/cat.jpeg'
      },
      {
        types: 'left',
        constext: '哈哈哈哈哈哈哈哈',
        avadar: 'https://img.yzcdn.cn/vant/cat.jpeg'
      },
      {
        types: 'right',
        constext: '聊天内容聊天内容聊天内容聊天内容聊天内容聊天内',
        avadar: 'https://pic.downk.cc/item/5f2421ae14195aa594afa560.jpg'
      },
      {
        types: 'left',
        constext: '什么什么什么？？？？？',
        avadar: 'https://img.yzcdn.cn/vant/cat.jpeg'
      },
    ],
    value: '',
    toView: ''
  },
  onClickRight() {
    wx.redirectTo({
      url: '/pages/dormitory/dormitory',
    })
  },
  pushChat() {
    console.log(this.data.value)
    // this.data.value = 'hahah'
    let addList = this.data.chatList
    addList.push({
      types: 'right',
      constext: this.data.value,
      avadar: 'https://pic.downk.cc/item/5f2421ae14195aa594afa560.jpg'
    })
    this.setData({
      chatList: addList,
      value: '',
      toView: `item${this.data.chatList.length-1}` //滚到最底部
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let screenHeight = wx.getSystemInfoSync().windowHeight;
    this.setData({
      height: screenHeight - 140,
    });

    //滚动到最底部
    this.setData({
      toView: `item${this.data.chatList.length-1}`
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