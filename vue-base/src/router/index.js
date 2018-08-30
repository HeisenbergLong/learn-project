import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/home'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home,
      name: 'home',
      children: [
        //子路由
        // {
        //   path: 'red',
        //   name: 'redView1',
        //   component: RedView1
        // }
      ]
    }
  ]
})

export default router;
