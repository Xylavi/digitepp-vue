<script setup>
import DigiFooter from '@/components/DigiFooter.vue';
import DigiNavbar from '@/components/DigiNavbar.vue';
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
                <router-link name="" id="" class="btn btn-primary my-5 bg-info-subtle border border-info digi-text-color-blue" :to="{name: 'home'}" role="button">
                    <i class="bi bi-arrow-left font-noto-sans-regular"> Kembali Ke Beranda</i>
                </router-link>
                <div class="row row-cols-1 table-responsive text-center">
                    <h2 class="font-dm-serif-text-regular mb-5">KEP Terdaftar</h2>
                    <table class="table mx-0 px-0 mx-lg-5 px-lg-5 table-white text-start">
                        <thead>
                            <tr>
                                <th scope="col">No.</th>
                                <th scope="col">Nama KEP</th>
                                <th scope="col">Nama Lembaga</th>
                            </tr>
                        </thead>
                        <tbody class="font-noto-sans-regular align-baseline">
                            <tr>
                                <td>1.</td>
                                <td class="row row-cols-1 row-cols-lg-2 align-items-center">
                                    <div class="col-lg-2">
                                        <img src="/images/kep-terdaftar/stikes.png" alt="STIKes RSPAD Gatot Soebroto" style="width: 10vh;">
                                    </div>
                                    <div class="col-lg-10">
                                        <router-link class="font-noto-sans-bold text-black" :to="{name: 'detailKep'}">STIKes RSPAD Gatot Soebroto</router-link>
                                    </div>
                                </td>
                                <td>STIKes RSPAD Gatot Soebroto</td>
                            </tr>
                            <tr>
                                <td>2.</td>
                                <td class="row row-cols-1 row-cols-lg-2 align-items-center">
                                    <div class="col-lg-2">
                                        <img src="/images/kep-terdaftar/rs-soeharto.png" alt="CRU RS Soeharto Heerdjan" style="width: 10vh;">
                                    </div>
                                    <div class="col-lg-10">
                                        <p class="mb-1"><router-link class="font-noto-sans-bold text-black" :to="{name: 'detailKep'}">CRU RS Soeharto Heerdjan</router-link></p>
                                        <span class="badge text-white font-noto-sans-regular text-center digi-kep-card-sle digi-bg-color-orange rounded-5">Belum bisa menerbitkan SLE</span>
                                    </div>
                                </td>
                                <td>Rumah Sakit Soeharto Heerdjan</td>
                            </tr>
                            <tr>
                                <td>3.</td>
                                <td class="row row-cols-1 row-cols-lg-2 align-items-center">
                                    <div class="col-lg-2">
                                        <img src="/images/kep-terdaftar/widya.png" alt="KEP Universitas Widya Nusantara" style="width: 10vh;">
                                    </div>
                                    <div class="col-lg-10">
                                        <router-link class="font-noto-sans-bold text-black" :to="{name: 'detailKep'}">KEP Universitas Widya Nusantara</router-link>
                                    </div>
                                </td>
                                <td>Universitas Widya Nusantara (UWN) Palu</td>
                            </tr>
                            <tr>
                                <td>4.</td>
                                <td class="row row-cols-1 row-cols-lg-2 align-items-center">
                                    <div class="col-lg-2">
                                        <img src="/images/kep-terdaftar/upn-jatim.png" alt="UPN Veteran Jawa Timur" style="width: 10vh;">
                                    </div>
                                    <div class="col-lg-10">
                                        <p class="mb-1"><router-link class="font-noto-sans-bold text-black" :to="{name: 'detailKep'}">UPN Veteran Jawa Timur</router-link></p>
                                        <span class="badge text-white font-noto-sans-regular text-center digi-kep-card-sle digi-bg-color-orange rounded-5">Belum bisa menerbitkan SLE</span>
                                    </div>
                                </td>
                                <td>UPN Veteran Jawa Timur</td>
                            </tr>
                            <tr>
                                <td>5.</td>
                                <td class="row row-cols-1 row-cols-lg-2 align-items-center">
                                    <div class="col-lg-2">
                                        <img src="/images/kep-terdaftar/unisbar.png" alt="Komite Etik UNISBAR" style="width: 10vh;">
                                    </div>
                                    <div class="col-lg-10">
                                        <router-link class="font-noto-sans-bold text-black" :to="{name: 'detailKep'}">Komite Etik UNISBAR</router-link>
                                    </div>
                                </td>
                                <td>Universitas Sumatera Barat (Unisbar)</td>
                            </tr>
                            <tr>
                                <td>6.</td>
                                <td class="row row-cols-1 row-cols-lg-2 align-items-center">
                                    <div class="col-lg-2">
                                        <img src="/images/kep-terdaftar/sayang-cianjur.png" alt="KEPK RSUD SAYANG CIANJUR" style="width: 10vh;">
                                    </div>
                                    <div class="col-lg-10">
                                        <router-link class="font-noto-sans-bold text-black" :to="{name: 'detailKep'}">KEPK RSUD SAYANG CIANJUR</router-link>
                                    </div>
                                </td>
                                <td>RSUD SAYANG CIANJUR</td>
                            </tr>
                            <tr>
                                <td>7.</td>
                                <td class="row row-cols-1 row-cols-lg-2 align-items-center">
                                    <div class="col-lg-2">
                                        <img src="/images/kep-terdaftar/rsj-riau.png" alt="RS JIWA TAMPAN PROVINSI RIAU" style="width: 10vh;">
                                    </div>
                                    <div class="col-lg-10">
                                        <p class="mb-1"><router-link class="font-noto-sans-bold text-black" :to="{name: 'detailKep'}">RS JIWA TAMPAN PROVINSI RIAU</router-link></p>
                                        <span class="badge text-white font-noto-sans-regular text-center digi-kep-card-sle digi-bg-color-orange rounded-5">Belum bisa menerbitkan SLE</span>
                                    </div>
                                </td>
                                <td>RSJ TAMPAN PROVINSI RIAU</td>
                            </tr>
                            <tr>
                                <td>8.</td>
                                <td class="row row-cols-1 row-cols-lg-2 align-items-center">
                                    <div class="col-lg-2">
                                        <img src="/images/kep-terdaftar/rsud-bekasi.png" alt="RSUD Kab Bekasi" style="width: 10vh;">
                                    </div>
                                    <div class="col-lg-10">
                                        <p class="mb-1"><router-link class="font-noto-sans-bold text-black" :to="{name: 'detailKep'}">RSUD Kab Bekasi</router-link></p>
                                        <span class="badge text-white font-noto-sans-regular text-center digi-kep-card-sle digi-bg-color-orange rounded-5">Belum bisa menerbitkan SLE</span>
                                    </div>
                                </td>
                                <td>RSUD Kabupaten Bekasi</td>
                            </tr>
                            <tr>
                                <td>9.</td>
                                <td class="row row-cols-1 row-cols-lg-2 align-items-center">
                                    <div class="col-lg-2">
                                        <img src="/images/kep-terdaftar/ewit-irianti-panrita-husada.png" alt="Ewit irianti" style="width: 10vh;">
                                    </div>
                                    <div class="col-lg-10">
                                        <p class="mb-1"><router-link class="font-noto-sans-bold text-black" :to="{name: 'detailKep'}">Ewit irianti</router-link></p>
                                        <span class="badge text-white font-noto-sans-regular text-center digi-kep-card-sle digi-bg-color-orange rounded-5">Belum bisa menerbitkan SLE</span>
                                    </div>
                                </td>
                                <td>STIKES Panrita Husada Bulukumba</td>
                            </tr>
                            <tr>
                                <td>10.</td>
                                <td class="row row-cols-1 row-cols-lg-2 align-items-center">
                                    <div class="col-lg-2">
                                        <img src="/images/kep-terdaftar/rsud-soewondo-pati.png" alt="KEPK SOEWONDO PATI" style="width: 10vh;">
                                    </div>
                                    <div class="col-lg-10">
                                        <router-link class="font-noto-sans-bold text-black" :to="{name: 'detailKep'}">KEPK SOEWONDO PATI</router-link>
                                    </div>
                                </td>
                                <td>RSUD RAA Soewondo PATI</td>
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
