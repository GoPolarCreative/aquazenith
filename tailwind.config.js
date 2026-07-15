/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#eef2fb',
          100: '#d5e0f4',
          200: '#abbfea',
          300: '#7599db',
          400: '#4d77cc',
          500: '#2a57b8',
          600: '#1e4399',
          700: '#163273',
          800: '#0e2150',
          900: '#0a1a3d',
          950: '#060e22',
        },
        sky: {
          400: '#3eb8f0',
          500: '#1aa8e8',
          600: '#0e8ec8',
        },
      },
      fontFamily: {
        heading: ['"Barlow Condensed"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
