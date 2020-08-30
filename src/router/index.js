import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

Vue.use(Router)

const router = new Router({
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

router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done()
})

export default router
