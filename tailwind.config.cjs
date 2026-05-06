/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,tsx}'],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        primary: '#050505',
        secondary: '#8a8070',
        tertiary: '#0d0d0b',
        quaternary: '#141410',
        gold: '#D4AF37',
        'gold-light': '#FFD700',
        'gold-dim': '#8B7536',
        'gold-warm': '#C9A227',
        'black-100': '#0a0a08',
        'black-200': '#080806',
        'white-100': '#f3f3f3',
      },
      boxShadow: {
        card: '0px 35px 120px -15px rgba(212, 175, 55, 0.15)',
        'gold-glow': '0 0 20px rgba(212, 175, 55, 0.4), 0 0 60px rgba(212, 175, 55, 0.15)',
        'gold-sm': '0 0 10px rgba(212, 175, 55, 0.3)',
        glass: '0 8px 32px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(212, 175, 55, 0.1)',
      },
      screens: {
        xs: '450px',
        '3xl': '1920px',
      },
      backgroundImage: {
        'hero-pattern': "url('/src/assets/herobg.png')",
        'gold-gradient': 'linear-gradient(135deg, #FFD700, #D4AF37, #C9A227)',
        'gold-shimmer': 'linear-gradient(90deg, #8B7536 0%, #FFD700 25%, #D4AF37 50%, #FFD700 75%, #8B7536 100%)',
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'shimmer': 'shimmer 3s linear infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-gold': 'pulseGold 3s ease-in-out infinite',
        'blink': 'blink 1s ease-in-out infinite',
        'orb-1': 'floatOrb1 20s ease-in-out infinite',
        'orb-2': 'floatOrb2 25s ease-in-out infinite',
        'orb-3': 'floatOrb3 30s ease-in-out infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(212, 175, 55, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(212, 175, 55, 0.6), 0 0 80px rgba(212, 175, 55, 0.2)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        floatOrb1: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(100px, 50px) scale(1.1)' },
          '66%': { transform: 'translate(50px, 100px) scale(0.95)' },
        },
        floatOrb2: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(-80px, -60px) scale(1.05)' },
          '66%': { transform: 'translate(-40px, 80px) scale(0.9)' },
        },
        floatOrb3: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(-60px, -80px) scale(1.15)' },
        },
      },
    },
  },
  plugins: [],
};
