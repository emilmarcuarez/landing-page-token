<template>
    <div class="bg-zinc-950 py-20 px-6 relative overflow-hidden">
        <div class="absolute bottom-0 left-0 w-90 h-150 bg-no-repeat opacity-10 rotate-180"
            style="background-image: url('/img/figura-fondo.png'); background-size: 200% 100%; background-position: 0% 0%; animation: slightRotate 10s ease-in-out infinite;">
        </div>
        <div class="container mx-auto max-w-15xl">
            <div class="text-center mb-16 relative">
                <h2 class="absolute left-1/2 top-1/4 -translate-x-1/2 -translate-y-1/2 text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-transparent opacity-10 whitespace-nowrap pointer-events-none select-none"
                    style="-webkit-text-stroke: 2px rgba(255, 255, 255, 0.5); text-stroke: 2px rgba(255, 255, 255, 0.5);">
                    ABOUT US</h2>
                <h2 class="relative text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">About Us
                </h2>
            </div>

            <div class="flex flex-col gap-3 justify-center items-center">
                <h3 class="text-white text-xl font-bold inline-block border-b-[3px] border-yellow-500 pb-2">What is
                    CigarCrypto?</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h4 class="text-white text-xl font-bold pt-7">CigarCrypto</h4>
                        <p class="text-white text-lg pt-5">CigarCrypto is a Solana token designed to unite lifestyle,
                            exclusivity, and decentralized finance. Under the domain cigarcrypto.vip, we offer a
                            distinctive experience: a token that represents a lifestyle, a community, and an exclusive
                            membership to the first on-chain cigar club. Tokenization enables worldwide access to a
                            premium cigar & lifestyle community, unifying millions of cigar connoisseurs at a global
                            scale. Our token enables access to our global community with exclusive rewards and offerings
                            to members; enhanced by the speed and security of the Solana blockchain.</p>
                    </div>
                    <div>
                        <img src="/img/aboutUs.png" alt="about us" class="mx-auto my-6 w-100 rounded-lg shadow-lg">
                    </div>
                </div>
            </div>

            <div class="flex flex-col gap-3 justify-center items-center mt-16 mb-8">
                <h3 class="text-white text-xl font-bold inline-block border-b-[3px] border-yellow-500 pb-2">Our Mission
                </h3>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
                <div
                    class="group relative bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-2xl p-8 hover:shadow-2xl hover:shadow-yellow-600/20 transition-all duration-300 border border-zinc-700 hover:border-yellow-600/50 mt-8">
                    <div
                        class="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-700 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-amber-600/50">
                        <span class="text-3xl font-bold text-white">1</span>
                    </div>
                    <div
                        class="absolute inset-0 bg-gradient-to-br from-yellow-500/0 to-yellow-600/0 group-hover:from-yellow-600/5 group-hover:to-yellow-500/10 rounded-2xl transition-all duration-300">
                    </div>
                    <div class="relative ">
                        <h3 class="text-2xl font-bold text-white mb-4 mt-4">Community</h3>
                        <p class="text-gray-400 leading-relaxed">
                            Build a global community focused on cigar culture and exclusive membership opportunities to become the first worldwide on-chain cigar club.
                        </p>
                    </div>
                </div>

                <div
                    class="group relative bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-2xl p-8 hover:shadow-2xl hover:shadow-amber-600/20 transition-all duration-300 border border-zinc-700 hover:border-amber-600/50 mt-8">

                    <div
                        class="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-700 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-amber-600/50">
                        <span class="text-3xl font-bold text-white">2</span>
                    </div>
                    <div
                        class="absolute inset-0 bg-gradient-to-br from-yellow-600/0 to-yellow-600/0 group-hover:from-yellow-600/5 group-hover:to-yellow-600/10 rounded-2xl transition-all duration-300">
                    </div>
                    <div class="relative">
                        <h3 class="text-2xl font-bold text-white mb-4 mt-4">Exclusivity </h3>
                        <p class="text-gray-400 leading-relaxed">
                            Members may unlock access to exclusive offerings through our partnerships with premium cigar brands. Create a new & unique way to shop for cigars online.
                        </p>
                    </div>
                </div>

                <div
                    class="group relative bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-2xl p-8 hover:shadow-2xl hover:shadow-amber-600/20 transition-all duration-300 border border-zinc-700 hover:border-yellow-600/50 mt-8">

                    <div
                        class="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-700 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-yellow-600/50">
                        <span class="text-3xl font-bold text-white">3</span>
                    </div>
                    <div
                        class="absolute inset-0 bg-gradient-to-br from-amber-600/0 to-amber-600/0 group-hover:from-amber-600/5 group-hover:to-amber-600/10 rounded-2xl transition-all duration-300">
                    </div>
                    <div class="relative ">
                        <h3 class="text-2xl font-bold text-white mb-4 mt-4">Security </h3>
                        <p class="text-gray-400 leading-relaxed">
                        Enable access to unparalleled speed & security via tokenization of membership & rewards on the Solana blockchain.
                        </p>
                    </div>
                </div>
            </div>

            <!-- <div class="flex flex-col gap-3 justify-center items-center mt-16 mb-8">
                <h3 class="text-white text-xl font-bold inline-block border-b-[3px] border-yellow-500 pb-2">Commitment
                    to Transparency and Community
                </h3>
                <p class="text-white text-xl pt-6">We believe in transparency from the start: we list the token
                    distribution, its use, its utility, and
                    we open communication channels so that every member of the community feels part of the project.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate est nam temporibus enim. Eum
                    culpa, odio ab eaque placeat rem necessitatibus obcaecati repudiandae saepe hic sint quod et
                    cupiditate corrupti.</p>
            </div> -->
        </div>
    </div>
</template>

<script setup>

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
