import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/Index'
import Order from '@/components/Order'
import My from '@/components/My'
import User from '@/components/User'
import Team from '@/components/Team'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      children:[
        {
          path: '/Index',
          name: 'Index',
          component: Index
        },
        {
          path: '/Order',
          name: 'Order',
          component: Order
        },
        {
          path: '/My',
          name: 'My',
          component: My
        },
        
      ]
    },
    {
      path: '/User',
      name: 'User',
      component: User
    },
    {
      path: '/Team',
      name: 'Team',
      component: Team
    },
  ]
})
