<script setup>
import { ref, onMounted } from 'vue';
import DigiFooter from '@/components/DigiFooter.vue';
import DigiNavbar from '@/components/DigiNavbar.vue';
import { kepService } from '@/services/kepService';

const keps = ref([]);
const loading = ref(true);
const error = ref(null);

onMounted(async () => {
    try {
        const response = await kepService.getAllkeps();
        keps.value = response.data;
        loading.value = false;
    } catch (error) {
        console.error('Failed to fetch data:', error);
        error.value = error.message;
    } finally {
        loading.value = false;
    }
});
</script>

<template>
    <header>
        <DigiNavbar :fixed-top="false"/>
    </header>

    <main>

<!-- TABEL KEP TERDAFTAR SECTION-->

        <section class="m-3 m-lg-5">
            <div class="container">
                <!-- Back Button -->
                <router-link class="btn btn-primary my-5 bg-info-subtle border border-info digi-text-color-blue" :to="{name: 'home'}" role="button">
                    <i class="bi bi-arrow-left font-noto-sans-regular"> Kembali Ke Beranda</i>
                </router-link>
                <div class="row row-cols-1 table-responsive text-center">
                    <h2 class="font-dm-serif-text-regular mb-5">KEP Terdaftar</h2>

                    <div v-if="loading" class="text-center">
                        <div class="spinner-border" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </div>

                    <div v-else-if="error" class="alert alert-danger" role="alert">
                        {{ error }}
                    </div>

                    <table v-else class="table mx-0 px-0 mx-lg-5 px-lg-5 table-white text-start">
                        <thead>
                            <tr>
                                <th scope="col">No.</th>
                                <th scope="col">Nama KEP</th>
                                <th scope="col">Nama Lembaga</th>
                            </tr>
                        </thead>
                        <tbody class="font-noto-sans-regular align-baseline">
                            <tr v-for="(kep, index) in keps" :key="kep.id">
                                <td>{{ index + 1 + '.' }}</td>
                                <td class="row row-cols-1 row-cols-lg-2 align-items-center">
                                    <div class="col-lg-2">
                                        <img v-if="kep?.file_logo" :src="`https://digitepp.id${kep.file_logo}`" alt="Kep Logo" style="width: 10vh;">
                                        <span v-else class="placeholder-glow"></span>
                                    </div>
                                    <div class="col-lg-10">
                                        <router-link class="font-noto-sans-bold text-black" :to="{name: 'detailKep', params: { id: kep.id || null }}">
                                            {{ kep.nama }}
                                        </router-link>
                                    </div>
                                </td>
                                <td>{{ kep?.lembaga?.nama || `-` }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    </main>
    <footer>
        <DigiFooter/>
    </footer>
</template>
