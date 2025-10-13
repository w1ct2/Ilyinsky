import Catalog from '@/components/pages/Catalog/Catalog.vue'
import Contacts from '@/components/pages/Contacts/Contacts.vue'
import Home from '@/components/pages/Home/Home.vue'
import NotFound from '@/components/pages/NotFound/NotFound.vue'
import Profile from '@/components/pages/Profile/Profile.vue'
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
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: Contacts
  },
  {
    path: '/personal-account',
    name: 'personal-account',
    component: Profile 
  },
  {
    path: '/catalog',
    name: 'catalog',
    component: Catalog
  },
  {
    path: '/:param(.*)*',
    name: 'not-found',
    component: NotFound
  }
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  }
})

export default router
