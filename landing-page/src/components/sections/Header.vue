<template>
    <div class="grid grid-cols-1 lg:grid-cols-3 bg-zinc-950 min-h-screen">
        <div class="lg:col-span-2 bg-zinc-950 flex items-center justify-center px-6 sm:px-8 md:px-12 lg:px-20 py-12 lg:py-0 order-2 lg:order-1">
            <div class="flex flex-col gap-4 sm:gap-5 md:gap-6 w-full max-w-3xl">
                <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                    Tabaco Token
                </h1>
                <p class="text-lg sm:text-xl md:text-2xl text-gray-300 font-medium">
                    The future of tobacco is here
                </p>
                <p class="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 leading-relaxed">
                    Aenean quis commodo odio. Ut magna libero, porta rhoncus eros nec, tristique viverra ex.
                    <span class="hidden sm:inline"><br></span>
                    Quisque imperdiet placerat risus,
                </p>
                <p class="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 leading-relaxed">
                    Nullam turpis diam, dapibus ac mi quis, scelerisque sollicitudin est.
                </p>
                <p class="text-lg sm:text-xl md:text-2xl text-white font-bold mt-2">
                    Escanea abajo
                </p>
                <div class="mt-4 flex justify-center lg:justify-start">
                    <div class="inline-flex gap-3 sm:gap-5 bg-white p-2 sm:p-3 rounded-lg shadow-lg">
                        <img src="/img/qr.png" alt="QR Code" class="h-48 sm:h-40 md:h-48 lg:h-56 w-auto">
                    </div>
                </div>
            </div>
        </div>

        <div class="lg:col-span-1 flex items-center justify-center relative min-h-[50vh] lg:min-h-screen order-1 lg:order-2">
            <img class="w-full h-full object-cover" src="/img/8.jpg" alt="tabaco token">

            <div class="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-zinc-950 via-zinc-950/60 lg:via-zinc-950/50 to-transparent pointer-events-none"></div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
</style>