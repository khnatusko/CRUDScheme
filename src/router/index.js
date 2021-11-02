import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  //{
  //  path: '/',
  //  name: 'main',
  //  component: () => import('../components/MainView.vue')
  //},
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
    path: '/cart',
    name: 'Cart',
    component: () => import('../views/Cart')
  }


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
