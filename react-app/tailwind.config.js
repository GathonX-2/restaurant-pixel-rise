/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Roboto"', 'ui-sans-serif', 'system-ui'],
        display: ['"Dancing Script"', 'cursive']
      },
      colors: {
        brand: {
          50: '#f6f7fb',
          100: '#e7e9f5',
          200: '#cdd3eb',
          300: '#a7b4db',
          400: '#7c90c7',
          500: '#5e72b0',
          600: '#4d5b94',
          700: '#404a79',
          800: '#373f64',
          900: '#303551'
        }
      }
    }
  },
  plugins: []
};
