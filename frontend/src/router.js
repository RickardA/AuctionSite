import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Auctions from './views/Auctions.vue'
import Auction from './views/Auction.vue'
import ErrorPage  from './views/ErrorPage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/auctions',
      name: 'auctions',
      component: Auctions
    },
    {
      path: '/auction',
      name: 'auction',
      component: Auction
    },
    {
      path: '/error',
      name: 'errorPage',
      component: ErrorPage
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
