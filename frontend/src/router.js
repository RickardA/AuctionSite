import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Auctions from './views/Auctions.vue'
import Auction from './views/Auction.vue'
import ErrorPage  from './views/ErrorPage.vue'
import newAuction from './views/newAuction.vue'
import SearchResults from './views/SearchResults.vue'
import Chat from './views/Chat.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
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
      path:'/newauction',
      name: 'newAuction',
      component: newAuction
    },
    {
      path: '/error',
      name: 'errorPage',
      component: ErrorPage
    },
    {
      path: '/chat',
      name: 'chat',
      component: Chat
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/auctions/search',
      name: 'searchResults',
      component: SearchResults
    },
  ]
})
