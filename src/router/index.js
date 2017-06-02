import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    // {
    //   path: '/setting',
    //   name: 'setting',
    //   component: Setting,
    //   children: [
    //     {
    //       path: 'proxy',
    //       component: SettingProxy
    //     },
    //     {
    //       path: '*',
    //       component: SettingGeneral
    //     }
    //   ]
    // },
  ]
})

router.beforeEach((to, from, next) => {
})

export default router
