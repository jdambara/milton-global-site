/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#FE0100',
          DEFAULT: '#FE0100',
          500: '#FF444F',
          600: '#E93B46',
        },
        gray: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E5E7EB',
          500: '#9CA3AF',
          600: '#6B7280',
          700: '#4B5563',
          900: '#0F172A',
        },
        success: '#16A34A',
        error: '#DC2626',
        warning: '#F59E0B',
        info: '#0EA5E9',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace'],
      },
      borderRadius: {
        sm: '2px',
        DEFAULT: '4px',
        md: '6px',
        lg: '8px',
      },
      spacing: {
        1: '4px',
        2: '8px',
        3: '12px',
        4: '16px',
        5: '20px',
        6: '24px',
        8: '32px',
        10: '40px',
        12: '48px',
        16: '64px',
        20: '80px',
      },
      fontSize: {
        caption: ['12px', '12px'],
        small: ['12px', '14px'],
        body: ['14px', '16px'],
        'body-large': ['16px', '18px'],
        h3: ['18px', '20px'],
        h2: ['20px', '24px'],
        h1: ['30px', '36px'],
      },
      transitionDuration: {
        fast: '120ms',
        normal: '200ms',
        slow: '300ms',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(.2,.8,.2,1)',
      },
      boxShadow: {
        sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        DEFAULT: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
      },
      screens: {
        sm: '640px',
        md: '960px',
        lg: '1120px',
      },
    },
  },
  plugins: [],
};


