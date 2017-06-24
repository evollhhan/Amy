import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'

import Setting from '@/controller/setting/index'
import SettingGeneral from '@/controller/setting/general'
import SettingProxy from '@/controller/setting/proxy'
import Maker from '@/controller/maker'
import About from '@/controller/about'
import Help from '@/controller/help'
import Preview from '@/controller/preview'
import Project from '@/controller/project'
import Welcome from '@/controller/welcome'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: Welcome
    },
    {
      path: '/setting',
      name: 'setting',
      component: Setting,
      children: [
        {
          path: 'proxy',
          component: SettingProxy
        },
        {
          path: '*',
          component: SettingGeneral
        }
      ]
    },
    {
      path: '/new',
      name: 'new',
      component: Maker
    },
    {
      path: '/project',
      name: 'project',
      component: Project
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/preview',
      name: 'preview',
      component: Preview
    },
    {
      path: '/help',
      name: 'help',
      component: Help
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

router.beforeEach((to, from, next) => {
  document.body.scrollTop = 0
  if (!store.state.status && to.path !== '/') {
    return next({
      path: '/',
      query: {
        source: to.path.slice(1)
      }
    })
  }
  next()
})

export default router
