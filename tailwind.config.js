/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        instaStart: '#f58529',
        instaMiddle: '#dd2a7b',
        instaEnd: '#515bd4',
      },
      backgroundImage: {
        'insta-gradient': 'linear-gradient(45deg, #f58529, #dd2a7b, #515bd4)',
      },
    },
  },
  plugins: [],
}

