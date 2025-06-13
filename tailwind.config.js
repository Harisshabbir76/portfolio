/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: '#0f0f0f',
        surface: '#141414',
        neon: '#00ffff',
        primary: '#00ffff',
        secondary: '#1e40af',
        textPrimary: '#ffffff',
        textSecondary: '#d1d5db',
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba(0, 255, 255, 0.2)',
        neon: '0 0 20px rgba(0,255,255,0.3)',
      },
      animation: {
        'float': 'float 20s linear infinite',
        'pulse-slow': 'pulse 10s infinite',
        'spin-slow': 'spin 60s linear infinite',
      },
      keyframes: {
        float: {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
          '100%': { transform: 'translateY(0px)' },
        },
      },
      backgroundImage: {
        'radial-neon': 'radial-gradient(circle, rgba(0,255,255,0.2), transparent 70%)',
      },
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
};
