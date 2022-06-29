/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  presets: [require('@gregalexsmith/components/tailwind.config')],
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/@gregalexsmith/components/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      screens: {
        // sm: '540px'
        // md: '768px',
        // lg: '1024px',
        // xl: '1280px',
        // '2xl': '1536px'
      }
    }
  },
  plugins: []
};
