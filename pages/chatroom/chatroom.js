// pages/chatroom/chatroom.js

// socket 连接插件
const io = require('../../utils/weapp.socket.io.js')
// socket 连接地址
var socketUrl = 'wss://www.jieblue.xyz'
// socket 状态更新
var socketMessage = ''
// 上下文对象
var that

Page({

  /**
   * 页面的初始数据
   */
  data: {
    height: 0,
    chatList: [
      {
        types: 'left',
        constext: '哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈',
        nickname: '二狗子',
        avadar: 'https://img.yzcdn.cn/vant/cat.jpeg'
      },
      {
        types: 'right',
        constext: '聊天内容聊天内容聊天内容聊天内容聊天内容聊天内',
        nickname: '旺财',
        avadar: 'https://pic.downk.cc/item/5f2421ae14195aa594afa560.jpg'
      },
      {
        types: 'left',
        constext: '什么什么什么？？？？？',
        nickname: '二狗子',
        avadar: 'https://img.yzcdn.cn/vant/cat.jpeg'
      },
      {
        types: 'left',
        constext: '哈哈哈哈哈哈哈哈',
        nickname: '二狗子',
        avadar: 'https://img.yzcdn.cn/vant/cat.jpeg'
      },
      {
        types: 'right',
        constext: '聊天内容聊天内容聊天内容聊天内容聊天内容聊天内',
        nickname: '旺财',
        avadar: 'https://pic.downk.cc/item/5f2421ae14195aa594afa560.jpg'
      },
      {
        types: 'left',
        constext: '什么什么什么？？？？？',
        nickname: '二狗子',
        avadar: 'https://img.yzcdn.cn/vant/cat.jpeg'
      },
    ],
    value: '',
    toView: ''
  },
  onClickRight() {
    this.socketStop()
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
    that = this
    this.socketStart();

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

  },
    /**
   * 启动socket
   */
  socketStart: function () {

    // 设置socket连接地址 socketUrl
    const socket = (this.socket = io(
      socketUrl,
    ))

    socket.on('connect', () => {
      this.setData({ socketMessage: socketMessage += 'SOCKET连接成功 → \n\n' })

      // 此处修改为与server约定的数据、格式
      var sendMessage = '{"token":"v3jsoc8476shNFhxgqPAkkjt678","client":"发送内容"}'
      this.socketSendMessage(sendMessage);
    })

    socket.on('connect_error', d => {
      this.setData({ socketMessage: socketMessage += 'SOCKET连接失败 → \n\n' })
    })

    socket.on('connect_timeout', d => {
      this.setData({ socketMessage: socketMessage += 'SOCKET连接超时 → \n\n' })
    })

    socket.on('disconnect', reason => {
      this.setData({ socketMessage: socketMessage += 'SOCKET连接断开 → \n\n' })
    })

    socket.on('reconnect', attemptNumber => {
      this.setData({ socketMessage: socketMessage += 'SOCKET正在重连 → \n\n' })
    })

    socket.on('reconnect_failed', () => {
      this.setData({ socketMessage: socketMessage += 'SOCKET重连失败 → \n\n' })
    })

    socket.on('reconnect_attempt', () => {
      this.setData({ socketMessage: socketMessage += 'SOCKET正在重连 → \n\n' })
    })

    socket.on('error', err => {
      this.setData({ socketMessage: socketMessage += 'SOCKET连接错误 → \n\n' })
    })

    socket.on('message', function (d) {
      this.setData({ socketMessage: socketMessage += '服务器返回数据 → \n\n' })
      that.socketReceiveMessage(d)
    })

  },

  /**
   * 断开socket
   */
  socketStop: function () {
    if (this.socket) {
      this.socket.close()
      this.socket = null
    }
    console.log('停止socket')
  },

  /**
   * 发送消息
   */
  socketSendMessage: function (sendStr) {
    if (this.socket) {
      this.setData({ socketMessage: socketMessage += '向服务器发送数据 → ' + sendStr + '\n\n'})
      this.socket.emit('message', sendStr);
    }
  },

  /**
   * 接收消息
   */
  socketReceiveMessage: function (receivedStr) {
    this.setData({ socketMessage: socketMessage += '服务器返回数据 → ' + receivedStr + '\n\n'})
    this.socketStop();
  },
  
})