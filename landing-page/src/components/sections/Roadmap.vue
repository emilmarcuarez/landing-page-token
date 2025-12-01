<template>
    <div class="bg-zinc-950 py-12 sm:py-16 md:py-20 px-4 sm:px-6 relative">
        <div class="absolute top-0 right-0 w-90 h-150 bg-no-repeat opacity-10"
            style="background-image: url('/img/figura-fondo.png'); background-size: 200% 100%; background-position: 0% 0%; animation: slightRotate 10s ease-in-out infinite;">
        </div>
        <div class="container mx-auto max-w-7xl">
            <div class="text-center mb-8 sm:mb-12 md:mb-16 relative">
                <h2 class="absolute left-1/2 top-1/7 -translate-x-1/2 -translate-y-1/2 text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-transparent opacity-10 whitespace-nowrap pointer-events-none select-none"
                    style="-webkit-text-stroke: 2px rgba(255, 255, 255, 0.5); text-stroke: 2px rgba(255, 255, 255, 0.5);">
                    Disclaimer Material</h2>
                <h2 class="relative text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">Disclaimer
                    Material
                </h2>
                <p class="text-gray-400 text-base sm:text-lg md:text-xl max-w-3xl mx-auto px-4 pt-5">
                    This token is a memecoin created purely for entertainment and community purposes. It has no
                    intrinsic value or expectation of financial return.
                    By purchasing, trading, or interacting with this token, you acknowledge and agree to the following:

                </p>
            </div>

            <div class="md:hidden mb-8 relative">
                <div class="overflow-hidden">
                    <div class="flex transition-transform duration-500 ease-in-out"
                        :style="{ transform: `translateX(-${currentPhase * 100}%)` }">
                        <div class="w-full flex-shrink-0 px-4">
                            <div
                                class="bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-xl p-5 sm:p-6 border border-zinc-700">
                                <h3
                                    class="text-lg sm:text-xl text-white font-bold pb-4 sm:pb-5 border-b border-gray-600">
                                    Not Investment Advice
                                </h3>
                                <p class="text-white text-sm sm:text-base">Nothing presented in relation to this token—whether on the website, social media, or
                                    marketing materials—should be interpreted as financial, investment, or trading
                                    advice.</p>
                            </div>
                        </div>

                        <div class="w-full flex-shrink-0 px-4">
                            <div
                                class="bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-xl p-5 sm:p-6 border border-zinc-700">
                                <h3
                                    class="text-lg sm:text-xl text-white font-bold pb-4 sm:pb-5 border-b border-gray-600">
                                    Extreme Volatility</h3>
                                <p class="text-white text-sm sm:text-base">
                                    Memecoins can experience extreme price fluctuations. You may lose part or all of the
                                    funds you choose to spend on this token.
                                </p>
                            </div>
                        </div>

                        <div class="w-full flex-shrink-0 px-4">
                            <div
                                class="bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-xl p-5 sm:p-6 border border-zinc-700">
                                <h3
                                    class="text-lg sm:text-xl text-white font-bold pb-4 sm:pb-5 border-b border-gray-600">
                                    No Promises or Guarantees</h3>
                                <p class="text-white text-sm sm:text-base">
                                    This token does not guarantee:
                                </p>
                                <ul class="text-white text-sm sm:text-base list-disc list-inside space-y-1">
                                    <li>Future value</li>
                                    <li>Utility</li>
                                    <li>Profit</li>
                                    <li>Roadmap completion</li>
                                    <li>Listing on any exchange</li>
                                </ul>
                                <p class="text-white text-sm sm:text-base">
                                    The project team makes no binding commitments of any kind.
                                </p>
                            </div>
                        </div>
                        <div class="w-full flex-shrink-0 px-4">
                            <div
                                class="bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-xl p-5 sm:p-6 border border-zinc-700">
                                <h3
                                    class="text-lg sm:text-xl text-white font-bold pb-4 sm:pb-5 border-b border-gray-600">
                                    Community-Driven</h3>
                                <p class="text-white text-sm sm:text-base">
                                 This token is intended as a fun, community-driven project. Any future developments are speculative, experimental, and subject to change without notice.
                                </p>
                            </div>
                        </div>

                        <div class="w-full flex-shrink-0 px-4">
                            <div
                                class="bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-xl p-5 sm:p-6 border border-zinc-700">
                                <h3
                                    class="text-lg sm:text-xl text-white font-bold pb-4 sm:pb-5 border-b border-gray-600">
                                    Personal Responsibility</h3>
                                <p class="text-white text-sm sm:text-base">
                                    Always do your own research. Only spend what you can afford to lose. The creators
                                    and contributors are not responsible for any financial losses, tax implications, or
                                    technical issues that may arise.
                                </p>
                            </div>
                        </div>
                        <div class="w-full flex-shrink-0 px-4">
                            <div
                                class="bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-xl p-5 sm:p-6 border border-zinc-700">
                                <h3
                                    class="text-lg sm:text-xl text-white font-bold pb-4 sm:pb-5 border-b border-gray-600">
                                    Regulatory Notice</h3>
                                <p class="text-white text-sm sm:text-base">
                                   Depending on your jurisdiction, cryptocurrency involvement may carry regulatory or tax obligations. It is your responsibility to comply with local laws.
                                </p>
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
                    <span class="text-white font-bold">{{ currentPhase + 1 }} / 6</span>
                    <button @click="nextPhase" :disabled="currentPhase === 5"
                        class="w-12 h-12 rounded-full bg-yellow-500 hover:bg-yellow-600 disabled:bg-gray-600 disabled:cursor-not-allowed flex items-center justify-center transition-colors duration-300">
                        <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>

            <div class="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                <div class="bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-xl p-5 sm:p-6 border border-zinc-700">
                    <h3 class="text-lg sm:text-xl text-white font-bold pb-4 sm:pb-5 border-b border-gray-600">
                        Not Investment Advice
                    </h3>
                    <p class="text-white text-sm sm:text-base">Nothing presented in relation to this token—whether on the website, social media, or marketing
                        materials—should be interpreted as financial, investment, or trading advice.</p>
                </div>

                <div class="bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-xl p-5 sm:p-6 border border-zinc-700">
                    <h3 class="text-lg sm:text-xl text-white font-bold pb-4 sm:pb-5 border-b border-gray-600">Extreme
                        Volatility
                    </h3>
                    <p class="text-white text-sm sm:text-base">
                        Memecoins can experience extreme price fluctuations. You may lose part or all of the funds you
                        choose to spend on this token.
                    </p>
                </div>

                <div class="bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-xl p-5 sm:p-6 border border-zinc-700">
                    <h3 class="text-lg sm:text-xl text-white font-bold pb-4 sm:pb-5 border-b border-gray-600">No
                        Promises or Guarantees
                    </h3>
                    <p class="text-white text-sm sm:text-base">
                        This token does not guarantee:
                    </p>
                    <ul class="text-white text-sm sm:text-base list-disc list-inside space-y-1">
                        <li>Future value</li>
                        <li>Utility</li>
                        <li>Profit</li>
                        <li>Roadmap completion</li>
                        <li>Listing on any exchange</li>
                    </ul>
                    <p class="text-white text-sm sm:text-base">The project team makes no binding commitments of any kind.</p>
                </div>

                <div class="bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-xl p-5 sm:p-6 border border-zinc-700">
                    <h3 class="text-lg sm:text-xl text-white font-bold pb-4 sm:pb-5 border-b border-gray-600">
                        Community-Driven
                    </h3>
                    <p class="text-white text-sm sm:text-base">
                        This token is intended as a fun, community-driven project. Any future developments are
                        speculative, experimental, and subject to change without notice.
                    </p>
                </div>
                <div class="bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-xl p-5 sm:p-6 border border-zinc-700">
                    <h3 class="text-lg sm:text-xl text-white font-bold pb-4 sm:pb-5 border-b border-gray-600">Personal
                        Responsibility
                    </h3>
                    <p class="text-white text-sm sm:text-base">
                        Always do your own research. Only spend what you can afford to lose. The creators and
                        contributors are not responsible for any financial losses, tax implications, or technical issues
                        that may arise
                    </p>
                </div>
                <div class="bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-xl p-5 sm:p-6 border border-zinc-700">
                    <h3 class="text-lg sm:text-xl text-white font-bold pb-4 sm:pb-5 border-b border-gray-600">Regulatory
                        Notice
                    </h3>
                    <p class="text-white text-sm sm:text-base">
                        Depending on your jurisdiction, cryptocurrency involvement may carry regulatory or tax
                        obligations. It is your responsibility to comply with local laws.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const currentPhase = ref(0);

const nextPhase = () => {
    if (currentPhase.value < 5) {
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