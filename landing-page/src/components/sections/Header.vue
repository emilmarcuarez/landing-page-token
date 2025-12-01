<template>
    <div class="flex flex-col lg:grid lg:grid-cols-3 bg-transparent min-h-[80vh] relative">
        <div
            class="order-1 lg:col-span-2 flex items-center justify-center px-6 sm:px-8 md:px-12 lg:px-20 py-12 lg:py-16">
            <div class="flex flex-col gap-4 sm:gap-5 md:gap-6 w-full max-w-3xl">
                <h1 class="text-xl sm:text-5xl md:text-6xl lg:text-4xl font-bold text-white leading-tight">
                    CIGARCRYPTO.VIP — Welcome to the Crypto-Club elite
                </h1>
                <p class="text-lg sm:text-xl md:text-xl text-white font-medium">
                CigarCrypto is a blockchain-based token, developed under the SPL Token 2022 standard, created as a premium lifestyle & community token. Enhance your cigar experience with Web3 security and exclusive benefits. Join the world’s first on-chain cigar club.
                </p>
                <p class="text-base sm:text-lg md:text-xl lg:text-xl text-white leading-relaxed">
                CigarCrypto will grant users worldwide:
                </p>
                <ul class="list-disc list-inside text-base sm:text-lg md:text-xl lg:text-xl text-white leading-relaxed">
                    <li>Exclusive Cigar Club Membership</li>
                    <li>Blockchain Security & Transparency</li>
                    <li>Access to Unique Lifestyle Offerings</li>
                </ul>
                <div class="mt-4 flex flex-col justify-center lg:justify-start gap-3">
                    <p class="text-yellow-600 font-bold">CIGARCRYPTO ($CIGAR) — CONTRACT ADDRESS</p>
                    <div class="w-full flex">
                        <form class="bg-zinc-300 px-1 py-1 rounded-full shadow-lg flex gap-2 w-full">
                            <input type="text"
                                class="p-1 rounded-full flex-1 text-center font-bold text-sm sm:text-base"
                                value="0x15454545555dasdsdasdqwda5555">
                            <button type="submit"
                                class="button-copy text-white px-3 rounded-full font-bold flex-shrink-0 text-sm sm:text-base">Copy</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <div class="order-2 lg:order-2 flex items-center justify-center px-6 py-6 lg:hidden">
            <div class="inline-flex gap-3 sm:gap-5 bg-white p-2 sm:p-3 rounded-lg shadow-lg">
                <div class="flex flex-col justify-center items-center">
                    <img src="/img/qr.png" alt="QR Code" class="h-48 sm:h-40 md:h-48 w-auto">
                    <p class="font-bold">Scan the QR code</p>
                </div>
            </div>
        </div>

        <div class="order-3 lg:order-2 lg:col-span-1 flex items-start justify-center relative min-h-[40vh] lg:min-h-0">
            <img class="w-auto max-h-[86vh] object-contain object-top" src="/img/woman-banner.png" alt="tabaco token">

            <div
                class="hidden lg:flex absolute top-4/5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 gap-3 sm:gap-5 bg-white p-2 sm:p-3 rounded-lg shadow-lg z-10">
                <div class="flex flex-col justify-center items-center">
                    <img src="/img/qr.png" alt="QR Code" class="h-48 sm:h-40 md:h-48 lg:h-56 w-auto">
                    <p class="font-bold">Scan the QR code</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.button-copy {
    background: linear-gradient(to bottom, rgba(255, 193, 48, 1) 7.000000000000001%, rgba(149, 104, 0, 1) 73%);
}
</style>