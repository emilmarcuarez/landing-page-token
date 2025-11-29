<template>
    <div class="bg-zinc-950 py-12 sm:py-16 md:py-20 px-4 sm:px-6 relative">
        <div class="absolute top-0 right-0 w-90 h-150 bg-no-repeat opacity-10"
            style="background-image: url('/img/figura-fondo.png'); background-size: 200% 100%; background-position: 0% 0%; animation: slightRotate 10s ease-in-out infinite;">
        </div>
        <div class="container mx-auto max-w-7xl">
            <div class="text-center mb-8 sm:mb-12 md:mb-16 relative">
                <h2 class="absolute z-10 left-1/2 top-1/7 -translate-x-1/2 -translate-y-1/2 text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-transparent opacity-10 whitespace-nowrap pointer-events-none select-none"
                    style="-webkit-text-stroke: 2px rgba(255, 255, 255, 0.5); text-stroke: 2px rgba(255, 255, 255, 0.5);">
                    ROADMAP</h2>
                <h2 class="relative text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">Roadmap
                </h2>
                <p class="text-gray-400 text-base sm:text-lg md:text-xl max-w-3xl mx-auto px-4 pt-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                </p>
            </div>
            <div class="mb-12 px-4 sm:px-12 mt-12 relative z-10">
                <div class="relative">
                    <div class="absolute top-1/2 left-0 w-full h-0.5 bg-gray-700 -translate-y-1/2"></div>
                    <div class="absolute top-1/2 left-0 h-0.5 bg-yellow-500 -translate-y-1/2 shadow-[0_0_10px_rgba(234,179,8,0.5)] transition-all duration-500"
                        :style="{ width: `${(currentPhase / 3) * 100}%` }"></div>

                    <div class="relative z-10 flex justify-between items-center">
                        <div class="flex flex-col items-center relative group cursor-pointer" @click="goToPhase(0)">
                            <div v-if="currentPhase === 0"
                                class="absolute -inset-3 bg-yellow-500/20 rounded-full blur-md"></div>
                            <div :class="currentPhase === 0
                                ? 'w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-b from-yellow-300 to-yellow-600 border-yellow-200 shadow-[0_0_15px_rgba(234,179,8,0.6)]'
                                : 'w-4 h-4 sm:w-5 sm:h-5 bg-zinc-900 border-gray-500 group-hover:border-gray-300'"
                                class="rounded-full border-2 relative z-10 transition-all duration-300 group-hover:scale-110">
                            </div>
                            <span
                                :class="currentPhase === 0 ? 'text-yellow-500 font-bold' : 'text-gray-500 group-hover:text-gray-300'"
                                class="absolute -bottom-10 text-sm sm:text-base whitespace-nowrap transition-colors duration-300">Phase
                                1</span>
                        </div>

                        <div class="flex flex-col items-center relative group cursor-pointer" @click="goToPhase(1)">
                            <div v-if="currentPhase === 1"
                                class="absolute -inset-3 bg-yellow-500/20 rounded-full blur-md"></div>
                            <div :class="currentPhase === 1
                                ? 'w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-b from-yellow-300 to-yellow-600 border-yellow-200 shadow-[0_0_15px_rgba(234,179,8,0.6)]'
                                : 'w-4 h-4 sm:w-5 sm:h-5 bg-zinc-900 border-gray-500 group-hover:border-gray-300'"
                                class="rounded-full border-2 relative z-10 transition-all duration-300 group-hover:scale-110">
                            </div>
                            <span
                                :class="currentPhase === 1 ? 'text-yellow-500 font-bold' : 'text-gray-500 group-hover:text-gray-300'"
                                class="absolute -bottom-10 text-sm sm:text-base whitespace-nowrap transition-colors duration-300">Phase
                                2</span>
                        </div>
                        <div class="flex flex-col items-center relative group cursor-pointer" @click="goToPhase(2)">
                            <div v-if="currentPhase === 2"
                                class="absolute -inset-3 bg-yellow-500/20 rounded-full blur-md"></div>
                            <div :class="currentPhase === 2
                                ? 'w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-b from-yellow-300 to-yellow-600 border-yellow-200 shadow-[0_0_15px_rgba(234,179,8,0.6)]'
                                : 'w-4 h-4 sm:w-5 sm:h-5 bg-zinc-900 border-gray-500 group-hover:border-gray-300'"
                                class="rounded-full border-2 relative z-10 transition-all duration-300 group-hover:scale-110">
                            </div>
                            <span
                                :class="currentPhase === 2 ? 'text-yellow-500 font-bold' : 'text-gray-500 group-hover:text-gray-300'"
                                class="absolute -bottom-10 text-sm sm:text-base whitespace-nowrap transition-colors duration-300">Phase
                                3</span>
                        </div>
                        <div class="flex flex-col items-center relative group cursor-pointer" @click="goToPhase(3)">
                            <div v-if="currentPhase === 3"
                                class="absolute -inset-3 bg-yellow-500/20 rounded-full blur-md"></div>
                            <div :class="currentPhase === 3
                                ? 'w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-b from-yellow-300 to-yellow-600 border-yellow-200 shadow-[0_0_15px_rgba(234,179,8,0.6)]'
                                : 'w-4 h-4 sm:w-5 sm:h-5 bg-zinc-900 border-gray-500 group-hover:border-gray-300'"
                                class="rounded-full border-2 relative z-10 transition-all duration-300 group-hover:scale-110">
                            </div>
                            <span
                                :class="currentPhase === 3 ? 'text-yellow-500 font-bold' : 'text-gray-500 group-hover:text-gray-300'"
                                class="absolute -bottom-10 text-sm sm:text-base whitespace-nowrap transition-colors duration-300">Phase
                                4</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="md:hidden mb-8 relative">
                <div class="overflow-hidden">
                    <div class="flex transition-transform duration-500 ease-in-out"
                        :style="{ transform: `translateX(-${currentPhase * 100}%)` }">
                        <div class="w-full flex-shrink-0 px-4">
                            <div
                                class="bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-xl p-5 sm:p-6 border border-yellow-600">
                                <h3
                                    class="text-lg sm:text-xl text-yellow-600 font-bold pb-4 sm:pb-5 border-b border-orange-500">
                                    Phase 1
                                </h3>
                                <ul
                                    class="list-disc list-inside text-gray-400 space-y-2 sm:space-y-3 mt-4 text-sm sm:text-base">
                                    <li>Lorem ipsum dolor sit amet.</li>
                                    <li>Consectetur adipiscing elit.</li>
                                    <li>2024: Sed do eiusmod tempor.</li>
                                    <li>2024: Ut labore et dolore magna.</li>
                                    <li>2025: Quis nostrud exercitation.</li>
                                    <li>2025: Nisi ut aliquip ex ea.</li>
                                </ul>
                            </div>
                        </div>

                        <div class="w-full flex-shrink-0 px-4">
                            <div
                                class="bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-xl p-5 sm:p-6 border border-zinc-700">
                                <h3
                                    class="text-lg sm:text-xl text-white font-bold pb-4 sm:pb-5 border-b border-gray-600">
                                    Phase 2</h3>
                                <ul
                                    class="list-disc list-inside text-gray-400 space-y-2 sm:space-y-3 mt-4 text-sm sm:text-base">
                                    <li>Lorem ipsum dolor sit amet.</li>
                                    <li>Consectetur adipiscing elit.</li>
                                    <li>2024: Sed do eiusmod tempor.</li>
                                    <li>2024: Ut labore et dolore magna.</li>
                                    <li>2025: Quis nostrud exercitation.</li>
                                    <li>2025: Nisi ut aliquip ex ea.</li>
                                </ul>
                            </div>
                        </div>

                        <div class="w-full flex-shrink-0 px-4">
                            <div
                                class="bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-xl p-5 sm:p-6 border border-zinc-700">
                                <h3
                                    class="text-lg sm:text-xl text-white font-bold pb-4 sm:pb-5 border-b border-gray-600">
                                    Phase 3</h3>
                                <ul
                                    class="list-disc list-inside text-gray-400 space-y-2 sm:space-y-3 mt-4 text-sm sm:text-base">
                                    <li>Lorem ipsum dolor sit amet.</li>
                                    <li>Consectetur adipiscing elit.</li>
                                    <li>2024: Sed do eiusmod tempor.</li>
                                    <li>2024: Ut labore et dolore magna.</li>
                                    <li>2025: Quis nostrud exercitation.</li>
                                    <li>2025: Nisi ut aliquip ex ea.</li>
                                </ul>
                            </div>
                        </div>

                        <div class="w-full flex-shrink-0 px-4">
                            <div
                                class="bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-xl p-5 sm:p-6 border border-zinc-700">
                                <h3
                                    class="text-lg sm:text-xl text-white font-bold pb-4 sm:pb-5 border-b border-gray-600">
                                    Phase 4</h3>
                                <ul
                                    class="list-disc list-inside text-gray-400 space-y-2 sm:space-y-3 mt-4 text-sm sm:text-base">
                                    <li>Lorem ipsum dolor sit amet.</li>
                                    <li>Consectetur adipiscing elit.</li>
                                    <li>2024: Sed do eiusmod tempor.</li>
                                    <li>2024: Ut labore et dolore magna.</li>
                                    <li>2025: Quis nostrud exercitation.</li>
                                    <li>2025: Nisi ut aliquip ex ea.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex justify-center items-center gap-4 mt-6">
                    <button @click="prevPhase" :disabled="currentPhase === 0"
                        class="w-12 h-12 rounded-full bg-yellow-500 hover:bg-yellow-600 disabled:bg-gray-600 disabled:cursor-not-allowed flex items-center justify-center transition-colors duration-300">
                        <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <span class="text-white font-bold">{{ currentPhase + 1 }} / 4</span>
                    <button @click="nextPhase" :disabled="currentPhase === 3"
                        class="w-12 h-12 rounded-full bg-yellow-500 hover:bg-yellow-600 disabled:bg-gray-600 disabled:cursor-not-allowed flex items-center justify-center transition-colors duration-300">
                        <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>

            <div class="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                <div class="bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-xl p-5 sm:p-6 border border-yellow-600">
                    <h3 class="text-lg sm:text-xl text-yellow-600 font-bold pb-4 sm:pb-5 border-b border-orange-500">
                        Phase 1
                    </h3>
                    <ul class="list-disc list-inside text-gray-400 space-y-2 sm:space-y-3 mt-4 text-sm sm:text-base">
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Consectetur adipiscing elit.</li>
                        <li>2024: Sed do eiusmod tempor.</li>
                        <li>2024: Ut labore et dolore magna.</li>
                        <li>2025: Quis nostrud exercitation.</li>
                        <li>2025: Nisi ut aliquip ex ea.</li>
                    </ul>
                </div>

                <div class="bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-xl p-5 sm:p-6 border border-zinc-700">
                    <h3 class="text-lg sm:text-xl text-white font-bold pb-4 sm:pb-5 border-b border-gray-600">Phase 2
                    </h3>
                    <ul class="list-disc list-inside text-gray-400 space-y-2 sm:space-y-3 mt-4 text-sm sm:text-base">
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Consectetur adipiscing elit.</li>
                        <li>2024: Sed do eiusmod tempor.</li>
                        <li>2024: Ut labore et dolore magna.</li>
                        <li>2025: Quis nostrud exercitation.</li>
                        <li>2025: Nisi ut aliquip ex ea.</li>
                    </ul>
                </div>

                <div class="bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-xl p-5 sm:p-6 border border-zinc-700">
                    <h3 class="text-lg sm:text-xl text-white font-bold pb-4 sm:pb-5 border-b border-gray-600">Phase 3
                    </h3>
                    <ul class="list-disc list-inside text-gray-400 space-y-2 sm:space-y-3 mt-4 text-sm sm:text-base">
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Consectetur adipiscing elit.</li>
                        <li>2024: Sed do eiusmod tempor.</li>
                        <li>2024: Ut labore et dolore magna.</li>
                        <li>2025: Quis nostrud exercitation.</li>
                        <li>2025: Nisi ut aliquip ex ea.</li>
                    </ul>
                </div>

                <div class="bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-xl p-5 sm:p-6 border border-zinc-700">
                    <h3 class="text-lg sm:text-xl text-white font-bold pb-4 sm:pb-5 border-b border-gray-600">Phase 4
                    </h3>
                    <ul class="list-disc list-inside text-gray-400 space-y-2 sm:space-y-3 mt-4 text-sm sm:text-base">
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Consectetur adipiscing elit.</li>
                        <li>2024: Sed do eiusmod tempor.</li>
                        <li>2024: Ut labore et dolore magna.</li>
                        <li>2025: Quis nostrud exercitation.</li>
                        <li>2025: Nisi ut aliquip ex ea.</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const currentPhase = ref(0);

const nextPhase = () => {
    if (currentPhase.value < 3) {
        currentPhase.value++;
    }
};

const prevPhase = () => {
    if (currentPhase.value > 0) {
        currentPhase.value--;
    }
};

const goToPhase = (phase) => {
    currentPhase.value = phase;
};
</script>

<style scoped>
@keyframes slightRotate {

    0%,
    100% {
        transform: rotate(0deg);
    }

    50% {
        transform: rotate(5deg);
    }
}
</style>