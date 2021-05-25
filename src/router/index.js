import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Home',
      component: () => import('@/pages/home'),
      children: [{
          path: '/recommend',
          component: () => import('@/pages/recommend')
        },
        {
          path: '/singer',
          component: () => import('@/pages/singer')
        },
        {
          path: '/rank',
          component: () => import('@/pages/rank')
        },
        {
          path: '/search',
          component: () => import('@/pages/search')
        }
      ]
    },
    {
      path: '/user',
      name: 'User',
      component: () => import('@/pages/user')
    },
  ]
})
