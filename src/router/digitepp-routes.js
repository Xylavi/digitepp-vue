import Digitepp from '@/views/lp-digi/index.vue'
import KepTerdaftar from '@/views/lp-digi/KepTerdaftar.vue'
import DetailKep from '@/views/lp-digi/DetailKep.vue'
import Testimoni from '@/views/lp-digi/Testimoni.vue'
import BeritaTerkini from '@/views/lp-digi/BeritaTerkini.vue';
import DetailBerita from '@/views/lp-digi/DetailBerita.vue';

const lpDigi = [
    {
        path: '/',
        name: 'digitepp',
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
        path: '/testimoni',
        name: 'testimoni',
        component: Testimoni
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
];

export default lpDigi