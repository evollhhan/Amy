/**
 * name: Subscribe & Publish
 * version: 0.1.0
 * date: 2016-09-18
 */

export function RssX (data) {
  const _subscriber = {}
  this.publish = (key, data) => {
    _subscriber[key](data)
  }
  this.subscribe = (key, func) => {
    _subscriber[key] = func
  }
}
