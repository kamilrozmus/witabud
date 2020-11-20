import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('@/pages/Home')
const Article = () => import('@/pages/Article')


Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/article',
      name: 'Article',
      component: Article
    }
  ]
})
