import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import main from '@/components/main'
import detail from '@/components/detail'
import more from '@/components/more'
import login from '@/components/Login'
import regin from '@/components/regin'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mains',
      component: main
    },
    {
      path: '/detail:fid',
      name: 'Detail',
      component: detail
    },
    {
      path: '/more:fid',
      name: 'More',
      component: more
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/regin',
      name: 'regin',
      component: regin
    }
  ]
})
