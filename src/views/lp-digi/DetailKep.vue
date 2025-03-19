<script lang="js" setup>
import DigiFooter from '@/components/DigiFooter.vue';
import DigiNavbar from '@/components/DigiNavbar.vue';


</script>

<template>

    <!--NAVIGATION BAR-->

    <header>
        <DigiNavbar/>
    </header>
    <main>

        <!--DETAIL KEP-->

        <section class="m-3 m-lg-5">

            <!-- Back Button -->
            <router-link name="" id="" class="btn btn-primary my-5 bg-info-subtle border border-info digi-text-color-blue"
                :to="{name: 'kepTerdaftar'}" role="button">
                <i class="bi bi-arrow-left font-noto-sans-regular"> Kembali</i>
            </router-link>

            <div class="container text-center">
                <h2 class="font-dm-serif-text-regular py-3 my-3 py-lg-5 my-lg-5">Detail KEP</h2>

                <div class="row row-cols-1 row-cols-lg-2">
                    <div class="col">
                        <img src="/images/kep-terdaftar/stikes.png" alt="stikes" style="width: 30vw;">
                        <h3 class="font-dm-serif-text-regular">STIKes RSPAD Gatot Soebroto</h3>
                    </div>

                    <div class="table-responsive py-3 digi-border-color-blue border border-3 rounded-5">
                        <table class="table">
                            <tbody class="text-start">

                                <!-- NAMA LEMBAGA - Row 1 -->
                                <tr class="">
                                    <td>
                                        <p class="font-noto-sans-bold">Nama Lembaga</p>
                                        <p class="font-noto-sans-regular">STIKES RSPAD Gatot Subroto</p>
                                    </td>
                                </tr>

                                <!-- JENIS LEMBAGA - Row 2 -->
                                <tr class="">
                                    <td>
                                        <p class="font-noto-sans-bold">Jenis Lembaga</p>
                                        <p class="font-noto-sans-regular">Pendidikan (Negeri, Swasta)</p>
                                    </td>
                                </tr>

                                <!-- PEMILIK LEMBAGA - Row 3 -->
                                <tr class="">
                                    <td>
                                        <p class="font-noto-sans-bold">Pemilik Lembaga</p>
                                        <p class="font-noto-sans-regular">Swasta (Yayasan)</p>
                                    </td>
                                </tr>

                                <!-- ALAMAT KEP - Row 4 -->
                                <tr class="">
                                    <td>
                                        <p class="font-noto-sans-bold">Alamat KEP</p>
                                        <p class="font-noto-sans-regular">Jl. dr. Abdul Rahman Saleh No 24 Senen,
                                            Jakarta Pusat KOTA ADM. JAKARTA PUSAT, DKI JAKARTA, 10410</p>
                                    </td>
                                </tr>

                                <!-- NOMOR TELEPON - Row 5 -->
                                <tr class="">
                                    <td>
                                        <p class="font-noto-sans-bold">Nomor Telepon</p>
                                        <p class="font-noto-sans-regular">081387403921</p>
                                    </td>
                                </tr>

                                <!-- EMAIL KEP - Row 6 -->
                                <tr class="">
                                    <td>
                                        <p class="font-noto-sans-bold">Email KEP</p>
                                        <p class="font-noto-sans-regular">etik@stikesrspadgs.ac.id</p>
                                    </td>
                                </tr>

                                <!-- KETUA - Row 7 -->
                                <tr class="">
                                    <td>
                                        <p class="font-noto-sans-bold">Ketua</p>
                                        <p class="font-noto-sans-regular">Christin Jayanti, S.ST., M.Kes</p>
                                    </td>
                                </tr>

                                <!-- WAKIL KETUA - Row 8 -->
                                <tr class="">
                                    <td>
                                        <p class="font-noto-sans-bold">Wakil Ketua</p>
                                        <p class="font-noto-sans-regular"> - </p>
                                    </td>
                                </tr>

                                <!-- SEKETARIS - Row 9 -->
                                <tr class="">
                                    <td>
                                        <p class="font-noto-sans-bold">Seketaris</p>
                                        <p class="font-noto-sans-regular">Ns. Meulu Primananda, S.Kep</p>
                                    </td>
                                </tr>

                                <!-- ANGGOTA - Row 10 -->
                                <tr class="">
                                    <td>
                                        <p class="font-noto-sans-bold">Anggota</p>
                                        <p class="font-noto-sans-regular">
                                        <ol>
                                            <li>Ns. Bahreni Yusuf, S.Kep., M.Kep., SP.Kep.MB</li>
                                            <li>Ns. Lilis Kamilah, S.Kep., M.Kep</li>
                                            <li>Ns. Rahayu Maharani, M.Kep</li>
                                            <li>Ns. Reni, M.Kep</li>
                                            <li>Ns. Septirina Rahayu, M.Kep, Sp.Kep.J</li>
                                            <li>Ns. Teti Hayati, M.M., M.Kep</li>
                                            <li>Bdn. Dina Raidanti, S.SiT., M.Kes</li>
                                            <li>Bdn. Hesti Kusumaningrum</li>
                                            <li>Tetty Oktavia Limbong, M.Tr.Keb</li>
                                            <li>Bdn. Devi Yulianti, SST., M.Bmd</li>
                                        </ol>
                                        </p>
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
