/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: '#0f172a',    // Tailwind slate-900
        cardBg: 'rgba(30, 41, 59, 0.7)', // Slate-800 with opacity
        primary: '#3b82f6',   // Blue-500
        secondary: '#8b5cf6', // Violet-500
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
