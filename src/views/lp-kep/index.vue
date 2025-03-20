<script lang="js" setup>
import DigiFooter from '@/components/DigiFooter.vue';
import DigiNavbar from '@/components/DigiNavbar.vue';
</script>

<template>
    
    <!-- NAVIGATION BAR -->

    <header>
        <DigiNavbar :fixed-top="true"/>
    </header>

    <main>

        <!-- HERO SECTION -->

        <section id="#hero" class="py-5 digi-gradient-bg">
            <div class="container py-4 mt-0">
                <div class="row pt-2 justify-content-center align-items-center">
                    <div class="col-lg-5 px-4 px-lg-0 order-2 order-lg-1">
                        <h2 class="digi-h2 font-dm-serif-text-regular mt-3">
                            Mempermudah Proses Telaah Etik
                        </h2>
                        <p class="digi-p3 mt-5 font-noto-sans-regular">
                            Jadikan proses telaah usulan protokol etik lebih terstruktur, mudah, cepat, dan terpantau.
                        </p>

                        <div class="my-5 d-grid d-md-flex d-lg-flex">
                            <a class="py-3 px-4 m-2 mx-lg-1 btn btn-sm rounded-5 text-decoration-none text-white shadow-lg digi-bg-ligra-green font-noto-sans-bold"
                                href="#">Daftarkan KEP
                            </a>
                            <a class="py-3 px-4 m-2 mx-lg-1 btn btn-sm rounded-5 text-decoration-none btn-light text-success shadow-lg font-noto-sans-bold"
                                href="#">Login sebagai KEP/Penelaah
                            </a>
                        </div>

                    </div>
                    <div class="col-lg-7 order-1 order-lg-2">
                        <img src="/images/dashboard-kep.png" alt="Dashboard kep" class="img-fluid mt-5" />
                    </div>
                </div>
            </div>
        </section>
            
        <!-- CAROUSEL SECTION -->

        <section class="py-5">
            <div class="container-fluid text-center">
                <div id="digiCarousel" class="carousel slide" data-bs-ride="carousel" data-bs-interval="3000"
                    data-bs-wrap="true">

                    <div class="carousel-inner" role="listbox">

                        <div class="carousel-item active">
                            <div class="row row-cols-2 row-cols-lg-6 g-3 gap-0 gap-lg-5 justify-content-center">
                                <div class="col">
                                    <img class="kep-card-logo border-0" src="/images/kep-terdaftar/dr-soedono.png"
                                        alt="">
                                    <p class="font-noto-sans-bold my-2">RSUD dr. Soedono Madiun</p>
                                </div>
                                <div class="col">
                                    <img class="kep-card-logo border-0" src="/images/kep-terdaftar/satya.png" alt="">
                                    <p class="font-noto-sans-bold my-2">Universitas Ichsan Satya Tangerang Selatan</p>
                                </div>
                                <div class="col">
                                    <img class="kep-card-logo border-0" src="/images/kep-terdaftar/as-syafiah.png"
                                        alt="">
                                    <p class="font-noto-sans-bold my-2">Universitas Islam As-Syafiiyah</p>
                                </div>
                                <div class="col">
                                    <img class="kep-card-logo border-0" src="/images/kep-terdaftar/unida-gontor.png"
                                        alt="">
                                    <p class="font-noto-sans-bold my-2">Universitas Darussalam Gontor</p>
                                </div>
                                <div class="col">
                                    <img class="kep-card-logo border-0" src="/images/kep-terdaftar/stikes.png" alt="">
                                    <p class="font-noto-sans-bold my-2">STIKES RSPAD Gatot Subroto</p>
                                </div>
                            </div>
                        </div>

                        <div class="carousel-item">
                            <div class="row row-cols-2 row-cols-lg-6 g-3 gap-0 gap-lg-5 justify-content-center">
                                <div class="col">
                                    <img class="kep-card-logo border-0" src="/images/kep-terdaftar/rs-soeharto.png"
                                        alt="">
                                    <p class="font-noto-sans-bold my-2">Rumah Sakit Soeharto Heerdjan</p>
                                </div>
                                <div class="col">
                                    <img class="kep-card-logo border-0" src="/images/kep-terdaftar/widya.png" alt="">
                                    <p class="font-noto-sans-bold my-2">Universitas Widya Nusantara (UWN) Palu</p>
                                </div>
                                <div class="col">
                                    <img class="kep-card-logo border-0" src="/images/kep-terdaftar/upn-jatim.png"
                                        alt="">
                                    <p class="font-noto-sans-bold my-2">UPN Veteran Jawa Timur</p>
                                </div>
                                <div class="col">
                                    <img class="kep-card-logo border-0" src="/images/kep-terdaftar/unisbar.png" alt="">
                                    <p class="font-noto-sans-bold my-2">Universitas Sumatera Barat (Unisbar)</p>
                                </div>
                                <div class="col">
                                    <img class="kep-card-logo border-0" src="/images/kep-terdaftar/sayang-cianjur.png"
                                        alt="">
                                    <p class="font-noto-sans-bold my-2">RSUD SAYANG CIANJUR</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <button class="carousel-control-prev" type="button" data-bs-target="#digiCarousel"
                        data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true">a</span>
                        <span class="visually-hidden">Previous</span>
                    </button>

                    <button class="carousel-control-next" type="button" data-bs-target="#digiCarousel"
                        data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true">a</span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>

            </div>
        </section>

        <!-- FITUR UNGGULAN SECTION -->

        <section id="fitur" class="py-5">
            <div class="container text-center">

                <h2 class="digi-h3 font-dm-serif-text-regular my-3 my-lg-5">
                    Fitur Unggulan
                </h2>

                <div class="row row-cols-1 row-cols-lg-2">
                    <div class="col p-3 p-lg-2 d-flex">

                        <div
                            class="border-2 py-3 px-4 my-3 my-lg-0 rounded-5 digi-bg-color-green-subtle digi-border-color-green">
                            <img class="img-thumbnail p-0 border-0" src="/images/1x/fu-ijo.png" alt="">
                            <div class="text-start">
                                <h4 class="digi-h4 font-dm-serif-text-regular digi-text-color-green">Alur telaah
                                    terstandar KEPPIN</h4>
                                <p class="digi-p3 font-noto-sans-bold">Jadikan proses telaah protokol etik lebih
                                    terstruktur, mudah, cepat, dan terpantau.</p>
                            </div>
                        </div>

                    </div>
                    <div class="col p-3 p-lg-2 d-flex">

                        <div
                            class="border-2 py-3 px-4 my-3 my-lg-0 rounded-5 digi-bg-color-blue-subtle digi-border-color-blue">
                            <img class="img-thumbnail p-0 border-0" src="/images/1x/fu-biru.png" alt="">
                            <div class="text-start">
                                <h4 class="digi-h4 font-dm-serif-text-regular digi-text-color-blue">Penugasan Tim
                                    Penelaah</h4>
                                <p class="digi-p3 font-noto-sans-bold">Penunjukkan tim penelaah melalui digiTEPP, untuk
                                    setiap usulan yang masuk.</p>
                            </div>
                        </div>

                    </div>
                    <div class="col p-3 p-lg-2 d-flex">

                        <div
                            class="border-2 py-3 px-4 my-3 my-lg-0 rounded-5 digi-bg-color-orange-subtle digi-border-color-orange">
                            <img class="img-thumbnail p-0 border-0" src="/images/1x/fu-kuning.png" alt="">
                            <div class="text-start">
                                <h4 class="digi-h4 font-dm-serif-text-regular digi-text-color-orange">Penerbitan Surat
                                    Layak Etik</h4>
                                <p class="digi-p3 font-noto-sans-bold">Surat layak etik dapat diterbitkan otomatis
                                    melalui digiTEPP, jika usulan dinilai lolos uji etik.</p>
                            </div>
                        </div>

                    </div>
                    <div class="col p-3 p-lg-2 d-flex">

                        <div
                            class="border-2 py-3 px-4 my-3 my-lg-0 rounded-5 digi-bg-color-red-subtle digi-border-color-red">
                            <img class="img-thumbnail p-0 border-0" src="/images/1x/fu-merah.png" alt="">
                            <div class="text-start">
                                <h4 class="digi-h4 font-dm-serif-text-regular digi-text-color-red">Setting Biaya Usulan
                                    Sendiri</h4>
                                <p class="digi-p3 font-noto-sans-bold">Komite Etik dapat menentukan biaya usulan sesuai
                                    dengan kebijakan masing-masing KEP</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>

        <!-- FITUR LAINNYA SECTION -->

        <section class="py-5">
            <div class="container text-center">

                <h2 class="digi-h3 font-dm-serif-text-regular my-3 my-lg-5">
                    Fitur Lainnya
                </h2>

                <div class="row row-cols-1 row-cols-md-2 row-cols-lg-5">
                    <div class="col d-flex">

                        <div
                            class="border-2 py-3 px-3 my-3 my-lg-0 rounded-5 digi-bg-color-green-subtle digi-border-color-green">
                            <img class="img-thumbnail bg-transparent p-0 border-0 mb-3"
                                src="/images/1x/business (1) 1.png" alt="Placeholder">
                            <div class="text-start">
                                <h4 class="font-noto-sans-bold digi-text-color-green">Pengelolaan Anggota KEP</h4>
                                <p class="font-noto-sans-regular">Jadikan proses telaah protokol etik lebih terstruktur,
                                    mudah, cepat, dan terpantau.</p>
                            </div>
                        </div>

                    </div>
                    <div class="col d-flex">

                        <div
                            class="border-2 py-3 px-3 my-3 my-lg-0 rounded-5 digi-bg-color-green-subtle digi-border-color-green">
                            <img class="img-thumbnail bg-transparent p-0 border-0 mb-3"
                                src="/images/1x/pie-chart (1) 1.png" alt="Placeholder">
                            <div class="text-start">
                                <h4 class="font-noto-sans-bold digi-text-color-green">Statistik dan Rekap</h4>
                                <p class="font-noto-sans-regular">Jadikan proses telaah protokol etik lebih terstruktur,
                                    mudah, cepat, dan terpantau.</p>
                            </div>
                        </div>

                    </div>
                    <div class="col d-flex">

                        <div
                            class="border-2 py-3 px-3 my-3 my-lg-0 rounded-5 digi-bg-color-green-subtle digi-border-color-green">
                            <img class="img-thumbnail bg-transparent p-0 border-0 mb-3"
                                src="/images/1x/process (1) 1.png" alt="Placeholder">
                            <div class="text-start">
                                <h4 class="font-noto-sans-bold digi-text-color-green">Pantau proses telaah</h4>
                                <p class="font-noto-sans-regular">Jadikan proses telaah protokol etik lebih terstruktur,
                                    mudah, cepat, dan terpantau.</p>
                            </div>
                        </div>

                    </div>
                    <div class="col d-flex">

                        <div
                            class="border-2 py-3 px-3 my-3 my-lg-0 rounded-5 digi-bg-color-green-subtle digi-border-color-green">
                            <img class="img-thumbnail bg-transparent p-0 border-0 mb-3"
                                src="/images/1x/online-banking (1) 1.png" alt="Placeholder">
                            <div class="text-start">
                                <h4 class="font-noto-sans-bold digi-text-color-green">Pemantauan transaksi</h4>
                                <p class="font-noto-sans-regular">Jadikan proses telaah protokol etik lebih terstruktur,
                                    mudah, cepat, dan terpantau.</p>
                            </div>
                        </div>

                    </div>
                    <div class="col d-flex">

                        <div
                            class="border-2 py-3 px-3 my-3 my-lg-0 rounded-5 digi-bg-color-green-subtle digi-border-color-green">
                            <img class="img-thumbnail bg-transparent p-0 border-0 mb-3"
                                src="/images/1x/technique (1) 1.png" alt="Placeholder">
                            <div class="text-start">
                                <h4 class="font-noto-sans-bold digi-text-color-green">Dukungan teknis</h4>
                                <p class="font-noto-sans-regular">Jadikan proses telaah protokol etik lebih terstruktur,
                                    mudah, cepat, dan terpantau.</p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>

        <!-- PROSES REGIS SECTION -->

        <section class="py-5">
            <div class="container text-center">

                <h3 class="my-3 my-lg-5 digi-h3 font-dm-serif-text-regular">Proses Registerasi</h3>

                <div class="row row-cols-1 row-cols-lg-2">

                    <div class="col-lg-4 p-lg-5">
                        <div id="phoneCarousel" class="carousel slide carousel-fade text-center" data-bs-ride="false">
                            <div
                                class="carousel-inner digi-carousel-inner-lg digi-carousel-inner-md digi-carousel-inner-sm">
                                <div class="carousel-item digi-carousel-item active">
                                    <img src="/images/1x/phone-1.png" class="w-75" alt="Screen 1">
                                </div>
                                <div class="carousel-item digi-carousel-item">
                                    <img src="/images/1x/phone-2.png" class="w-75" alt="Screen 2">
                                </div>
                                <div class="carousel-item digi-carousel-item">
                                    <img src="/images/1x/phone-3.png" class="w-75" alt="Screen 3">
                                </div>
                                <div class="carousel-item digi-carousel-item">
                                    <img src="/images/1x/phone-4.png" class="w-75" alt="Screen 4">
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-8 m-3 m-lg-0 p-3">
                        <div class="row">

                            <!-- Blue - Inactive -->
                            <button class="btn my-2 p-3 rounded-4" data-bs-target="#phoneCarousel" data-bs-slide-to="0"
                                aria-label="Slide 1" digi-data-color="blue">
                                <div class="row row-cols-1 row-cols-lg-2">
                                    <div class="col-5 col-lg-2 align-content-center text-start text-lg-center">
                                        <img class="img-fluid" src="/images/svg/phone-nav1.svg" alt="">
                                    </div>
                                    <div class="col-12 col-lg-10 text-start">
                                        <p class="font-noto-sans-regular digi-p2 digi-text-color-blue">Mengisi form
                                            registrasi dan validasi email</p>
                                        <p class="font-noto-sans-regular digi-p3">
                                            Registrasi dengan mengisi data, logo dan SK KEP Anda. Dan lakukan validasi
                                            email.
                                        </p>
                                    </div>
                                </div>
                            </button>

                            <!-- Green - Inactive -->
                            <button class="btn my-2 p-3 rounded-4" data-bs-target="#phoneCarousel" data-bs-slide-to="1"
                                aria-label="Slide 1" digi-data-color="green">
                                <div class="row row-cols-1 row-cols-lg-2">
                                    <div class="col-5 col-lg-2 align-content-center text-start text-lg-center">
                                        <img class="img-fluid" src="/images/svg/phone-nav2.svg" alt="">
                                    </div>
                                    <div class="col-12 col-lg-10 text-start">
                                        <p class="font-noto-sans-regular digi-p2 digi-text-color-green">Input Data
                                            Anggota</p>
                                        <p class="font-noto-sans-regular digi-p3">
                                            Kelola data anggota KEP Anda yang sudah tersertifikasi EDL atau GCP sesuai
                                            dengan SK,
                                            yang nantinya bertugas sebagai penelaah.
                                        </p>
                                    </div>
                                </div>
                            </button>

                            <!-- Orange/yellow - Inactive -->
                            <button class="btn my-2 p-3 rounded-4" data-bs-target="#phoneCarousel" data-bs-slide-to="2"
                                aria-label="Slide 3" digi-data-color="orange">
                                <div class="row row-cols-1 row-cols-lg-2">
                                    <div class="col-5 col-lg-2 align-content-center text-start text-lg-center">
                                        <img class="img-fluid" src="/images/svg/phone-nav3.svg" alt="">
                                    </div>
                                    <div class="col-12 col-lg-10 text-start">
                                        <p class="font-noto-sans-regular digi-p2 digi-text-color-orange">Menentukan
                                            Biaya Usulan</p>
                                        <p class="font-noto-sans-regular digi-p3">
                                            KEP dapat menentukan besaran nominal dana telaah secara mandiri,
                                            sesuai kategori yang telah disediakan.
                                        </p>
                                    </div>
                                </div>
                            </button>

                            <!-- Red - Inactive -->
                            <button class="btn my-2 p-3 rounded-4" data-bs-target="#phoneCarousel" data-bs-slide-to="3"
                                aria-label="Slide 4" digi-data-color="red">
                                <div class="row row-cols-1 row-cols-lg-2">
                                    <div class="col-5 col-lg-2 align-content-center text-start text-lg-center">
                                        <img class="img-fluid" src="/images/svg/phone-nav4.svg" alt="">
                                    </div>
                                    <div class="col-12 col-lg-10 text-start">
                                        <p class="font-noto-sans-regular digi-p2 digi-text-color-red">Menentukan Biaya
                                            Usulan</p>
                                        <p class="font-noto-sans-regular digi-p3">
                                            KEP dapat menentukan besaran nominal dana telaah secara mandiri,
                                            sesuai kategori yang telah disediakan.
                                        </p>
                                    </div>
                                </div>
                            </button>

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

    </main>

    <footer>
        <DigiFooter/>
    </footer>

</template>
