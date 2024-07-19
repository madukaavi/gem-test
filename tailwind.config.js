/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': 'rgb(220, 248, 239,0.4)',
        'custom-purple': 'rgb(254, 226, 248, 0.4)',
      },
    },
  },
  plugins: [],
}

