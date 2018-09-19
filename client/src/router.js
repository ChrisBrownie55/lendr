import Vue from 'vue'
import Router from 'vue-router'
// @ts-ignore
import Home from './views/Home.vue'
// @ts-ignore
import Profile from './views/Profile.vue'
// @ts-ignore
import Lends from './views/Lends.vue'
import FriendProfile from './views/FriendProfile.vue'
import SearchUsers from './views/SearchUsers.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
    {
      path: '/user',
      name: 'user',
      component: FriendProfile
    },
    {
      path: '/lends',
      name: 'lends',
      component: Lends
    },
    {
      path: '/searchUsers',
      name: 'searchUsers',
      component: SearchUsers
    }
  ]
})
