import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LocationView from '@/views/LocationView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Home'
      }
    },
    {
      path: '/weather/:state/:city',
      name: 'locationView',
      component: LocationView,
      meta: {
        title: 'Local'
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title as string} | Weather Vue`
  next()
})

export default router
