<template>
  <footer class=" py-8 px-6">
    <div class="container mx-auto max-w-15xl">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="flex">
          <div>
            <img src="/img/logo-token.png" alt="logo-token" class="w-40 rounded-full">
          </div>
          <div>
            <h3 class="text-white text-xl font-bold mb-4">Token Project</h3>
            <p class="text-amber-100 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
          </div>
        </div>
        <div class="flex flex-col justify-flex-end items-end">
          <h4 class="text-white text-lg font-semibold mb-4 text-right">Contact</h4>
          <div class="flex items-center gap-2 justify-center">
            <p><a href="#contact" class="text-amber-100 hover:text-white transition-colors text-right">Contact Us</a>
            </p>
            <div class="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-colors mb-2">
              <img src="/img/email.png" alt="Email">
            </div>
          </div>

        </div>
      </div>
      <div class="mt-8 pt-8 border-t border-amber-500 text-center">
        <p class="text-amber-100 text-sm">
   © 2025 .Todos los derechos reservados.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>

</script>

<style scoped>
footer {
  background: linear-gradient(to bottom, rgba(0, 0, 0, 1) 17%, rgba(27, 24, 21, 1) 64%);
  border-top: 3px solid #ffc711FF;
  ;
}
</style>
