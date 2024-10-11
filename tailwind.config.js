/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        kanit: ['Kanit', 'sans-serif'],   // Menambahkan font Kanit
        roboto: ['Roboto', 'sans-serif'],
        transitionDuration: {
          '2000': '2000ms',
        },
      }
    },
    keyframes:{
      moveImage: {
        "0%": {transform: "translateX(100%"},
        "100%": {transform: "translateX(-100%"},
      }, 
      scrollText: {
        '0%': { transform: 'translateX(100%)' },
        '100%': { transform: 'translateX(-100%)' },
      },
      shuffle: {
        '0%, 100%': { transform: 'translate(0, 0)' },
        '25%': { transform: 'translate(100%, 0)' },
        '50%': { transform: 'translate(100%, 100%)' },
        '75%': { transform: 'translate(0, 100%)' },
      },
      beam1: {
        '0%': { width: '0%' },
        '100%': { width: '100%' },
      },
      beam2: {
        '0%': { width: '0%' },
        '100%': { width: '100%' },
      },
      animloader: {
        '0%': { backgroundPosition: '0%' },
        '100%': { backgroundPosition: '100%' },
      },
      
      
    },
    animation:{
      moveImage: "moveImage 20s linear infinite",
      bounce: "bounce 3s infinite",
      pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      'scroll': 'scrollText 20s linear infinite',
      shuffle: 'shuffle 10s ease-in-out infinite',
      beam1: 'beam1 2s ease-in-out infinite',
      beam2: 'beam2 2s ease-in-out infinite 0.5s',
      animloader: 'animloader 6s linear infinite',
    },
    screens:{
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
}

