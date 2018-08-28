import Vue from 'vue'
import Router from 'vue-router'
import View1 from '@/components/view1'
import View2 from '@/components/view2'
import RedView1 from '@/components/redView1'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    {
      //重定向
      path: '/',
      redirect: '/view1'
    },
    {
      path: '/view1',
      component: View1,
      name: 'view1',
      children: [
        //子路由
        {
          path: 'red',
          name: 'redView1',
          component: RedView1
        }
      ]
    },
    {
      path: '/view2',
      name: 'view2',
      component: View2
    }
  ]
})

export default router;
