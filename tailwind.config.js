/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens:{
      'xsm': '0px',
      'sm': '230px',
      'm': '368px',
      'md': '768px',
      'ld': '1000px',
      'xld':'1500px'
    },
    extend: {
      colors: {
        'Header': '#8da9c4',
        'Footer': '#1d2d3a',
        'Easy': '#4cde2f', 
        'Medium': '#c47621',
        'Hard': '#800909',
        'Insane': '#8a8880',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    
  },
  plugins: [],
}
