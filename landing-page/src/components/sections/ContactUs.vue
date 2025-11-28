<template>
    <div class="bg-zinc-950 py-20 px-6">

        <div class="container mx-auto max-w-15xl">
            <div class="text-center mb-16">
                <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">Contact Us</h2>
                <p class="text-gray-400 text-base sm:text-lg md:text-xl max-w-3xl mx-auto px-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-12">

                <div class="grid grid-cols-1">
                    <form>
                        <div class="mb-4">
                            <label class="block text-white text-sm font-bold mb-2" for="name">Name</label>
                            <input
                                class="w-full px-3 py-2 rounded-md bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:border-amber-500"
                                type="text" id="name" placeholder="Your Name">
                        </div>
                        <div class="mb-4">
                            <label class="block text-white text-sm font-bold mb-2" for="email">Email</label>
                            <input
                                class="w-full px-3 py-2 rounded-md bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:border-amber-500"
                                type="email" id="email" placeholder="
Your Email">
                        </div>
                        <div class="mb-4">
                            <label class="block text-white text-sm font-bold mb-2" for="message">Message</label>
                            <textarea
                                class="w-full px-3 py-2 rounded-md bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:border-amber-500"
                                id="message" rows="4" placeholder="Your Message"></textarea>
                        </div>
                        <button class="bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded-md"
                            type="submit">Send Message</button>
                    </form>
                    <div class="mt-8">
                        <div class="flex justify-center space-x-4 mb-6">
                            <div class="flex flex-col items-center">
                                <div class="w-12 h-12 bg-white rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors mb-2"></div>
                                <span class="text-white text-sm">Instagram</span>
                            </div>
                            <div class="flex flex-col items-center">
                                <div class="w-12 h-12 bg-white rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors mb-2"></div>
                                <span class="text-white text-sm">Facebook</span>
                            </div>
                            <div class="flex flex-col items-center">
                                <div class="w-12 h-12 bg-white rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors mb-2"></div>
                                <span class="text-white text-sm">LinkedIn</span>
                            </div>
                            <div class="flex flex-col items-center">
                                <div class="w-12 h-12 bg-white rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors mb-2"></div>
                                <span class="text-white text-sm">Reddit</span>
                            </div>
                            <div class="flex flex-col items-center">
                                <div class="w-12 h-12 bg-white rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors mb-2"></div>
                                <span class="text-white text-sm">Telegram</span>
                            </div>
                        </div>
                        <div class="flex justify-center space-x-4">
                            <div class="flex flex-col items-center">
                                <div class="w-12 h-12 bg-white rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors mb-2"></div>
                                <span class="text-white text-sm">Facebook</span>
                            </div>
                            <div class="flex flex-col items-center">
                                <div class="w-12 h-12 bg-white rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors mb-2"></div>
                                <span class="text-white text-sm">X</span>
                            </div>
                            <div class="flex flex-col items-center">
                                <div class="w-12 h-12 bg-white rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors mb-2"></div>
                                <span class="text-white text-sm">YouTube</span>
                            </div>
                            <div class="flex flex-col items-center">
                                <div class="w-12 h-12 bg-white rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors mb-2"></div>
                                <span class="text-white text-sm">Discord</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex justify-center">
                    <img src="/img/4.jpg" alt="" class="h-200 rounded-sm">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped></style>