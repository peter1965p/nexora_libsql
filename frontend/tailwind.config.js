/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        accent: '#c8f55a',
        bg: '#08080c',
        surface: 'rgba(255,255,255,0.03)',
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body:    ['DM Sans', 'sans-serif'],
      },
      fontSize: {
        '2xs': '0.7rem',
        'xs':  ['0.75rem', { lineHeight: '1rem' }],
      },
      borderColor: {
        subtle: 'rgba(255,255,255,0.08)',
        mid:    'rgba(255,255,255,0.12)',
        strong: 'rgba(255,255,255,0.2)',
      },
      backgroundColor: {
        card:  'rgba(255,255,255,0.03)',
        card2: 'rgba(255,255,255,0.06)',
      },
      boxShadow: {
        card: '0 32px 80px rgba(0,0,0,0.5)',
      },
      maxWidth: {
        content: '1280px',
      },
      keyframes: {
        pulse2: {
          '0%, 100%': { opacity: '1' },
          '50%':       { opacity: '0.3' },
        },
      },
      animation: {
        pulse2: 'pulse2 2s infinite',
      },
    },
  },
  plugins: [],
};
