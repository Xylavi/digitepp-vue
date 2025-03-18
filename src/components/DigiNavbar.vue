
<template>
    <nav class="navbar px-lg-4 mx-lg-5 mt-3 navbar-expand-lg shadow-lg rounded-5 bg-opacity-75 digi-backdrop-blur fixed-top">
        <div class="container-fluid">
            <router-link class="navbar-brand px-0" :to="{ name: 'home' }">
                <img src="/images/svg/logo-digiTEPP.svg" alt="Digitepp" height="80">
            </router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#beranda"
                aria-controls="beranda" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="beranda">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0 font-noto-sans-bold digi-p3">
                    <li class="nav-item">
                        <router-link class="nav-link py-3 px-4 active" :to="{ name: 'home' }" aria-current="page">Beranda</router-link>
                    </li>
                    <li>
                        <a class="nav-link py-3 px-4" href="#fitur" aria-current="page">Fitur</a>
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
</template>
