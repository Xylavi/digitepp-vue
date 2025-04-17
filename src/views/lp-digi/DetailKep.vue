<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router'; 
import axios from 'axios';

import DigiFooter from '@/components/DigiFooter.vue';
import DigiNavbar from '@/components/DigiNavbar.vue';
import DigiBackButton from '@/components/DigiBackButton.vue';

const kep = ref(null);
const route = useRoute(); 
const id = route.params.id; 

onMounted(async () => {
    try {
        const response = await axios.get(`http://127.0.0.1:8000/api/kep/${id}`);
        kep.value = response.data.data;
    } catch (error) {
        console.error('Failed to fetch data:', error);
    }
});
</script>


<template>

    <!--NAVIGATION BAR-->

    <header>
        <DigiNavbar :fixed-top="false"/>
    </header>
    <main>

        <!--DETAIL KEP-->

        <section class="m-3 m-lg-5">

            <!-- Back Button -->
            <DigiBackButton/>

            <div class="container text-center">
                <h2 class="font-dm-serif-text-regular py-3 my-3 py-lg-5">Detail KEP</h2>

                <div class="row row-cols-1 row-cols-lg-2 my-lg-5">
                    <div class="col">
                        <img v-if="kep?.file_logo"
                            :src="`https://digitepp.id${kep.file_logo}`"
                            alt="Kep Logo"
                            style="width: 30vw;"
                        >
                        <span v-else class="placeholder-glow"></span>
                        <h3 class="font-dm-serif-text-regular">{{ kep?.nama || '-' }}</h3>
                    </div>

                    <div class="table-responsive py-3 digi-border-color-blue border border-3 rounded-5">
                        <table class="table">
                            <tbody class="text-start">

                                <!-- NAMA LEMBAGA - Row 1 -->
                                <tr class="">
                                    <td>
                                        <p class="font-noto-sans-bold">Nama Lembaga</p>
                                        <p class="font-noto-sans-regular">{{ kep?.lembaga?.nama || '-' }}</p>
                                    </td>
                                </tr>

                                <!-- JENIS LEMBAGA - Row 2 -->
                                <tr class="">
                                    <td>
                                        <p class="font-noto-sans-bold">Jenis Lembaga</p>
                                        <p class="font-noto-sans-regular">{{ kep?.jenis_lembaga || '-' }}</p>
                                    </td>
                                </tr>

                                <!-- PEMILIK LEMBAGA - Row 3 -->
                                <tr class="">
                                    <td>
                                        <p class="font-noto-sans-bold">Pemilik Lembaga</p>
                                        <p class="font-noto-sans-regular">{{ kep?.pemilik_lembaga || '-' }}</p>
                                    </td>
                                </tr>

                                <!-- ALAMAT KEP - Row 4 -->
                                <tr class="">
                                    <td>
                                        <p class="font-noto-sans-bold">Alamat KEP</p>
                                        <p class="font-noto-sans-regular">{{ kep?.alamat || '-' }}</p>
                                    </td>
                                </tr>

                                <!-- NOMOR TELEPON - Row 5 -->
                                <tr class="">
                                    <td>
                                        <p class="font-noto-sans-bold">Nomor Telepon</p>
                                        <p class="font-noto-sans-regular">{{ kep?.telp || '-' }}</p>
                                    </td>
                                </tr>

                                <!-- EMAIL KEP - Row 6 -->
                                <tr class="">
                                    <td>
                                        <p class="font-noto-sans-bold">Email KEP</p>
                                        <p class="font-noto-sans-regular">{{ kep?.email || '-' }}</p>
                                    </td>
                                </tr>

                                <!-- KETUA - Row 7 -->
                                <tr class="">
                                    <td>
                                        <p class="font-noto-sans-bold">Ketua</p>
                                        <p class="font-noto-sans-regular">
                                            {{ kep?.anggota?.find(a => a.role?.id === 11)?.nama || '-' }}
                                        </p>
                                    </td>
                                </tr>

                                <!-- WAKIL KETUA - Row 8 -->
                                <tr class="">
                                    <td>
                                        <p class="font-noto-sans-bold">Wakil Ketua</p>
                                        <p class="font-noto-sans-regular">
                                            {{ kep?.anggota?.find(a => a.role.id === 15)?.nama || '-' }}
                                        </p>
                                    </td>
                                </tr>

                                <!-- SEKETARIS - Row 9 -->
                                <tr class="">
                                    <td>
                                        <p class="font-noto-sans-bold">Seketaris</p>
                                        <p class="font-noto-sans-regular">
                                            {{ kep?.anggota?.find(a => a.role.id === 12)?.nama || '-' }}
                                        </p>
                                    </td>
                                </tr>

                                <!-- ANGGOTA - Row 10 -->
                                <tr class="">
                                    <td>
                                        <p class="font-noto-sans-bold">Anggota</p>
                                        <ol class="font-noto-sans-regular">
                                            <li v-for="(member, index) in kep?.anggota?.filter(a => a.role.id === 13)" :key="index">
                                                {{ member.nama }}
                                            </li>
                                        </ol>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </section>

    </main>
    <footer>
        <DigiFooter/>
    </footer>

</template>
