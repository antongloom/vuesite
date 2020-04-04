import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    meta: {layout: 'main', title: 'Главная страница'},
    component: () => import('../views/Dashboard.vue')
  },
  {
    path: '/registration',
    name: 'registration',
    meta: {layout: 'main', title: 'Регистрация'},
    component: () => import('../views/Registration.vue')
  },
  {
    path: '/auth',
    name: 'auth',
    meta: {layout: 'main', title: 'Авторизация'},
    component: () => import('../views/Auth.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
