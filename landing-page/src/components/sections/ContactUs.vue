<template>
    <div class="bg-zinc-950 py-20 px-6 relative">
        <div class="absolute top-0 left-0 w-90 h-150 bg-no-repeat opacity-10 rotate-180 z-0"
            style="background-image: url('/img/figura-fondo.png'); background-size: 200% 100%; background-position: 0% 0%; animation: slightRotate 10s ease-in-out infinite;">
        </div>
        <div class="container mx-auto max-w-15xl">
            <div class="text-center mb-16 relative">
                <h2 class="absolute z-10 left-1/2 top-1/7 -translate-x-1/2 -translate-y-1/2 text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-transparent opacity-10 whitespace-nowrap pointer-events-none select-none"
                    style="-webkit-text-stroke: 2px rgba(255, 255, 255, 0.5); text-stroke: 2px rgba(255, 255, 255, 0.5);">
                    CONTACT US</h2>
                <h2 class="relative text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">Contact Us
                </h2>
                <p class="text-gray-400 text-base sm:text-lg md:text-xl max-w-3xl mx-auto px-4 pt-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div class="flex justify-center relative">
                    <img src="/img/4.jpg" alt="" class="w-96 h-96 p-2 border-2 border-yellow-500 rounded-full">
                </div>
                <div class="grid grid-cols-1">
                    <form>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div class="mb-4">
                                <label class="block text-white text-sm font-bold mb-2" for="name">Name</label>
                                <input
                                    class="w-full px-3 py-2 rounded-md text-white border border-zinc-700 focus:outline-none focus:border-amber-500"
                                    type="text" id="name" placeholder="Your Name">
                            </div>
                            <div class="mb-4">
                                <label class="block text-white text-sm font-bold mb-2" for="email">Email</label>
                                <input
                                    class="w-full px-3 py-2 rounded-md text-white border border-zinc-700 focus:outline-none focus:border-amber-500"
                                    type="email" id="email" placeholder="Your Email">
                            </div>
                        </div>
                        <div class="mb-4">
                            <label class="block text-white text-sm font-bold mb-2" for="message">Message</label>
                            <textarea
                                class="w-full px-3 py-2 rounded-md text-white border border-zinc-700 focus:outline-none focus:border-amber-500"
                                id="message" rows="4" placeholder="Your Message"></textarea>
                        </div>
                        <button
                            class="bg-amber-600 button-contact hover:bg-amber-700 text-white font-bold py-3 px-5 rounded-full"
                            type="submit">Send</button>
                    </form>

                </div>
            </div>
            <h2
                class="relative text-3xl sm:text-4xl md:text-4xl font-bold text-white mb-3 sm:mb-4 z-10 pt-12 text-center">
                Social Media
            </h2>
            <div class="mt-8">
                <div class="flex flex-wrap justify-center space-x-4 mb-6 gap-6">
                    <div class="flex flex-col items-center">
                        <div
                            class="w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition-colors mb-2">
                            <img src="/img/email.png" alt="Email">
                        </div>
                        <span class="text-white text-sm">Email</span>
                    </div>
                    <div class="flex flex-col items-center">
                        <div
                            class="w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition-colors mb-2">
                            <img src="/img/telegram.png" alt="Telegram">
                        </div>
                        <span class="text-white text-sm">Telegram</span>
                    </div>
                    <div class="flex flex-col items-center">
                        <div
                            class="w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition-colors mb-2">
                            <img src="/img/instagram.png" alt="Instagram">
                        </div>
                        <span class="text-white text-sm">Instagram</span>
                    </div>
                    <div class="flex flex-col items-center">
                        <div
                            class="w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition-colors mb-2">
                            <img src="/img/facebook.png" alt="Facebook">
                        </div>
                        <span class="text-white text-sm">Facebook</span>
                    </div>
                    <div class="flex flex-col items-center">
                        <div
                            class="w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition-colors mb-2 golden-pulse">
                            <img src="/img/x.png" alt="x">
                        </div>
                        <span class="text-white text-sm">X</span>
                    </div>
                    <div class="flex flex-col items-center">
                        <div
                            class="w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition-colors mb-2">
                            <img src="/img/youtube.png" alt="Youtube">
                        </div>
                        <span class="text-white text-sm">Youtube</span>
                    </div>
                    <div class="flex flex-col items-center">
                        <div
                            class="w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition-colors mb-2">
                            <img src="/img/linkedin.png" alt="linkedin">
                        </div>
                        <span class="text-white text-sm">Linkedin</span>
                    </div>
                    <div class="flex flex-col items-center">
                        <div
                            class="w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition-colors mb-2">
                            <img src="/img/discord.png" alt="discord">
                        </div>
                        <span class="text-white text-sm">Discord</span>
                    </div>
                    <div class="flex flex-col items-center">
                        <div
                            class="w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition-colors mb-2">
                            <img src="/img/reddit.png" alt="Reddit">
                        </div>
                        <span class="text-white text-sm">Reddit</span>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.button-contact {
    background: linear-gradient(to bottom, rgb(255, 182, 23) 7.000000000000001%, rgba(149, 104, 0, 1) 73%);
}

.golden-pulse {
    box-shadow: 0 0 0 0 rgba(255, 215, 0, 0.7);
    animation: goldenPulse 2s infinite;
}

@keyframes goldenPulse {
    0% {
        transform: scale(0.95);
        box-shadow: 0 0 0 0 rgba(255, 215, 0, 0.7);
    }

    70% {
        transform: scale(1);
        box-shadow: 0 0 0 10px rgba(255, 215, 0, 0);
    }

    100% {
        transform: scale(0.95);
        box-shadow: 0 0 0 0 rgba(255, 215, 0, 0);
    }
}

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
