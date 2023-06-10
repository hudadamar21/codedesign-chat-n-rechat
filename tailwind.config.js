/** @type {import('tailwindcss').Config} */
export default {
 content: [
    "./index.html",
    "./src/**/*.{svelte,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4A72FF',
        secondary: '#F4F7FF',
        dark: '#0C1B4D',
        cream: '#FFD39F'
      },
      fontFamily: {
        'dm-sans': 'DM Sans, sans-serif',
        'inter': 'Inter, sans-serif',
        'source-sans': 'Source Sans 3, sans-serif',
      }
    },
  },
  plugins: [],
}

