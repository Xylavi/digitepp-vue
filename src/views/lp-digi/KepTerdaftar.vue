<script setup>
import DetailKep from './DetailKep.vue';


</script>

<template>
    <header>
        <nav class="navbar navbar-expand-lg shadow-lg rounded-5 px-lg-4 mx-lg-5 mt-3 mt-lg-5 digi-gradient-bg">
            <div class="container-fluid">
                <a class="navbar-brand px-0" href="index.html">
                    <img src="/images/svg/logo-digiTEPP.svg" alt="Digitepp" height="80">
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#beranda" aria-controls="beranda" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="beranda">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0 font-noto-sans-bold" style="font-size: 18px;">
                        <li class="nav-item">
                            <a class="nav-link py-3 px-4" href="index.html" aria-current="page">Beranda</a>
                        </li>
                        <li>
                            <a class="nav-link py-3 px-4" href="#" aria-current="page">Fitur</a>
                        </li>
                        <li>
                            <a class="nav-link py-3 px-4" href="#" aria-current="page">Login</a>
                        </li>
                        <li>
                            <a class="nav-link py-3 px-4" href="#kontak" aria-current="page">Kontak</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    <main>

<!-- TABEL KEP TERDAFTAR SECTION-->

        <section class="m-3 m-lg-5">
            <div class="container">
                <!-- Back Button -->
                <router-link name="" id="" class="btn btn-primary my-5 bg-info-subtle border border-info digi-text-color-blue" :to="{name: 'digitepp'}" role="button">
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
        <div id="kontak" class="container-fluid text-center digi-gradient-bg py-3 pt-5">
            <h2 class="my-3 my-lg-5 font-dm-serif-text-regular">Kontak</h2>
            <div class="row py-3 py-lg-5 d-flex justify-content-center align-items-center">
                <div class="col-md-4 my-3 my-lg-5">
                    <img src="/images/keppin.png" alt="KEPPIN Logo" style="max-width: 215px;">
                </div>
                <div class="col-md-6 my-5 text-start">
                    <h2 class="font-dm-serif-text-regular">KEPPIN</h2>
                    <h5 class="font-dm-serif-text-regular" style="font-size: 26px;">(Komite Etik Penelitian dan Pelayanan Indonesia)</h5>
                    <br>
                    <p class="font-noto-sans-regular" style="font-size: 18px;">Sekretariat: Jalan Salemba Raya 5-5A, Menara Salemba Lt-7, 27, Jakarta Pusat, Indonesia
                        0819-707-174 - 0813-9891-1956
                        keppin.pusat@gmail.com</p>
                </div>
            </div>
            <div class="my-5 rounded-5 shadow-lg">
                <p class="mb-0 p-3 font-noto-sans-bold" style="font-size: 20px;">Dikembangkan oleh dinustek dan KEPPIN 2025</p>
            </div>
        </div>
    </footer>
</template>
