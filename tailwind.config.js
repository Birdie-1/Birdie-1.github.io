/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        theme: {
          page: 'var(--bg-page)',
          card: 'var(--bg-card)',
          'card-hover': 'var(--bg-card-hover)',
          inset: 'var(--bg-inset)',
          subtle: 'var(--bg-subtle)',
          border: 'var(--border)',
          'border-strong': 'var(--border-strong)',
          'border-hover': 'var(--border-hover)',
          main: 'var(--text-main)',
          sub: 'var(--text-sub)',
          dim: 'var(--text-dim)',
          accent: 'var(--accent)',
          'accent-hover': 'var(--accent-hover)',
          'accent-subtle': 'var(--accent-subtle)',
          'accent-border': 'var(--accent-border)',
          'accent-text': 'var(--accent-text)',
          'accent-purple': 'var(--accent-purple)',
        },
        codecademy: {
          yellow: '#FFD400',
          yellowHover: '#E6BF00',
          purple: '#3A10E5',
          navy: '#10162F',
          navyDark: '#0B0F20',
          navyLight: '#1E2746',
          sand: '#EBE5DF',
          sandDark: '#DDD5CC',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
        mono: ['"Geist Mono"', '"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'codecademy': '3px 3px 0px #10162F',
        'codecademy-sm': '2px 2px 0px #10162F',
        'modal': '0 25px 60px -15px rgba(16, 22, 47, 0.8)',
      }
    },
  },
  plugins: [],
}
