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
<Navbar />
<div class="pt-20">
    <section id="home">
        <Header />
    </section>
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
</div>

</template>

<style scoped>

</style>
