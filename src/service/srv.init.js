//
// init
// ----
import store from '../store'

export default () => {
  return new Promise(resolve => {
    let res = {
      firebase: 0,
      config: {
        developDomain: 'http://localhost',
        developPort: '5000',
        apiServerPort: '5002',
        apiType: 'mock',
        autoOpenBrowser: false,
        realTimeLog: false
      },
      project: [
        {
          name: '101016',
          author: 'pathen',
          description: '萌节',
          path: 'http://live.bilibili.com/hd/101016',
          type: 'activity'
        },
        {
          name: 'anniversary',
          author: 'pathen',
          description: '7th Anniversary',
          path: 'http://live.bilibili.com/anniversary',
          type: 'activity'
        },
        {
          name: 'election',
          author: 'pathen',
          description: '绘画选举',
          path: 'http://live.bilibili.com/hd/election',
          type: 'activity'
        },
        {
          name: 'deepspace',
          author: 'pathen',
          description: '点标题5下看彩蛋～',
          path: 'http://live.bilibili.com/hd/deepspace',
          type: 'activity'
        },
        {
          name: 'lastorder',
          author: 'pathen',
          description: 'Last Order',
          path: 'http://live.bilibili.com/hd/lastorder',
          type: 'activity'
        },
        {
          name: 'carnival2nd',
          author: 'pathen',
          description: 'Hyper·春Carnival·2nd',
          path: 'http://live.bilibili.com/hd/carnival2nd',
          type: 'activity'
        }
      ]
    }
    store.commit('init', res)
    resolve()
  })
}
