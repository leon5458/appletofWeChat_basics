const baseurl = "http://192.168.1.252/dms-api"
const token = ''
const post = function (url, body, success, fail, complete) {
  wx.request({
    url: baseurl + url,
    data: body,
    header: {
      'content-type': 'application/x-www-form-urlencoded' // 默认值
    },
    method: 'POST',
    success(res) {
      if (success) {
        if (res.data.status === 1) {
          success(res.data)
        } else if (res.data.status === -100) {
          wx.redirectTo({
            url: '/pages/homeViewcontroller/homeViewcontroller'
          })
        } else {
          success(res.data)
          wx.showToast({
            title: res.data.msg,
            icon: 'none',
            mask: 'true'
          })
        }

      }
    },
    fail(error) {
      wx.showToast({
        title: '服务器异常',
        icon: 'none',
        mask: 'true'
      })
      console.log("fail", error)
      if (fail) {
        fail(error)
      }
    },
    complete() {
      if (complete) {
        complete()
      }
    }

  })

}

const get = function (url, body, success, fail, complete) {
  wx.request({
    url: baseurl + url,
    data: body,
    header: {
      'content-type': 'application/x-www-form-urlencoded'
    },
    method: 'GET',
    success(res) {
      console.log("success", res.data)
      if (success) {
        if (res.data.status === 1) {
          success(res.data)
        } else if (res.data.status === -100) {
          wx.redirectTo({
            url: '/pages/homeViewcontroller/homeViewcontroller'
          })
        } else {
          success(res.data)
          wx.showToast({
            title: res.data.msg,
            icon: 'none',
            mask: 'true'
          })
        }
      }
    },
    fail(error) {
      console.log("fail", error)
      wx.showToast({
        title: '服务器异常',
        icon: 'none',
        mask: 'true'
      })
      if (fail) {
        fail(error)
      }
    },
    complete() {
      if (complete) {
        complete()
      }
    }

  })
}


const getNoPrompt = function (url, body, success, fail, complete) {
  wx.request({
    url: baseurl + url,
    data: body,
    header: {
      'content-type': 'application/x-www-form-urlencoded'
    },
    method: 'GET',
    success(res) {
      console.log("success", res.data)
      if (success) {
        if (res.data.status === 1) {
          success(res.data)
        } else if (res.data.status === -100) {
          wx.redirectTo({
            url: '/pages/homeViewcontroller/homeViewcontroller'
          })
        } else {
          success(res.data)
        }
      }
    },
    fail(error) {
      console.log("fail", error)
      wx.showToast({
        title: '服务器异常',
        icon: 'none',
        mask: 'true'
      })
      if (fail) {
        fail(error)
      }
    },
    complete() {
      if (complete) {
        complete()
      }
    }

  })
}

module.exports = {
  post: post,
  get: get,
  getNoPrompt: getNoPrompt,
  token: token,
  url: baseurl
}