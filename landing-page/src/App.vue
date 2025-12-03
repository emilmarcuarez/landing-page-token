<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Navbar from './components/Navbar.vue'
import Header from './components/sections/Header.vue'
import AboutUs from './components/sections/AboutUs.vue'
import Roadmap from './components/sections/Roadmap.vue'
import Tokenomics from './components/sections/Tokenomics.vue'
import ContactUs from './components/sections/ContactUs.vue'
import Footer from './components/Footer.vue'

const showScrollButton = ref(false)

const handleScroll = () => {
    showScrollButton.value = window.scrollY > 300
}

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})
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

    <!-- Back to Top Button -->
    <button v-show="showScrollButton" @click="scrollToTop"
        class="fixed bottom-8 right-8 z-50 bg-yellow-500 hover:bg-yellow-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 cursor-pointer border-2 border-white/20"
        aria-label="Back to top">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
    </button>
</template>

<style scoped></style>
