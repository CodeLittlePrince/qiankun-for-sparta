import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = () => import(/* webpackChunkName: "home" */ '../pages/home')
const PageA = () => import(/* webpackChunkName: "pageA" */ '../pages/pageA')
const PageB = () => import(/* webpackChunkName: "pageB" */ '../pages/pageB')

export default new VueRouter({
  base: window.__POWERED_BY_QIANKUN__ ? '/game' : '/',
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/pageA',
      component: PageA
    },
    {
      path: '/pageB',
      component: PageB
    },
  ]
})