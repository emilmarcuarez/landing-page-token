<template>

  <nav class="fixed w-full top-0 start-0 transition-all duration-300 z-[9999]"
    :class="{ 'bg-black/70': isScrolled, 'bg-transparent': !isScrolled }">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 xl:py-4">
      <a href="#home" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="/img/logo.png" class="h-20 rounded-full" alt="Token Logo" />
      </a>
      <button @click="toggleMenu" type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary z-[10000]"
        aria-controls="navbar-default" :aria-expanded="isMenuOpen">
        <span class="sr-only">Open main menu</span>
        <svg v-if="!isMenuOpen" class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
          height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h14" />
        </svg>
        <svg v-else class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
          fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <div v-if="isMenuOpen" @click="toggleMenu" class="fixed inset-0 bg-black/50 z-[9998] md:hidden"></div>

      <div :class="{ 'translate-x-full': !isMenuOpen, 'translate-x-0': isMenuOpen }"
        class="fixed top-0 right-0 z-[9999] h-screen p-4 overflow-y-auto transition-transform bg-black border-l-4 border-yellow-500 w-64 md:translate-x-0 md:static md:h-auto md:w-auto md:bg-transparent md:p-0 md:overflow-visible md:transition-none md:border-l-0"
        id="navbar-default">
        <ul
          class="font-medium flex flex-col gap-5 p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
          <li>
            <a href="#home" @click="toggleMenu"
              class="block py-2 px-3 text-white bg-brand rounded md:bg-transparent md:text-fg-brand md:p-0"
              aria-current="page">Home</a>
          </li>
          <li>
            <a href="#about" @click="toggleMenu"
              class="block py-2 px-3 text-white rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">About
              us</a>
          </li>
          <li>
            <a href="#roadmap" @click="toggleMenu"
              class="block py-2 px-3 text-white rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">Roadmap</a>
          </li>
          <li>
            <a href="#tokenomics" @click="toggleMenu"
              class="block py-2 px-3 text-white rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">Tokenomics</a>
          </li>
          <li>
            <a href="#contact" @click="toggleMenu"
              class="block py-2 px-3 text-white rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">Contact
              Us</a>
          </li>
          <li>
            <a href="#" class="block-inline py-3 px-3 text-white rounded-4xl button-buyNow">BUY NOW</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isMenuOpen = ref(false);
const isScrolled = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>
<style scoped>
.button-buyNow {
  background: linear-gradient(to bottom, rgba(255, 193, 48, 1) 7.000000000000001%, rgba(149, 104, 0, 1) 73%);
}
</style>