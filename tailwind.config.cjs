/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#34e507',
        'primary-fixed': '#79ff59',
        secondary: '#abc7ff',
        'secondary-container': '#448fff',
        background: '#131313',
        surface: '#131313',
        'surface-container-low': '#1c1b1b',
        'surface-container-high': '#2a2a2a',
        'surface-container-highest': '#353534',
        'surface-container-lowest': '#0e0e0e',
        'on-surface': '#e5e2e1',
        'on-surface-variant': '#c1c6d7',
        'outline-variant': '#414754',
      },
      fontFamily: {
        headline: ['Outfit', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};
