//
// sleep
// ----

export default (vue, options) => {
  vue.prototype.$sleep = function (time = 600) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve()
      }, time)
    })
  }
}
