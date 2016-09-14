/**
 * Http Service
 *
 */

(() => {
  function Http () {
    let xhr = new XMLHttpRequest()
    function AsyncRequest (success, dataType) {
      let that = this
      let stateChange = (function (xhr, success, dataType) {
        return function () {
          if (this.readyState === 4) {
            Response(success, dataType)
          }
        }
      })(that, success, dataType)
      xhr.onreadystatechange = stateChange
    }
    function Response (success, dataType) {
      if (xhr.status >= 200 && xhr.status < 300 || xhr.status == 304) {
        let data = xhr.responseText
        if (dataType === 'json') data = JSON.parse(data)
        success && success(data)
      } else {
        console.error('HttpServer Error: ' + xhr.status)
      }
    }
    function Progress (progress) {
      let updateProgress = (function (progress) {
        return function (evt) {
          progress && progress(evt)
        }
      })(progress)
      xhr.onprogress = updateProgress
    }
    return {
      'Get': function (opt) {
        AsyncRequest(opt.success, opt.dataType)
        Progress(opt.progress)
        if (typeof (opt.data) === 'object') {
          for (let i in opt.data) {
            opt.url += (opt.url.indexOf('?') === -1) ? '?' : '&'
            opt.url += encodeURIComponent(i) + '=' + encodeURIComponent(opt.data[i])
          }
        }
        xhr.open('get', opt.url, true)
        xhr.send()
      },
      'Post': function (opt) {
        AsyncRequest(opt.success, opt.dataType)
        xhr.open('post', opt.url, true)
        xhr.setRequestHeader('Content-type', 'application/json;charset=UTF-8')
        xhr.send(JSON.stringify(opt.data))
      },
      'Abort': function () {
        xhr.abort()
      }
    }
  }
  window.http = new Http()
})()
