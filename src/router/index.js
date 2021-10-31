import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: () => import('../components/MainView.vue')
  },
  {
    path: '/about',
    name: 'About',

    component: () => import('../views/About.vue')
  },
  {
    path: '/create',
    name: 'Add',
    component: () => import('../components/UserCreate')
  },
  {
    path: '/menu',
    name: 'List',
    component: () => import('../components/UserList')
  },
  {
    path: '/edit',
    name: 'Edit',
    component: () => import('../components/UserEdit')
  },
  {
    path: '/reservation',
    name: 'Reservation',
    component: () => import('../components/Reservation')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
