import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/search',
      name: 'about',
      component: () => import('../views/Search.vue')
    },
    {
      path: '/random',
      name: 'random',
      component: () => import('../views/Random.vue')
    }
  ]
})

export default router
