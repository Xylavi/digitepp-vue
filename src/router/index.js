import { createRouter, createWebHistory } from 'vue-router'
import lpDigi from './lpDigi-routes'
import lpKep from './lpKep-routes'
import Testimonial from './testimoni-routes'
import lpPengusul from './lpPengusul-routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...lpDigi,
    ...lpKep,
    ...lpPengusul,
    ...Testimonial,
  ],
})

export default router
