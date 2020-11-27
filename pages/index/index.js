//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
  },
  bindGetUserInfo:function(e){
    if(e.detail.userInfo){
      var that = this;
      app.login();
    } else {
      //用户按了拒绝按钮
      wx.showModal({
        title: '警告',
        content: '您点击了拒绝授权，将无法进入小程序，请授权之后再进入!!!',
        showCancel: false,
        confirmText: '确认授权',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击了“确认授权”')
          }
        }
      })
    }
  },
  onLoad: function () {
  }
})
