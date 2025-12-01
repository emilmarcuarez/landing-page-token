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
                    <form @submit="handleSubmit">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div class="mb-4">
                                <label class="block text-white text-sm font-bold mb-2" for="name">Name</label>
                                <input
                                    class="w-full px-3 py-2 rounded-md text-white border border-zinc-700 focus:outline-none focus:border-amber-500 bg-zinc-900"
                                    type="text" id="name" placeholder="Your Name" v-model="formData.name"
                                    :disabled="isLoading" required>
                            </div>
                            <div class="mb-4">
                                <label class="block text-white text-sm font-bold mb-2" for="email">Email</label>
                                <input
                                    class="w-full px-3 py-2 rounded-md text-white border border-zinc-700 focus:outline-none focus:border-amber-500 bg-zinc-900"
                                    type="email" id="email" placeholder="Your Email" v-model="formData.email"
                                    :disabled="isLoading" required>
                            </div>
                        </div>
                        <div class="mb-4">
                            <label class="block text-white text-sm font-bold mb-2" for="message">Message</label>
                            <textarea
                                class="w-full px-3 py-2 rounded-md text-white border border-zinc-700 focus:outline-none focus:border-amber-500 bg-zinc-900"
                                id="message" rows="4" placeholder="Your Message" v-model="formData.message"
                                :disabled="isLoading" required></textarea>
                        </div>
                        <button
                            class="bg-amber-600 button-contact hover:bg-amber-700 text-white font-bold py-3 px-5 rounded-full transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                            type="submit" :disabled="isLoading">
                            <span v-if="!isLoading">Send</span>
                            <span v-else class="flex items-center justify-center">
                                <svg class="animate-spin h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none"
                                    viewBox="0 0 24 24">
                                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                        stroke-width="4"></circle>
                                    <path class="opacity-75" fill="currentColor"
                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                                    </path>
                                </svg>
                                Sending...
                            </span>
                        </button>
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

        <Transition name="toast">
            <div v-if="showToast"
                :class="['fixed top-8 right-8 z-50 px-6 py-4 rounded-lg shadow-lg flex items-center space-x-3 max-w-md', toastType === 'success' ? 'bg-green-600' : 'bg-red-600']">
                <svg v-if="toastType === 'success'" class="w-6 h-6 text-white" fill="none" stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <svg v-else class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12">
                    </path>
                </svg>
                <span class="text-white font-medium">{{ toastMessage }}</span>
            </div>
        </Transition>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import emailjs from '@emailjs/browser'

const formData = reactive({
    name: '',
    email: '',
    message: ''
})

const isLoading = ref(false)
const showToast = ref(false)
const toastMessage = ref('')
const toastType = ref('success')

const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
}

const validateForm = () => {
    if (!formData.name.trim()) {
        showToastMessage('Please enter your name', 'error')
        return false
    }
    if (!formData.email.trim()) {
        showToastMessage('Please enter your email', 'error')
        return false
    }
    if (!isValidEmail(formData.email)) {
        showToastMessage('Please enter a valid email address', 'error')
        return false
    }
    if (!formData.message.trim()) {
        showToastMessage('Please enter a message', 'error')
        return false
    }
    return true
}

const showToastMessage = (message, type = 'success') => {
    toastMessage.value = message
    toastType.value = type
    showToast.value = true
    setTimeout(() => {
        showToast.value = false
    }, 4000)
}

const resetForm = () => {
    formData.name = ''
    formData.email = ''
    formData.message = ''
}

const handleSubmit = async (event) => {
    event.preventDefault()

    if (!validateForm()) {
        return
    }

    isLoading.value = true

    try {
        emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY)

        const response = await emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            {
                from_name: formData.name,
                from_email: formData.email,
                message: formData.message,
                to_name: 'Team'
            }
        )

        if (response.status === 200) {
            showToastMessage('Message sent successfully! We\'ll get back to you soon.', 'success')
            resetForm()
        } else {
            throw new Error('Failed to send message')
        }
    } catch (error) {
        console.error('EmailJS Error:', error)
        showToastMessage('Failed to send message. Please try again later.', 'error')
    } finally {
        isLoading.value = false
    }
}
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

.toast-enter-active {
    animation: toast-in 0.3s ease-out;
}

.toast-leave-active {
    animation: toast-out 0.3s ease-in;
}

@keyframes toast-in {
    from {
        transform: translateX(100%);
        opacity: 0;
    }

    to {
        transform: translateX(0);
        opacity: 1;
    }
}

@keyframes toast-out {
    from {
        transform: translateX(0);
        opacity: 1;
    }

    to {
        transform: translateX(100%);
        opacity: 0;
    }
}
</style>
