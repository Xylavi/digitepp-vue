<script lang="js" setup>
import DigiFooter from '@/components/DigiFooter.vue';
import DigiNavbar from '@/components/DigiNavbar.vue';


</script>

<template>

    <!-- NAVBAR SECTION -->

    <header>
        <DigiNavbar/>
    </header>
    <main>

        <section class="m-3 m-lg-5">

            <router-link name="" id="" class="btn btn-primary my-5 bg-info-subtle border border-info digi-text-color-blue"
                :to="{name: 'beritaTerkini'}" role="button">
                <i class="bi bi-arrow-left font-noto-sans-regular"> Kembali</i>
            </router-link>

            <div class="container text-center">

                <!-- Header -->
                <h3 class="digi-h3 my-3 my-lg-5 font-dm-serif-text-regular text-start">
                    KEPPIN Selenggarakan Pelatihan Etik Dasar Lanjut, GCRP,
                    dan Pengenalan DigiTEPP secara Online dengan Peserta dari Berbagai Institusi
                </h3>

                <!-- Headline -->
                <img class="img-fluid" src="/images/news/berita.png" alt="berita placeholder">

                <!-- Text 1 -->
                <p class="digi-p1 my-3 my-lg-5 font-noto-sans-regular text-start">
                    Pada tanggal 28 hingga 30 November 2024, KEPPIN (Komite Etik Penelitian dan Pelayanan Indonesia)
                    sukses menyelenggarakan Pelatihan Etik Dasar Lanjut (EDL), Good Clinical Research Protocol (GCRP),
                    dan pengenalan aplikasi DigiTEPP secara daring. Kegiatan ini dihadiri oleh perwakilan dari berbagai
                    institusi,
                    termasuk Universitas Islam As-Syafiiyah Bekasi, Universitas Ichsan Satya Tangerang Selatan,
                    Universitas Negeri Semarang,
                    Universitas Darussalam Gontor, RSI Siti Hajar Sidoarjo, RSUD Embung Fatimah Batam, dan RSUD dr.
                    Soedono Provinsi Jawa Timur.
                </p>

                <!-- Images Column 1 -->
                <div class="row row-cols-1 row-cols-lg-2">
                    <div class="col col-lg-6">
                        <img class="img-fluid" src="/images/news/berita-2.png" alt="News Placeholder">
                    </div>
                    <div class="col col-lg-6">
                        <img class="img-fluid" src="/images/news/berita-2.png" alt="News Placeholder">
                    </div>
                    <div class="col col-lg-12">
                        <img class="img-fluid" src="/images/news/berita-3.png" alt="News Placeholder">
                    </div>
                </div>

                <!-- Text 2 -->
                <p class="digi-p1 my-3 my-lg-5 font-noto-sans-regular text-start">
                    Dr. Triono Soendoro, M.Sc., M.Phill., Ph.D., selaku Ketua KEPPIN, memimpin jalannya pelatihan dengan
                    memberikan materi mendalam mengenai standar etik penelitian serta panduan pengelolaan protokol
                    penelitian klinis yang baik.
                    Sesi-sesi pelatihan dirancang untuk meningkatkan pemahaman peserta dalam mengelola penelitian
                    berlandaskan etik serta
                    memperkuat kompetensi profesional mereka di bidang ini.
                </p>

                <!-- Images Column 2 -->
                <div class="row row-cols-1 row-cols-lg-2">
                    <div class="col col-lg-6">
                        <img class="img-fluid" src="/images/news/berita-4.png" alt="News Placeholder">
                    </div>
                    <div class="col col-lg-6">
                        <img class="img-fluid" src="/images/news/berita-5.png" alt="News Placeholder">
                    </div>
                </div>

                <!-- Text 3 -->
                <p class="digi-p1 my-3 my-lg-5 font-noto-sans-regular text-start">
                    Pada hari kedua, sesi malam difokuskan pada pendaftaran Komite Etik Penelitian (KEP) dari
                    Universitas Negeri Semarang,
                    Universitas Darussalam Gontor, RSI Siti Hajar Sidoarjo, dan RSUD dr. Soedono Provinsi Jawa Timur ke
                    aplikasi DigiTEPP
                    (Digitalisasi Telaah Etik Protokol Penelitian). Proses ini dipandu langsung oleh Pak Rudi,
                    perwakilan tim pengembang dari DinusTek,
                    yang memberikan arahan teknis untuk memastikan setiap KEP dapat menggunakan sistem secara optimal.
                </p>

                <!-- Images Column 3 -->
                <div class="row row-cols-1 row-cols-lg-2">
                    <div class="col col-lg-6">
                        <img class="img-fluid" src="/images/news/berita-6.png" alt="News Placeholder">
                    </div>
                    <div class="col col-lg-6">
                        <img class="img-fluid" src="/images/news/berita-7.png" alt="News Placeholder">
                    </div>
                </div>

                <!-- Text 4 -->
                <p class="digi-p1 my-3 my-lg-5 font-noto-sans-regular text-start">
                    Hari ketiga pelatihan diisi dengan pengenalan lebih lanjut terhadap aplikasi DigiTEPP,
                    termasuk eksplorasi fitur-fitur yang mempermudah proses telaah protokol penelitian.
                    Dalam sesi ini, dilakukan pula simulasi telaah protokol penelitian dari RSUD dr. Soedono,
                    Universitas Darussalam Gontor, dan RSI Siti Hajar Sidoarjo, memberikan pengalaman praktis kepada
                    para peserta
                    dalam mengoperasikan aplikasi secara langsung.
                </p>

                <!-- Headline 2 -->
                <img class="img-fluid" src="/images/news/berita-8.png" alt="News Placeholder">

                <!-- Text 5 -->
                <p class="digi-p1 my-3 my-lg-5 font-noto-sans-regular text-start">
                    Melalui pelatihan ini, KEPPIN kembali menunjukkan komitmennya dalam mendukung penguatan standar etik
                    penelitian di Indonesia
                    dengan memanfaatkan teknologi digital. Kehadiran berbagai institusi dalam pelatihan ini mencerminkan
                    antusiasme dan upaya
                    bersama untuk memajukan kualitas penelitian berbasis etik di berbagai sektor pelayanan kesehatan dan
                    pendidikan.
                </p>

                <p class="digi-p1 my-5 font-noto-sans-regular text-start">
                    Sumber:
                    <br>
                    Inrernal Sekretariat KEPPIN
                </p>

                <div class="p-5"></div>
                <div class="p-5"></div>
                <div class="p-5"></div>
                <div class="p-5"></div>

            </div>
        </section>

    </main>
    <footer>
        <DigiFooter/>
    </footer>

</template>
