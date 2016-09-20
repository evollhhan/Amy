/* eslint no-unused-vars: 0 */

import {RssX} from '../_module/eventRss'

const RSSX = new RssX()

RSSX.subscribe('goToWork', (data) => {
  console.log(data)
})

RSSX.publish('goToWork', 'hello world')
