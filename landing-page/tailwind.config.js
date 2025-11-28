/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neutral-primary': '#ffffff',
        'neutral-secondary-soft': '#f8fafc',
        'neutral-tertiary': '#f1f5f9',
        'brand': '#2563eb',
        'fg-brand': '#ffffff',
        'heading': '#0f172a',
        'body': '#334155',
        'default': '#e2e8f0',
      },
      borderRadius: {
        'base': '0.375rem',
      },
    },
  },
  plugins: [],
}
