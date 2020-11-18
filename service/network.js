export default function (options) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: options.url,
      method: options.method || 'get',
      data: options.data || {},
      header: options.header || { 'content-type': 'application/x-www-form-urlencoded'},
      dataType:options.dataType||'json',
      responseType:options.responseType||'text',
      success:resolve,
      fail:reject
    })
  })
}