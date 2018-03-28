import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/news' },
    { path: '/news/:page?', component: Home },
    { path: '/newest/:page?', component: Home },
    { path: '/show/:page?', component: Home },
    { path: '/ask/:page?', component: Home },
    { path: '/jobs/:page?', component: Home }
  ]
})
