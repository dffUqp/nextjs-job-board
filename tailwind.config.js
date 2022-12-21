/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '9px',
      },
      screens: {
        DEFAULT: '1400px',
      },
    },
    screens: {
      xxl: { max: '1600px' },
      xl: { max: '1230px' },
      lg: { max: '976px' },
      md: { max: '768px' },
      sm: { max: '580px' },
    },
    fontWeight: {
      light: 300,
      normal: 400,
      semibold: 600,
      bold: 700,
    },
    fontFamily: {
      ProximaNova: 'ProximaNova',
      Roboto: 'Roboto',
    },
    fontSize: {
      sm: ['16px', '19px'],
      base: ['13px', '25px'],
      lg: ['12px', '16px'],
      md: ['18px', '24px'],
      xl: ['20px', '25px'],
      xxl: ['24px', '30px'],
    },
    extend: {
      colors: {
        dark: 'var(--dark)',
        'dark-100': 'var(--dark-100)',
        'dark-100-opacity': 'var(--dark-100-opacity)',
        gray: 'var(--gray)',
        blue: 'var(--blue)',
        secondary: 'var(--secondary)',
        golden: 'var(--golden)',
        'white-100': 'var(--white-100)',
        'white-200': 'var(--white-200)',
        'option-selected-100': 'var(--option-selected-100)',
        'option-border-100': 'var(--option-border-100)',
        'option-selected-200': 'var(--option-selected-200)',
        'option-border-200': 'var(--option-border-200)',
      },
      boxShadow: {
        main: '2px 1px 7px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
