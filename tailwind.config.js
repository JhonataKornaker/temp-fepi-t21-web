/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        auth: '1fr auto',
      },

      fontFamily: {
        sans: 'Inter, sans-serif',
        error: 'Plus Jakarta Sans, sans-serif',
      },

      colors: {
        customText: '#84CC16',
        customBackground: '#273447'
      }
    },
  },
  plugins: [],
}
