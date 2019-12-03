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
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/authentication/Login.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import(/* webpackChunkName: "register" */ '../views/authentication/Register.vue')
  },
  {
    path: '/upload',
    name: 'upload',
    component: () => import(/* webpackChunkName: "upload" */ '../views/Upload.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
