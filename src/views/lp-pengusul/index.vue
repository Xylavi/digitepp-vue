<script setup>
import DigiFooter from '@/components/DigiFooter.vue';
import DigiNavbar from '@/components/DigiNavbar.vue';


</script>

<template>
    <header>
        <DigiNavbar :fixed-top="true"/>
    </header>

    <main>

        <!-- HERO SECTION -->

        <section id="hero" class="py-5 digi-gradient-bg">
            <div class="container py-4 mt-0">
                <div class="row pt-2 justify-content-center align-items-center">
                    <div class="col-lg-5 px-4 px-lg-0 order-2 order-lg-1">
                        <h2 class="digi-h2 font-dm-serif-text-regular mt-3">
                            Pengajuan Protokol Etik Penelitian Lebih Mudah
                        </h2>
                        <p class="digi-p3 mt-5 font-noto-sans-regular">
                            Mengajukan protokol etik lebih mudah, terstruktur, terpantau, dan berstandar internasional.
                        </p>

                        <div class="my-3 my-lg-5 d-grid d-md-flex d-lg-flex">

                            <a class="py-3 px-5 m-2 mx-lg-1 
                                    btn btn-sm 
                                    rounded-5 
                                    text-decoration-none 
                                    text-white 
                                    shadow-lg 
                                    digi-bg-ligra-red 
                                    font-noto-sans-bold 
                                    digi-p4-bold" href="#">Daftar sebagai Pengusul/Peneliti</a>

                            <a class="py-3 px-5 m-2 mx-lg-1 
                                    btn btn-sm 
                                    rounded-5 
                                    text-decoration-none 
                                    btn-light 
                                    digi-text-color-red 
                                    shadow-lg 
                                    font-noto-sans-bold 
                                    digi-p4-bold" href="#">Login</a>

                        </div>

                    </div>
                    <div class="col-lg-7 order-1 order-lg-2">
                        <img src="/images/dashboard-pengusul.png" alt="Dashboard kep" class="img-fluid mt-5" />
                    </div>
                </div>
            </div>
        </section>


        <!-- FEATURE SECTION -->


        <section id="feature" class="py-5 shadow-sm digi-feature-bg-2">
            <div class="container text-center">
                <div class="row row-cols-2 row-cols-lg-3 row-gap-5 justify-content-center">

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
                                <img src="/images/svg/blogger.svg" alt="Pengusul">
                            </div>
                            <div class="col col-lg-8">
                                <p class="font-noto-sans-bold mb-0 mt-sm-4 fs-4">4000+</p>
                                <p class="font-noto-sans-bold digi-p2-bold mb-0">Pengusul Memakai</p>
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
                                <p class="font-noto-sans-bold digi-p2-bold mb-0">Surat Layak Etik telah terbit</p>
                            </div>
                        </div>
                    </div>
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
                            class="border-2 py-3 px-4 my-3 my-lg-0 rounded-4 digi-bg-color-green-subtle digi-border-color-green">
                            <img class="img-thumbnail bg-transparent p-0 border-0" src="/images/1x/p2-ijo.png" alt="">
                            <div class="text-start">
                                <h4 class="digi-h4 font-dm-serif-text-regular digi-text-color-green">
                                    Form usulan protokol sesuai jenis penelitian
                                </h4>
                                <p class="digi-p3-bold font-noto-sans-bold">
                                    Jadikan proses telaah protokol etik lebih terstruktur, mudah, cepat, dan terpantau.
                                </p>
                            </div>
                        </div>

                    </div>
                    <div class="col p-3 p-lg-2 d-flex">

                        <div
                            class="border-2 py-3 px-4 my-3 my-lg-0 rounded-4 digi-bg-color-blue-subtle digi-border-color-blue">
                            <img class="img-thumbnail bg-transparent p-0 border-0" src="/images/1x/p3-biru.png" alt="">
                            <div class="text-start">
                                <h4 class="digi-h4 font-dm-serif-text-regular digi-text-color-blue">
                                    Checklist 7 Standar 25 Pedoman WHO
                                </h4>
                                <p class="digi-p3-bold font-noto-sans-bold">
                                    Penunjukkan tim penelaah melalui digiTEPP, untuk setiap usulan yang masuk.
                                </p>
                            </div>
                        </div>

                    </div>
                    <div class="col p-3 p-lg-2 d-flex">

                        <div
                            class="border-2 py-3 px-4 my-3 my-lg-0 rounded-4 digi-bg-color-orange-subtle digi-border-color-orange">
                            <img class="img-thumbnail bg-transparent p-0 border-0" src="/images/1x/p4-kuning.png"
                                alt="">
                            <div class="text-start">
                                <h4 class="digi-h4 font-dm-serif-text-regular digi-text-color-orange">
                                    Memantau proses telaah
                                </h4>
                                <p class="digi-p3-bold font-noto-sans-bold">
                                    Surat layak etik dapat diterbitkan otomatis
                                    melalui digiTEPP, jika usulan dinilai lolos uji etik.
                                </p>
                            </div>
                        </div>

                    </div>
                    <div class="col p-3 p-lg-2 d-flex">

                        <div
                            class="border-2 py-3 px-4 my-3 my-lg-0 rounded-4 digi-bg-color-red-subtle digi-border-color-red">
                            <img class="img-thumbnail bg-transparent p-0 border-0" src="/images/1x/p1-merah.png" alt="">
                            <div class="text-start">
                                <h4 class="digi-h4 font-dm-serif-text-regular digi-text-color-red">Submit ke 50+ KEP
                                </h4>
                                <p class="digi-p3-bold font-noto-sans-bold">Komite Etik dapat menentukan biaya usulan
                                    sesuai dengan kebijakan masing-masing KEP</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>


        <!-- GALLERY SECTION -->


        <section class="py-5">
            <div class="container text-center">

                <h3 class="digi-h3 my-3 font-dm-serif-text-regular">Untuk Siapa?</h3>
                <p class="digi-p1 font-noto-sans-regular">
                    digiTEPP dibuat untuk Anda yang sedang melakukan penelitian dan perlu kaji etik
                </p>

                <div class="row my-3 my-lg-5 py-3 py-lg-5 row-cols-1 row-cols-lg-3 g-3">
                    <div class="col px-4 px-lg-0">
                        <img class="img-thumbnail bg-transparent border-0" src="/images/webp/rectangle-49.webp" alt="">
                        <h5 class="digi-h5 my-3 my-lg-3 font-dm-serif-text-regular">Mahasiswa (D3, D4, S1, S2, S3)</h5>
                    </div>

                    <div class="col px-4 px-lg-0">
                        <img class="img-thumbnail bg-transparent border-0" src="/images/webp/rectangle-50.webp" alt="">
                        <h5 class="digi-h5 my-3 my-lg-3 font-dm-serif-text-regular">Dosen</h5>
                    </div>

                    <div class="col px-4 px-lg-0">
                        <img class="img-thumbnail bg-transparent border-0" src="/images/webp/rectangle-51.webp" alt="">
                        <h5 class="digi-h5 my-3 my-lg-3 font-dm-serif-text-regular">Peneliti Hibah</h5>
                    </div>
                </div>
            </div>
        </section>


        <!-- PROSES REGIS SECTION -->


        <section class="py-5">
            <div class="container text-center">

                <h3 class="digi-h3 my-3 font-dm-serif-text-regular">Proses Registerasi</h3>

                <div class="row my-3 my-lg-5 py-3 py-lg-5 row-cols-1 row-cols-lg-2 g-5 g-lg-0">

                    <div class="col">
                        <img class="img-thumbnail bg-transparent border-0" src="/images/webp/mac-book-pro-16-inch.webp"
                            alt="">
                    </div>

                    <div class="col text-center text-lg-start">
                        <p class="digi-p1 font-noto-sans-regular">
                            Cukup mengisi form registrasi kemudian Anda dapat langsung mengajukan protokol etik
                            penelitian.
                        </p>

                        <a class="py-3 px-5 my-3 my-lg-5
                                btn btn-sm 
                                rounded-5 
                                text-decoration-none 
                                btn-light 
                                digi-text-color-red 
                                shadow-lg 
                                font-noto-sans-bold 
                                digi-p4-bold" href="#">Registrasi Sebagai Pengusul
                        </a>
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
                    digi-bg-ligra-orange" :to="{ name: 'testimoni' }" role="button">Lihat Semua
                </router-link>
            </div>
        </section>


        <!-- FAQ SECTION -->


        <section class="py-5">
            <div class="container text-center">

                <h3 class="digi-h3 font-dm-serif-text-regular my-5">FAQ</h3>

                <div class="accordion accordion-flush" id="accordionFlushExample">

                    <!-- Accordion 1 -->
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingOne">
                            <button
                                class="accordion-button collapsed digi-p4-bold font-noto-sans-regular digi-text-color-red"
                                type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne"
                                aria-expanded="true" aria-controls="flush-collapseOne">
                                Siapa itu pengusul/peneliti?
                            </button>
                        </h2>
                        <div id="flush-collapseOne" class="accordion-collapse collapse"
                            aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">

                            <div class="accordion-body text-start digi-p3 font-noto-sans-regular opacity-75">
                                Pengusul atau Peneliti adalah individu atau kelompok yang bertanggung jawab
                                untuk menyusun dan mengajukan protokol penelitian yang melibatkan manusia sebagai subyek
                                penelitian.
                                Mereka harus memastikan bahwa protokol yang diajukan memenuhi standar etik yang berlaku
                                dan mengajukannya
                                ke Komite Etik Penelitian (KEP) untuk mendapatkan Surat Layak Etik sebelum memulai
                                penelitian.
                                Protokol dapat diajukan melalui aplikasi digital seperti digiTEPP atau secara manual,
                                dan dalam penelitian multicenter, protokol dapat diajukan ke lebih dari satu KEP dengan
                                salah satu bertindak sebagai KEP Utama.
                                Pengusul/Peneliti juga harus siap memberikan klarifikasi atau tambahan informasi selama
                                proses telaah oleh KEP.
                            </div>
                        </div>
                    </div>

                    <!-- Accordion 2 -->
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingTwo">
                            <button
                                class="accordion-button collapsed digi-p4-bold font-noto-sans-regular digi-text-color-red"
                                type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo"
                                aria-expanded="true" aria-controls="flush-collapseTwo">
                                Apa itu surat layak etik?
                            </button>
                        </h2>
                        <div id="flush-collapseTwo" class="accordion-collapse collapse"
                            aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">

                            <div class="accordion-body text-start digi-p3 font-noto-sans-regular opacity-75">
                                Surat Layak Etik adalah dokumen yang diterbitkan oleh Komite Etik Penelitian (KEP)
                                setelah melakukan telaah terhadap protokol penelitian yang diajukan.
                                Surat ini menandakan bahwa protokol penelitian telah memenuhi standar etik yang berlaku,
                                baik nasional maupun internasional, dan memberikan izin bagi peneliti untuk melaksanakan
                                penelitian yang melibatkan manusia sebagai subyek. Surat Layak Etik memastikan bahwa hak
                                dan kesejahteraan
                                subyek penelitian dilindungi, serta bahwa penelitian dilakukan dengan cara yang etis dan
                                bertanggung jawab.
                                Dalam penelitian multicenter, Surat Layak Etik dapat diterbitkan oleh KEP Utama yang
                                berkoordinasi dengan KEP lainnya.
                            </div>
                        </div>
                    </div>

                    <!-- Accordion 3 -->
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingThree">
                            <button
                                class="accordion-button collapsed digi-p4-bold font-noto-sans-regular digi-text-color-red"
                                type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree"
                                aria-expanded="true" aria-controls="flush-collapseThree">
                                Apa itu KEP?
                            </button>
                        </h2>
                        <div id="flush-collapseThree" class="accordion-collapse collapse"
                            aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">

                            <div class="accordion-body text-start digi-p3 font-noto-sans-regular opacity-75">
                                KEP dapat dibentuk oleh sebuah Lembaga, atau sekelompok orang membentuk komite ini.
                                Pimpinan Lembaga menerbitkan Surat Keputusan, atau sekelompok orang membuat Surat
                                Pernyataan Bersama Membentuk Komite.
                                Dengan Surat Keputusan atau Surat Pernyataan tersebut Komite Mendeklarasikan diri,
                                atau mengumumkan bahwa Komite Etik Penelitian telah dapat menerima permintaan Surat
                                Layak Etik Penelitian,
                                dengan mengajukan Protokol Etik Penelitian.
                            </div>
                        </div>
                    </div>

                    <!-- Accordion 4 -->
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingFour">
                            <button
                                class="accordion-button collapsed digi-p4-bold font-noto-sans-regular digi-text-color-red"
                                type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour"
                                aria-expanded="true" aria-controls="flush-collapseFour">
                                Siapa itu penelaah?
                            </button>
                        </h2>
                        <div id="flush-collapseFour" class="accordion-collapse collapse"
                            aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">

                            <div class="accordion-body text-start digi-p3 font-noto-sans-regular opacity-75">
                                Penelaah adalah anggota Komite Etik Penelitian (KEP) yang bertugas menilai kelayakan
                                etik
                                dari protokol penelitian yang diajukan. Mereka harus memiliki sertifikat pelatihan Etik
                                Dasar dan Lanjut (EDL) dan,
                                dalam beberapa kasus, sertifikat Good Clinical Research Practice (GCRP).
                                Penelaah terdiri dari minimal 5-7 orang dengan latar belakang keilmuan yang
                                multidisiplin,
                                termasuk anggota "lay person" atau orang awam yang mewakili persepsi masyarakat umum.
                                Mereka melakukan telaah secara bergantian dan adil, memastikan beban dan manfaat merata
                                di antara anggota.
                                Penelaah dilarang menelaah protokol yang diajukannya sendiri atau yang diajukan oleh
                                peneliti
                                yang menjadi bimbingannya untuk menghindari konflik kepentingan.
                            </div>
                        </div>
                    </div>

                    <!-- Accordion 5 -->
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingFive">
                            <button
                                class="accordion-button collapsed digi-p4-bold font-noto-sans-regular digi-text-color-red"
                                type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive"
                                aria-expanded="true" aria-controls="flush-collapseFive">
                                Apakah ada biaya pendaftaran?
                            </button>
                        </h2>
                        <div id="flush-collapseFive" class="accordion-collapse collapse"
                            aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">

                            <div class="accordion-body text-start digi-p3 font-noto-sans-regular opacity-75">
                                Biaya pendaftaran Pengusul pada digiTEPP gratis,
                                tetapi ada biaya untuk mengirimkan usulan protokol ke KEP yang dituju,
                                besarnya biaya tergantung dari masing-masing KEP.
                            </div>
                        </div>
                    </div>

                    <!-- Accordion 6 -->
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingSix">
                            <button
                                class="accordion-button collapsed digi-p4-bold font-noto-sans-regular digi-text-color-red"
                                type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix"
                                aria-expanded="true" aria-controls="flush-collapseSix">
                                Apa itu biaya usulan?
                            </button>
                        </h2>
                        <div id="flush-collapseSix" class="accordion-collapse collapse"
                            aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushExample">

                            <div class="accordion-body text-start digi-p3 font-noto-sans-regular opacity-75">
                                Biaya usulan adalah biaya yang ditentukan oleh masing-masing KEP
                                sebagai biaya telaah usulan protokol sesuai jenjang penelitian dan asal lembaga.
                                Biaya ini bervariasi tergantung kebijakan masing-masing KEP
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    </main>

    <footer>
        <DigiFooter />
    </footer>
</template>
