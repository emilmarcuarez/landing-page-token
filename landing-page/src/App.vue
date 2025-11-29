<script setup>
import Navbar from './components/Navbar.vue'
import Header from './components/sections/Header.vue'
import AboutUs from './components/sections/AboutUs.vue'
import Roadmap from './components/sections/Roadmap.vue'
import Tokenomics from './components/sections/Tokenomics.vue'
import ContactUs from './components/sections/ContactUs.vue'
import Footer from './components/Footer.vue'
</script>

<template>
    <div class="header-wrapper relative"
        style="background-image: url('/img/fondo-banner.png'); background-size: cover; background-position: center; background-repeat: no-repeat;">
        <div class="absolute inset-0 bg-black/50 z-0"></div>

        <div class="relative z-10">
            <Navbar />
            <div class="pt-20">
                <section id="home">
                    <Header />
                </section>
            </div>
        </div>
    </div>
    <section id="about">
        <AboutUs />
    </section>
    <section id="roadmap">
        <Roadmap />
    </section>
    <section id="tokenomics">
        <Tokenomics />
    </section>
    <section id="contact">
        <ContactUs />
    </section>
    <Footer />
</template>

<style scoped></style>
