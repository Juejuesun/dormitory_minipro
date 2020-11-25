export default function (options) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: 'http://39.100.133.1:8443/' + options.url,
      method: options.method || 'POST',
      data: options.data || {},
      header: options.header || { 'content-type': 'application/json'},
      dataType:options.dataType||'json',
      responseType:options.responseType||'text',
      success:resolve,
      fail:reject
    })
  })
}