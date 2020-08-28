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
      component: ()=>import(/* webpackChunkName: "homepage" */'@/components/HelloWorld')
    },
    {
      path: '*',
      name: 'NotFound',
      component: ()=>import(/* webpackChunkName: "404page" */'@/components/NotFound')
    }
  ]
})
