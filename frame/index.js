/* eslint no-unused-vars: 0 */

function RssX () {
  const _subscriber = {}
  this.publish = (key, data) => {
    _subscriber[key](data)
  }
  this.subscribe = (key, func) => {
    _subscriber[key] = func
  }
}

const RSSX = new RssX()

RSSX.subscribe('goToWork', (data) => {
  console.log(data)
})

RSSX.publish('goToWork', 'hello world')

