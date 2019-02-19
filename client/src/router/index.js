import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Users from '@/components/Users'
import User from '@/components/User'
import Bookings from '@/components/Bookings'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/users',
      name: 'Users',
      component: Users
    },
    {
      path: '/users/:id/bookings',
	  name: 'User Bookings',
      component: User
    },
    {
      path: '/users/:id',
	  name: 'User Info',
      component: User
    }
  ]
})
