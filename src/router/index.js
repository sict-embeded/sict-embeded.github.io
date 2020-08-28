import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/index'
    },
    {
      path: '/index',
      name: 'HelloWorld',
      component: ()=>import('@/components/HelloWorld')
    },
    {
      path: '*',
      name: 'HelloWorld',
      component: ()=>import('@/components/NotFound')
    }
  ]
})
