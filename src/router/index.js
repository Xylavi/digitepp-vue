import { createRouter, createWebHistory } from 'vue-router'
import lpDigi from './digitepp-routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...lpDigi],
})

export default router
