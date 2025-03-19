import { createRouter, createWebHistory } from 'vue-router'
import Digitepp from '@/views/lp-digi/index.vue'
import BeritaTerkini from '@/views/lp-digi/BeritaTerkini.vue'
import DetailBerita from '@/views/lp-digi/DetailBerita.vue'
import KepTerdaftar from '@/views/lp-digi/KepTerdaftar.vue'
import DetailKep from '@/views/lp-digi/DetailKep.vue'
import Kep from '@/views/lp-kep/index.vue'
import Pengusul from '@/views/lp-pengusul/index.vue'
import Testimoni from '@/views/Testimoni.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Digitepp
    },
    {
        path: '/kep-terdaftar',
        name: 'kepTerdaftar',
        component: KepTerdaftar
    },
    {
        path: '/detail-kep',
        name: 'detailKep',
        component: DetailKep
    },
    {
        path: '/detail-berita',
        name: 'detailBerita',
        component: DetailBerita
    },
    {
        path: '/berita-terkini',
        name: 'beritaTerkini',
        component: BeritaTerkini
    },
    {
        path: '/kep',
        name: 'kep',
        component: Kep,
    },
    {
        path: '/pengusul',
        name: 'pengusul',
        component: Pengusul
    },
    {
        path: '/testimoni',
        name: 'testimoni',
        component: Testimoni
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
})

export default router