<script setup>
    import DigiFooter from '@/components/DigiFooter.vue';
    import DigiNavbar from '@/components/DigiNavbar.vue';
</script>

<template>
    
    <header>
        <DigiNavbar/>
    </header>

    <main>

        <!-- HERO SECTION -->

        <section class="py-5 digi-gradient-bg">
            <div class="container py-4 mt-0">
                <div class="row pt-2 justify-content-center align-items-center">
                    <div class="col-lg-5 px-4 px-lg-0 order-2 order-lg-1">
                        <h2 class="font-dm-serif-text-regular mt-3 digi-h2">
                            Digitalisasi Telaah Etik Penelitian dan Pelayanan
                        </h2>
                        <p class="mt-5 digi-p3 font-noto-sans-regular">
                            digiTEPP dikembangkan dengan tujuan untuk mempermudah,
                            mempercepat & mewakili seluruh proses pengajuan protokol
                            usulan surat layak etik yang diusulkan oleh peneliti
                        </p>
                        <div class="my-3 my-lg-5 d-grid d-md-flex d-lg-flex">
                            <a class="px-5 mt-5 py-3 font-noto-sans-regular
                            btn btn-lg 
                            text-white 
                            shadow-sm 
                            rounded-5 
                            digi-bg-ligra-orange
                            digi-p2" href="#" role="button">Pelajari lebih lanjut</a>
                        </div>
                    </div>
                    <div class="col-lg-7 order-1 order-lg-2">
                        <img src="/images/dashboard.png" alt="Dashboard pengusul mobile view" class="img-fluid mt-5" />
                    </div>
                </div>
            </div>
        </section>

        <!-- FEATURE SECTION -->

        <section id="feature" class="py-5 shadow-sm digi-feature-bg">
            <div class="container text-center">
                <div class="row row-cols-2 row-cols-lg-4 row-gap-5 justify-content-center">
                    <div class="col col-lg-3 d-flex d-lg-grid">
                        <div class="row row-cols-1 row-cols-lg-2 text-center text-lg-start">
                            <div class="col col-lg-4">
                                <img src="/images/svg/meeting.svg" alt="KEP Terdaftar">
                            </div>
                            <div class="col col-lg-8">
                                <p class="font-noto-sans-bold mb-0 mt-sm-4 fs-4">50+ KEP</p>
                                <p class="font-noto-sans-bold digi-p2-bold mb-0">KEP Terdaftar</p>
                            </div>
                        </div>
                    </div>
                    <div class="col col-lg-3 d-flex d-lg-grid">
                        <div class="row row-cols-1 row-cols-lg-2 text-center text-lg-start">
                            <div class="col col-lg-4">
                                <img src="/images/svg/research.svg" alt="Pengusul">
                            </div>
                            <div class="col col-lg-8">
                                <p class="font-noto-sans-bold mb-0 mt-sm-4 fs-4">5000+</p>
                                <p class="font-noto-sans-bold digi-p2-bold mb-0">Usulan Ditelaah</p>
                            </div>
                        </div>
                    </div>
                    <div class="col col-lg-3 d-flex d-lg-grid">
                        <div class="row row-cols-1 row-cols-lg-2 text-center text-lg-start">
                            <div class="col col-lg-4">
                                <img src="/images/svg/blogger.svg" alt="Pengusul">
                            </div>
                            <div class="col col-lg-8">
                                <p class="font-noto-sans-bold mb-0 mt-sm-4 fs-4">4000+</p>
                                <p class="font-noto-sans-bold digi-p2-bold mb-0">Pengusul</p>
                            </div>
                        </div>
                    </div>
                    <div class="col col-lg-3 d-flex d-lg-grid">
                        <div class="row row-cols-1 row-cols-lg-2 text-center text-lg-start">
                            <div class="col col-lg-4">
                                <img src="/images/svg/stamp.svg" alt="Lolos SLE">
                            </div>
                            <div class="col col-lg-8">
                                <p class="font-noto-sans-bold mb-0 mt-sm-4 fs-4">3000+</p>
                                <p class="font-noto-sans-bold digi-p2-bold mb-0">Lolos SLE</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- JUMBOTRON SECTION -->

        <section class="jumbotron py-5" id="jumbotron">
            <div class="container">

                <!-- JUMBOTRON 1 -->

                <div class="row mb-5 border rounded-3 border-success digi-jumbotron-1-bg">
                    <div class="col order-2 order-lg-1">
                        <div class="p-5">
                            <p class="font-noto-sans">KOMITE ETIK PENELITIAN</p>
                            <h3 class="font-dm-serif-text-regular text-success">Lebih mudah melakukan telaah etik penelitian</h3>
                            <p class="font-noto-sans-bold">Jadikan proses telaah protokol etik lebih terstruktur, mudah,
                                cepat, dan terpantau.</p>
                            <div class="row">
                                <ul class="col-sm">
                                    <li>Pengelolaan anggota KEP</li>
                                    <li>Penugasan tim Penelaah</li>
                                    <li>Alur telaah terstandar KEPPIN</li>
                                    <li>Statistik usulan & rekap telaah</li>
                                    <li>Pemantauan proses telaah</li>
                                </ul>
                                <ul class="col-sm">
                                    <li>Penerbitan Surat Layak Etik</li>
                                    <li>Setting biaya usulan</li>
                                    <li>Pemantauan transaksi</li>
                                    <li>Dukungan Teknis</li>
                                    <li>Selengkapnya -></li>
                                </ul>
                            </div>

                            <div class="my-3 my-lg-5 d-grid d-md-flex d-lg-flex gap-0 gap-md-3 gap-lg-3">
                                <a class="p-2 px-4 my-2 btn rounded-5 text-white shadow-lg digi-bg-ligra-green"
                                    href="#">Login Sebagai KEP/Penelaah</a>
                                <a class="p-2 px-4 my-2 btn rounded-5 btn-light text-success shadow-lg"
                                    href="#">Registerasi Sebagai KEP</a>
                            </div>

                        </div>
                    </div>
                    <div class="col-lg-5 p-3 p-lg-5 order-1 order-lg-2">
                        <img class="img-fluid" src="/images/2x/img-kep.png" srcset="/images/1x/img-kep.png" alt="KEP" />
                    </div>
                </div>

                <!--JUMBOTRON 2-->

                <div class="row mt-5 border rounded-3 border-danger digi-jumbotron-2-bg">
                    <div class="col order-2 order-lg-1">
                        <div class="p-5">
                            <p class="">PENGUSUL / PENELITI / Mahasiswa</p>
                            <h3 class="font-dm-serif-text-regular text-danger">Pengajuan protokol etik penelitian lebih
                                mudah</h3>
                            <p class="font-noto-sans-bold">Mengajukan protokol etik lebih mudah, terstruktur, terpantau,
                                dan berstandar internasional</p>
                            <div class="row">
                                <ul class="col-sm">
                                    <li>Form usulan sesuai jenis penelitian</li>
                                    <li>Form Protokol</li>
                                    <li>Checklist 7 Standar 25 pedoman</li>
                                    <li>Standar WHO</li>
                                    <li>Memantau status proses telaah</li>
                                </ul>
                                <ul class="col-sm">
                                    <li>Revisi usulan</li>
                                    <li>Unduh Surat Layak Etik</li>
                                    <li>Notifikasi Email</li>
                                    <li>Submit usulan ke 50+ KEP</li>
                                </ul>
                            </div>

                            <div class="my-3 my-lg-5 d-grid d-md-flex d-lg-flex gap-0 gap-md-3 gap-lg-3">
                                <a class="p-2 px-4 my-2 btn rounded-5 text-white shadow-lg digi-bg-ligra-red"
                                    href="#">Login Sebagai Pengusul</a>
                                <a class="p-2 px-4 my-2 btn rounded-5 btn-light text-danger shadow-lg"
                                    href="#">Registerasi Sebagai Pengusul</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-5 p-3 p-lg-5 order-1 order-lg-2">
                        <img class="img-fluid" src="/images/2x/img-pengusul.png" srcset="/images/1x/img-pengusul.png"
                            alt="Pengusul">
                    </div>
                </div>
            </div>
        </section>

        <!-- KEP TERDAFTAR SECTION -->

        <section class="py-5 bg-primary-subtle text-center">
            <div class="container-fluid">
                <h2 class="font-dm-serif-text-regular">KEP Terdaftar</h2>
                <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 p-3 p-lg-5">

                    <!-- CARD : RSUD Dr. Soedono -->
                    <div class="col d-flex">
                        <div
                            class="card w-100 mb-4 border-3 border-primary-subtle rounded-4 d-flex justify-content-center">
                            <div class="row m-3 g-0 align-items-center">
                                <div class="col-md-4">
                                    <img src="/images/kep-terdaftar/dr-soedono.png" class="border-0 kep-card-logo"
                                        alt="RSUD dr. Soedono Madiun" />
                                </div>
                                <div class="col-md-8 text-start">
                                    <div class="card-body">
                                        <router-link
                                            class="card-title font-noto-sans-bold digi-kep-card-font-bold text-decoration-none"
                                            :to="{ name: 'detailKep' }">KEPK RSUD SAYANG CIANJUR
                                        </router-link>
                                        <p class="card-text font-noto-sans-regular digi-kep-card-font-regular">RSUD
                                            SAYANG
                                            CIANJUR
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- CARD : Universitas Satya -->
                    <div class="col d-flex">
                        <div
                            class="card w-100 mb-4 border-3 border-primary-subtle rounded-4 d-flex justify-content-center">
                            <div class="row m-3 g-0 align-items-center">
                                <div class="col-md-4">
                                    <img src="/images/kep-terdaftar/satya.png" class=" border-0 kep-card-logo"
                                        alt="RSUD dr. Soedono Madiun" />
                                </div>
                                <div class="col-md-8 text-start">
                                    <div class="card-body">
                                        <router-link
                                            class="card-title font-noto-sans-bold digi-kep-card-font-bold text-decoration-none"
                                            :to="{ name: 'detailKep' }">KOMITE ETIK PENELITIAN UNIVERSITAS ICHSAN SATYA
                                        </router-link>
                                        <p class="card-text font-noto-sans-regular digi-kep-card-font-regular">
                                            Universitas Ichsan Satya Tangerang Selatan
                                        </p>
                                        <span
                                            class="badge text-white font-noto-sans-regular text-center digi-kep-card-sle digi-bg-color-orange rounded-5">
                                            Belum bisa menerbitkan SLE
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- CARD : Universitas Islam -->
                    <div class="col d-flex">
                        <div
                            class="card w-100 mb-4 border-3 border-primary-subtle rounded-4 d-flex justify-content-center">
                            <div class="row m-3 g-0 align-items-center">
                                <div class="col-md-4">
                                    <img src="/images/kep-terdaftar/as-syafiah.png" class="border-0 kep-card-logo"
                                        alt="RSUD dr. Soedono Madiun" />
                                </div>
                                <div class="col-md-8 text-start">
                                    <div class="card-body">
                                        <router-link
                                            class="card-title font-noto-sans-bold digi-kep-card-font-bold text-decoration-none"
                                            :to="{ name: 'detailKep' }">KEP FIKes Universitas Islam As-Syafi'iyah
                                        </router-link>
                                        <p class="card-text font-noto-sans-regular digi-kep-card-font-regular">
                                            Universitas Islam As-Syafiiyah
                                        </p>
                                        <span
                                            class="badge text-white font-noto-sans-regular text-center digi-kep-card-sle digi-bg-color-orange rounded-5">
                                            Belum bisa menerbitkan SLE
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- CARD : RS Siti Hajar -->
                    <div class="col d-flex">
                        <div
                            class="card w-100 mb-4 border-3 border-primary-subtle rounded-4 d-flex justify-content-center">
                            <div class="row m-3 g-0 align-items-center">
                                <div class="col-md-4">
                                    <img src="/images/kep-terdaftar/siti-hajar.png" class="border-0 kep-card-logo"
                                        alt="KEP RSI Siti Hajar Sidoarjo" />
                                </div>
                                <div class="col-md-8 text-start">
                                    <div class="card-body">
                                        <router-link
                                            class="card-title font-noto-sans-bold digi-kep-card-font-bold text-decoration-none"
                                            :to="{ name: 'detailKep' }">KEP RSI Siti Hajar Sidoarjo
                                        </router-link>
                                        <p class="card-text font-noto-sans-regular digi-kep-card-font-regular">
                                            RSI Siti Hajar Sidoarjo
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- CARD : Universitas Darussalam Gontor -->
                    <div class="col d-flex">
                        <div
                            class="card w-100 mb-4 border-3 border-primary-subtle rounded-4 d-flex justify-content-center">
                            <div class="row m-3 g-0 align-items-center">
                                <div class="col-md-4">
                                    <img src="/images/kep-terdaftar/unida-gontor.png" class="border-0 kep-card-logo"
                                        alt="Universitas Darussalam Gontor" />
                                </div>
                                <div class="col-md-8 text-start">
                                    <div class="card-body">
                                        <router-link
                                            class="card-title font-noto-sans-bold digi-kep-card-font-bold text-decoration-none"
                                            :to="{ name: 'detailKep' }">FK Universitas Darussalam Gontor
                                        </router-link>
                                        <p class="card-text font-noto-sans-regular digi-kep-card-font-regular">
                                            Universitas Darussalam Gontor
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- CARD : STIKES RSPAD -->
                    <div class="col d-flex">
                        <div
                            class="card w-100 mb-4 border-3 border-primary-subtle rounded-4 d-flex justify-content-center">
                            <div class="row m-3 g-0 align-items-center">
                                <div class="col-md-4">
                                    <img src="/images/kep-terdaftar/stikes.png" class=" border-0 kep-card-logo"
                                        alt="STIKES RSPAD Gatot Soebroto" />
                                </div>
                                <div class="col-md-8 text-start">
                                    <div class="card-body">
                                        <router-link
                                            class="card-title font-noto-sans-bold digi-kep-card-font-bold text-decoration-none"
                                            :to="{ name: 'detailKep' }">STIKes RSPAD Gatot Soebroto
                                        </router-link>
                                        <p class="card-text font-noto-sans-regular digi-kep-card-font-regular">
                                            STIKES RSPAD Gatot Subroto
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- CARD : RS Soeharto -->
                    <div class="col d-flex">
                        <div
                            class="card w-100 mb-4 border-3 border-primary-subtle rounded-4 d-flex justify-content-center">
                            <div class="row m-3 g-0 align-items-center">
                                <div class="col-md-4">
                                    <img src="/images/kep-terdaftar/rs-soeharto.png" class="border-0 kep-card-logo"
                                        alt="RS Soeharto" />
                                </div>
                                <div class="col-md-8 text-start">
                                    <div class="card-body">
                                        <router-link
                                            class="card-title font-noto-sans-bold digi-kep-card-font-bold text-decoration-none"
                                            :to="{ name: 'detailKep' }">CRU RS Soeharto Heerdjan
                                        </router-link>
                                        <p class="card-text font-noto-sans-regular digi-kep-card-font-regular">
                                            Rumah Sakit Soeharto Heerdjan
                                        </p>
                                        <span
                                            class="badge text-white font-noto-sans-regular text-center digi-kep-card-sle digi-bg-color-orange rounded-5">
                                            Belum bisa menerbitkan SLE
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- CARD : UWN Palu -->
                    <div class="col d-flex">
                        <div
                            class="card w-100 mb-4 border-3 border-primary-subtle rounded-4 d-flex justify-content-center">
                            <div class="row m-3 g-0 align-items-center">
                                <div class="col-md-4">
                                    <img src="/images/kep-terdaftar/widya.png" class=" border-0 kep-card-logo"
                                        alt="KEP Universitas Widya Nusantara" />
                                </div>
                                <div class="col-md-8 text-start">
                                    <div class="card-body">
                                        <router-link
                                            class="card-title font-noto-sans-bold digi-kep-card-font-bold text-decoration-none"
                                            :to="{ name: 'detailKep' }">KEP Universitas Widya Nusantara
                                        </router-link>
                                        <p class="card-text font-noto-sans-regular digi-kep-card-font-regular">
                                            Universitas Widya Nusantara (UWN) Palu
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- CARD : UPN Veteran Jatim -->
                    <div class="col d-flex">
                        <div
                            class="card w-100 mb-4 border-3 border-primary-subtle rounded-4 d-flex justify-content-center">
                            <div class="row m-3 g-0 align-items-center">
                                <div class="col-md-4">
                                    <img src="/images/kep-terdaftar/upn-jatim.png" class="border-0 kep-card-logo"
                                        alt="UPN Veteran Jatim" />
                                </div>
                                <div class="col-md-8 text-start">
                                    <div class="card-body">
                                        <router-link
                                            class="card-title font-noto-sans-bold digi-kep-card-font-bold text-decoration-none"
                                            :to="{ name: 'detailKep' }">UPN Veteran Jawa Timur
                                        </router-link>
                                        <p class="card-text font-noto-sans-regular digi-kep-card-font-regular">
                                            UPN Veteran Jawa Timur
                                        </p>
                                        <span
                                            class="badge text-white font-noto-sans-regular text-center digi-kep-card-sle digi-bg-color-orange rounded-5">
                                            Belum bisa menerbitkan SLE
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- CARD : UNISBAR -->
                    <div class="col d-flex">
                        <div
                            class="card w-100 mb-4 border-3 border-primary-subtle rounded-4 d-flex justify-content-center">
                            <div class="row m-3 g-0 align-items-center">
                                <div class="col-md-4">
                                    <img src="/images/kep-terdaftar/unisbar.png" class=" border-0 kep-card-logo"
                                        alt="Komite Etik UNISBAR" />
                                </div>
                                <div class="col-md-8 text-start">
                                    <div class="card-body">
                                        <router-link
                                            class="card-title font-noto-sans-bold digi-kep-card-font-bold text-decoration-none"
                                            :to="{ name: 'detailKep' }">Komite Etik UNISBAR
                                        </router-link>
                                        <p class="card-text font-noto-sans-regular digi-kep-card-font-regular">
                                            Universitas Sumatera Barat (Unisbar)
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- CARD : RSUD SAYANG CIANJUR -->
                    <div class="col d-flex">
                        <div
                            class="card w-100 mb-4 border-3 border-primary-subtle rounded-4 d-flex justify-content-center">
                            <div class="row m-3 g-0 align-items-center">
                                <div class="col-md-4">
                                    <img src="/images/kep-terdaftar/sayang-cianjur.png" class="border-0 kep-card-logo"
                                        alt="RSUD Sayang Cianjur" />
                                </div>
                                <div class="col-md-8 text-start">
                                    <div class="card-body">
                                        <router-link
                                            class="card-title font-noto-sans-bold digi-kep-card-font-bold text-decoration-none"
                                            :to="{ name: 'detailKep' }">KEPK RSUD SAYANG CIANJUR
                                        </router-link>
                                        <p class="card-text font-noto-sans-regular digi-kep-card-font-regular">
                                            RSUD SAYANG CIANJUR
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- CARD : Lihat Semua -->
                    <div class="col d-flex">
                        <div
                            class="card w-100 mb-4 border-3 border-primary-subtle rounded-4 d-flex justify-content-center align-items-center  bg-primary-subtle">
                            <div class="row m-3 g-0 align-items-center">
                                <div class="col text-start">
                                    <div class="card-body  text-center font-dm-serif-text-regular">
                                        <router-link class="card-title m-0 digi-kep-card-link"
                                            :to="{ name: 'kepTerdaftar' }">Lihat Semua</router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- TESTIMONIAL SECTION -->

        <section class="py-5 digi-gradient-bg">
            <div class="container text-center">

                <h2 class="digi-h2 my-3 font-dm-serif-text-regular">Testimonial</h2>

                <div class="row row-cols-1 row-cols-lg-2 py-5 gy-5 mx-2 mx-lg-0">

                    <!--Testi 1-->

                    <div class="col d-flex">
                        <div class="p-5 rounded-4 text-bg-light shadow-lg d-grid">
                            <div class="row mb-5 text-start">
                                <p class="digi-p4 font-noto-sans-regular opacity-75">
                                    Selama 3 bulan menggunakan Digitepp, baik dari sisi mahasiswa maupun penelaah,
                                    kami merasa sangat terbantu dengan kemudahan yang diberikan,
                                    terutama dalam proses telaah etik protokol penelitian yang kini dapat dilakukan
                                    secara online dan paperless.
                                    Fitur notifikasi otomatis dan sistem yang efisien,
                                    seperti penggantian penelaah yang tidak aktif, sangat mempercepat dan memudahkan
                                    proses,
                                    sehingga menghemat waktu. Selain itu,
                                    dokumentasi yang tertata rapi di bank data Digitepp serta sistem transaksi cashless
                                    memberikan
                                    transparansi dan kenyamanan dalam setiap langkah.
                                </p>
                            </div>
                            <div class="row row-cols-2">
                                <div class="col-12 col-lg-8">
                                    <div class="row row-cols-1 row-cols-lg-2 text-center text-lg-start">
                                        <div class="col col-lg-2 d-flex justify-content-center align-items-center">
                                            <img src="/images/kep-terdaftar/kepk-fkm.png" alt="DR.Soedono"
                                                style="max-width: 50px; max-height: 50px;">
                                        </div>
                                        <div class="col col-lg-10">
                                            <p class="m-0 digi-p5 digi-text-color-blue font-noto-sans-regular">Grouse
                                                Oematan, S.KM.,M.PH</p>
                                            <p class="m-0 digi-p4 font-noto-sans-bold">KEPK FKM Universitas Nusa Cendana
                                                Kupang (Undana)</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-4 align-content-center d-none d-lg-block">
                                    <img class="position-absolute" src="/images/svg/quote.svg" alt="">
                                </div>
                            </div>
                        </div>
                    </div>

                    <!--Testi 2-->

                    <div class="col d-flex">
                        <div class="p-5 rounded-4 text-bg-light shadow-lg d-grid">
                            <div class="row mb-5 text-start">
                                <p class="digi-p4 font-noto-sans-regular opacity-75">
                                    Sejak menggunakan Digitepp, kami merasakan kemudahan dalam mengunggah protokol etik,
                                    efisiensi waktu, dan biaya yang sangat terjangkau.
                                    Platform ini tidak hanya menarik perhatian mahasiswa dari dua fakultas dengan
                                    berbagai program studi,
                                    tetapi juga memberikan tambahan pendapatan yang signifikan. Selain itu,
                                    fitur catatan telaah sangat membantu dalam proses evaluasi protokol,
                                    yang kini sudah mencapai lebih dari 400 protokol yang terdaftar.
                                </p>
                            </div>
                            <div class="row mt-5 row-cols-2">
                                <div class="col-12 col-lg-8">
                                    <div class="row row-cols-1 row-cols-lg-2 text-center text-lg-start">
                                        <div class="col col-lg-2 d-flex justify-content-center align-items-center">
                                            <img src="/images/kep-terdaftar/kep-ikest.png" alt="DR.Soedono"
                                                style="max-width: 50px; max-height: 50px;">
                                        </div>
                                        <div class="col col-lg-10">
                                            <p class="m-0 digi-p5 digi-text-color-blue font-noto-sans-regular">Dr.
                                                Suzanna, S.Kep., Ns., M.Kep.</p>
                                            <p class="m-0 digi-p4 font-noto-sans-bold">KEP IKesT Muhammadiyah Palembang
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-4 align-content-center d-none d-lg-block">
                                    <img class="position-absolute" src="/images/svg/quote.svg" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <router-link class="px-5 my-5 py-2 
                    btn btn-lg 
                    text-white 
                    shadow-sm 
                    rounded-5 
                    digi-bg-ligra-orange" 
                    :to="{ name: 'testimoni' }" role="button">Lihat Semua
                </router-link>
            </div>
        </section>

        <!-- BERITA SECTION -->

        <section class="py-5">
            <div class="container text-center">
                <div class="row my-5">
                    <h2 class="font-dm-serif-text-regular">Berita Terkini</h2>
                </div>
                <div class="row mx-3 mx-lg-0 row-cols-1 row-cols-lg-3">

                    <!-- Berita 1 -->
                    <div class="col p-3">
                        <div class="row my-3 border border-primary-subtle rounded-bottom-3 rounded-top-3">
                            <img src="/images/news/berita.png" alt="Berita Terkini" class="img-thumbnail">
                        </div>
                        <div class="row text-start">
                            <router-link class="font-noto-sans-regular digi-berita-title text-decoration-none"
                                :to="{name: 'detailBerita'}">
                                KEPPIN Selenggarakan Pelatihan Etik Dasar Lanjut, GCRP,
                                dan Pengenalan DigiTEPP secara Online dengan Peserta dari Berbagai Institusi
                            </router-link>
                            <p class="small text-secondary">Senin, 2 Desember 2024</p>
                        </div>
                    </div>
                    <!-- Berita 2 -->
                    <div class="col p-3">
                        <div class="row my-3 border border-primary-subtle rounded-bottom-3 rounded-top-3">
                            <img src="/images/news/berita.png" alt="Berita Terkini" class="img-thumbnail">
                        </div>
                        <div class="row text-start">
                            <router-link class="font-noto-sans-regular digi-berita-title text-decoration-none"
                                :to="{name: 'detailBerita'}">
                                KEPPIN Selenggarakan Pelatihan Etik Dasar Lanjut, GCRP,
                                dan Pengenalan DigiTEPP secara Online dengan Peserta dari Berbagai Institusi
                            </router-link>
                            <p class="small text-secondary">Senin, 2 Desember 2024</p>
                        </div>
                    </div>
                    <!-- Berita 3 -->
                    <div class="col p-3">
                        <div class="row my-3 border border-primary-subtle rounded-bottom-3 rounded-top-3">
                            <img src="/images/news/berita.png" alt="Berita Terkini" class="img-thumbnail">
                        </div>
                        <div class="row text-start">
                            <router-link class="font-noto-sans-regular digi-berita-title text-decoration-none"
                                :to="{name: 'detailBerita'}">
                                KEPPIN Selenggarakan Pelatihan Etik Dasar Lanjut, GCRP,
                                dan Pengenalan DigiTEPP secara Online dengan Peserta dari Berbagai Institusi
                            </router-link>
                            <p class="small text-secondary">Senin, 2 Desember 2024</p>
                        </div>
                    </div>
                </div>
                <router-link class="px-5 my-5 py-2 btn btn-lg text-white shadow-sm rounded-5 digi-bg-ligra-orange"
                    :to="{name: 'beritaTerkini'}" role="button">Lihat semua berita
                </router-link>
            </div>
        </section>
    </main>
    <footer>
        <DigiFooter/>
    </footer>
</template>
