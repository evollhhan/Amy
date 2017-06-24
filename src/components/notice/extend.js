//
// notice
// ----

const list = []

export default (vue, options) => {
  vue.prototype.$notice = function (type = 'success', action = '操作成功') {
    if (type === 'hock') {
      list.push(action)
    } else {
      list.forEach(l => {
        l(type, action)
      })
    }
  }
}
