// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require('tailwindcss/colors')

module.exports = {
  // purge options for production build
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './containers/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    // define your own colors
    // if you want to use tw color, extend this config
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      blue: {
        light: '#60a5fa',
        DEFAULT: '#3b82f6',
        dark: '#2563eb',
      },
      gray: {
        darkest: '#1f2d3d',
        dark: '#3c4858',
        DEFAULT: '#c0ccda',
        light: '#e0e6ed',
        lightest: '#f9fafc',
      },
      green: {
        dark: '#059669',
        DEFAULT: '#10b981',
        light: '#34d399',
      },
      indigo: {
        dark: '#4338ca',
        DEFAULT: '#6366f1',
        light: '#818cf8',
      },
      red: {
        dark: '#dc2626',
        DEFAULT: '#ef4444',
        light: '#f87171',
      },
    },
    extend: {},
  },
  variants: {},
  plugins: [],
}
