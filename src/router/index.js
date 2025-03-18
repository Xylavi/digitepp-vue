import { createRouter, createWebHistory } from 'vue-router'
import lpDigi from './lpDigi-routes'
import lpKep from './lpKep-routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...lpDigi, ...lpKep],
})

export default router
