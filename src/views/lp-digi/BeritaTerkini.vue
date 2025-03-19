<script lang="js" setup>
import DigiFooter from '@/components/DigiFooter.vue';
import DigiNavbar from '@/components/DigiNavbar.vue';


</script>

<template>

    <!-- NAVBAR SECTION -->

    <header>
        <DigiNavbar :fixed-top="false"/>
    </header>

    <main>



        <section class="m-3 m-lg-5">

            <!-- Back Button -->
            <router-link name="" id="" class="btn btn-primary my-5 bg-info-subtle border border-info digi-text-color-blue"
                :to="{name: 'home'}" role="button">
                <i class="bi bi-arrow-left font-noto-sans-regular"> Kembali ke Beranda</i>
            </router-link>

            <div class="container text-center">


                <!-- BERITA TERKINI SECTION -->


                <h2 class="font-dm-serif-text-regular my-5 my-lg-5">Berita Terkini</h2>

                <!-- Headline -->
                <div class="row row-cols-1 justify-content-center">
                    <div class="card digi-hdl-card-vw-high">
                        <img class="card-img" src="/images/news/berita.png" alt="News">
                        <div
                            class="text-center text-lg-start d-flex align-items-end digi-headline-vw-high digi-headline-vw-low">
                            <h3 class="card-title my-3 mx-0 my-lg-5 mx-lg-5 font-dm-serif-text-regular">KEPPIN
                                Selenggarakan Pelatihan Etik Dasar Lanjut, GCRP, dan Pengenalan DigiTEPP
                                secara Online dengan Peserta dari Berbagai Institusi</h3>
                        </div>
                    </div>
                </div>

                <!-- Row Berita -->
                <div class="row mx-0 mx-lg-0 row-cols-1 row-cols-lg-3 d-flex justify-content-center align-items-center">

                    <!-- Berita 1 -->
                    <div class="col p-3">
                        <div class="row row-cols-2 row-cols-lg-1">
                            <div class="col-4">
                                <div class="row my-3 rounded-bottom-3 rounded-top-3">
                                    <img src="/images/1x/news-placeholder.png" alt="Berita Terkini">
                                </div>
                            </div>
                            <div class="col-8">
                                <div class="row text-start">
                                    <router-link class="font-noto-sans-regular digi-berita-title text-decoration-none"
                                        :to="{name: 'detailBerita'}">KEPPIN Selenggarakan Pelatihan Etik Dasar Lanjut,
                                        GCRP,
                                        dan Pengenalan DigiTEPP secara Online dengan Peserta dari Berbagai Institusi</router-link>
                                    <p class="small text-secondary">Senin, 2 Desember 2024</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Berita 2 -->
                    <div class="col p-3">
                        <div class="row row-cols-2 row-cols-lg-1">
                            <div class="col-4">
                                <div class="row my-3 rounded-bottom-3 rounded-top-3">
                                    <img src="/images/1x/news-placeholder-2.png" alt="Berita Terkini">
                                </div>
                            </div>
                            <div class="col-8">
                                <div class="row text-start">
                                    <router-link class="font-noto-sans-regular digi-berita-title text-decoration-none"
                                        :to="{name: 'detailBerita'}">RSPAD Gatot Soebroto dan KEPPIN Selenggarakan
                                        Pelatihan
                                        Etik Dasar Lanjut, GCRP, dan Pengenalan DigiTEPP secara Luring</router-link>
                                    <p class="small text-secondary">Senin, 18 November 2024</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Berita 3 -->
                    <div class="col p-3">
                        <div class="row row-cols-2 row-cols-lg-1">
                            <div class="col-4">
                                <div class="row my-3 rounded-bottom-3 rounded-top-3">
                                    <img src="/images/1x/news-placeholder-3.png" alt="Berita Terkini">
                                </div>
                            </div>
                            <div class="col-8">
                                <div class="row text-start">
                                    <router-link class="font-noto-sans-regular digi-berita-title text-decoration-none"
                                        :to="{name: 'detailBerita'}">KEPPIN Adakan Pelatihan Etik Dasar Lanjut, Good
                                        Clinical
                                        Research Protocol, dan Pengenalan Aplikasi DigiTEPP secara Daring</router-link>
                                    <p class="small text-secondary">Senin, 11 November 2024</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Berita 4 -->
                    <div class="col p-3">
                        <div class="row row-cols-2 row-cols-lg-1">
                            <div class="col-4">
                                <div class="row my-3 rounded-bottom-3 rounded-top-3">
                                    <img src="/images/1x/news-placeholder.png" alt="Berita Terkini">
                                </div>
                            </div>
                            <div class="col-8">
                                <div class="row text-start">
                                    <router-link class="font-noto-sans-regular digi-berita-title text-decoration-none"
                                        :to="{name: 'detailBerita'}">KEPPIN Selenggarakan Pelatihan Etik Dasar Lanjut,
                                        GCRP,
                                        dan Pengenalan DigiTEPP secara Online dengan Peserta dari Berbagai Institusi</router-link>
                                    <p class="small text-secondary">Senin, 2 Desember 2024</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Berita 5 -->
                    <div class="col p-3">
                        <div class="row row-cols-2 row-cols-lg-1">
                            <div class="col-4">
                                <div class="row my-3 rounded-bottom-3 rounded-top-3">
                                    <img src="/images/1x/news-placeholder-2.png" alt="Berita Terkini">
                                </div>
                            </div>
                            <div class="col-8">
                                <div class="row text-start">
                                    <router-link class="font-noto-sans-regular digi-berita-title text-decoration-none"
                                        :to="{name: 'detailBerita'}">RSPAD Gatot Soebroto dan KEPPIN Selenggarakan
                                        Pelatihan
                                        Etik Dasar Lanjut, GCRP, dan Pengenalan DigiTEPP secara Luring</router-link>
                                    <p class="small text-secondary">Senin, 18 November 2024</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Berita 6 -->
                    <div class="col p-3">
                        <div class="row row-cols-2 row-cols-lg-1">
                            <div class="col-4">
                                <div class="row my-3 rounded-bottom-3 rounded-top-3">
                                    <img src="/images/1x/news-placeholder-3.png" alt="Berita Terkini">
                                </div>
                            </div>
                            <div class="col-8">
                                <div class="row text-start">
                                    <router-link class="font-noto-sans-regular digi-berita-title text-decoration-none"
                                        :to="{name: 'detailBerita'}">KEPPIN Adakan Pelatihan Etik Dasar Lanjut, Good
                                        Clinical
                                        Research Protocol, dan Pengenalan Aplikasi DigiTEPP secara Daring</router-link>
                                    <p class="small text-secondary">Senin, 11 November 2024</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <!-- PAGINATION -->


                <nav class="my-3 my-lg-5" aria-label="Page navigation example">
                    <ul class="pagination justify-content-center">

                        <li class="page-item">
                            <a class="page-link px-3" href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                        </li>

                        <li class="page-item">
                            <a class="page-link px-3" href="#">1</a>
                        </li>

                        <li class="page-item">
                            <a class="page-link px-3" href="#">2</a>
                        </li>

                        <li class="page-item">
                            <a class="page-link px-3" href="#">3</a>
                        </li>

                        <li class="page-item">
                            <a class="page-link px-3" href="#">4</a>
                        </li>

                        <li class="page-item">
                            <a class="page-link px-3" href="#">5</a>
                        </li>

                        <li class="page-item">
                            <a class="page-link px-3" href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </a>
                        </li>
                    </ul>
                </nav>

            </div>
        </section>

    </main>

    <footer>
        <DigiFooter/>
    </footer>

</template>
