import Home from '@/components/pages/Home/Home.vue'
import Promotions from '@/components/pages/Promotions/Promotions.vue'
import Vacancies from '@/components/pages/Vacancies/Vacancies.vue'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
  },
  {
    path: '/promotions',
    name: 'promotions',
    component: Promotions
  },
  {
    path: '/vacancies',
    name: 'vacansies',
    component: Vacancies
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
