/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3498db",
        'primary-black':'#000000',
        'primary-white':'#ffffff',
        'transparent-white':'#ffffff95',
        'transparent-black':'#000000ca',
        'transparent-black2x':'#00000062',
        'primary-red':'#ef4444',
        'primary-green':'#22c55e',
        'primary-blue':'#3b82f6',
        'primary-yellow':'#eab308',

    },
    backgroundImage:{
      'theme1': "url('assets/themes/theme1.webp')",
    },
  },
  safelist: [
    'bg-primary-red',
    'bg-primary-green',
    'bg-primary-blue',
    'bg-primary-yellow',
    'bg-white',
    'bg-black',
    'text-primary-red',
    'text-primary-green',
    'text-primary-blue',
    'text-primary-yellow',
    'text-gray-300',
    'text-gray-400',
  ],
  plugins: [],
}
}