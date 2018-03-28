import Vue from 'vue'
import Router from 'vue-router'
import NewsList from '@/components/NewsList'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/news' },
    { path: '/news/:page?', component: NewsList },
    { path: '/newest/:page?', component: NewsList },
    { path: '/show/:page?', component: NewsList },
    { path: '/ask/:page?', component: NewsList },
    { path: '/jobs/:page?', component: NewsList }
  ]
})
