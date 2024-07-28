/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'redmi': '360px', // Custom breakpoint for smaller Redmi devices
        'redmi-lg': '375px', // Custom breakpoint for larger Redmi devices
      },
    },
  },
  plugins: [],
}
 