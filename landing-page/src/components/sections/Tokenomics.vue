<template>
  <div class="bg-zinc-950 py-12 sm:py-16 md:py-20 px-4 sm:px-6">
    <div class="container mx-auto max-w-7xl">
      <div class="text-center mb-8 sm:mb-12 relative">
        <h2
          class="absolute left-1/2 top-1/7 -translate-x-1/2 -translate-y-1/2 text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-transparent opacity-10 whitespace-nowrap pointer-events-none select-none"
          style="-webkit-text-stroke: 2px rgba(255, 255, 255, 0.5); text-stroke: 2px rgba(255, 255, 255, 0.5);">
          TOKENOMICS</h2>
        <h2 class="relative text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4 ">Tokenomics</h2>
        <p class="text-gray-400 text-base sm:text-lg md:text-xl px-4 max-w-3xl mx-auto pt-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <div class="w-full p-4 sm:p-6">
            <h3 class="text-white text-lg sm:text-xl font-bold mb-4 text-center">Lorem Ipsum Distribution</h3>
            <canvas ref="chart1"></canvas>
          </div>
          <div class="w-full p-4 sm:p-6">
            <h3 class="text-white text-lg sm:text-xl font-bold mb-4 text-center">Dolor Sit Amet Allocation</h3>
            <canvas ref="chart2"></canvas>
          </div>
        </div>

        <div class="text-white flex flex-col justify-center p-6 sm:p-8">
          <h3 class="text-xl sm:text-2xl font-bold mb-6 text-center">Token Breakdown</h3>
          <div class="space-y-3 sm:space-y-4">
            <div class="flex items-center justify-center sm:justify-start">
              <div class="w-3 h-3 sm:w-4 sm:h-4 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
              <span class="text-sm sm:text-base md:text-lg">Lorem ipsum dolor sit amet: 40%</span>
            </div>
            <div class="flex items-center justify-center sm:justify-start">
              <div class="w-3 h-3 sm:w-4 sm:h-4 bg-green-500 rounded-full mr-3 flex-shrink-0"></div>
              <span class="text-sm sm:text-base md:text-lg">Consectetur adipiscing elit: 30%</span>
            </div>
            <div class="flex items-center justify-center sm:justify-start">
              <div class="w-3 h-3 sm:w-4 sm:h-4 bg-yellow-500 rounded-full mr-3 flex-shrink-0"></div>
              <span class="text-sm sm:text-base md:text-lg">Sed do eiusmod tempor: 15%</span>
            </div>
            <div class="flex items-center justify-center sm:justify-start">
              <div class="w-3 h-3 sm:w-4 sm:h-4 bg-red-500 rounded-full mr-3 flex-shrink-0"></div>
              <span class="text-sm sm:text-base md:text-lg">Incididunt ut labore: 10%</span>
            </div>
            <div class="flex items-center justify-center sm:justify-start">
              <div class="w-3 h-3 sm:w-4 sm:h-4 bg-purple-500 rounded-full mr-3 flex-shrink-0"></div>
              <span class="text-sm sm:text-base md:text-lg">Et dolore magna aliqua: 5%</span>
            </div>
          </div>

          <div class="mt-6 sm:mt-8">
            <h4 class="text-lg sm:text-xl font-bold mb-4 text-center sm:text-left">Use Case Details</h4>
            <ul class="list-disc list-inside space-y-2 text-gray-300 text-sm sm:text-base text-center sm:text-left">
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Consectetur adipiscing elit.</li>
              <li>Sed do eiusmod tempor incididunt.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Chart from 'chart.js/auto'

const chart1 = ref(null)
const chart2 = ref(null)

onMounted(() => {
  if (chart1.value) {
    new Chart(chart1.value, {
      type: 'doughnut',
      data: {
        labels: ['Lorem ipsum', 'Dolor sit amet', 'Consectetur adipiscing'],
        datasets: [{
          data: [40, 30, 15],
          backgroundColor: ['#3b82f6', '#10b981', '#f59e0b'],
          borderWidth: 2,
          borderColor: '#1f2937'
        }]
      },
      options: {
        cutout: '65%',
        responsive: true,
        aspectRatio: 1,
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              color: '#ffffff'
            }
          }
        }
      }
    })
  }

  if (chart2.value) {
    new Chart(chart2.value, {
      type: 'doughnut',
      data: {
        labels: ['Incididunt ut labore', 'Et dolore magna', 'Aliqua quis nostrud'],
        datasets: [{
          data: [50, 30, 20],
          backgroundColor: ['#f59e0b', '#8b5cf6', '#10b981'],
          borderWidth: 2,
          borderColor: '#1f2937'
        }]
      },
      options: {
        cutout: '65%',
        responsive: true,
        aspectRatio: 1,
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              color: '#ffffff'
            }
          }
        }
      }
    })
  }
})
</script>

<style scoped></style>