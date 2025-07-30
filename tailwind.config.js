/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0057B8', // Azul principal
          light: '#2196F3',   // Azul claro
          dark: '#003366',    // Azul escuro
        },
        accent: {
          DEFAULT: '#00CFFF', // Azul acento vibrante
        },
        neutral: {
          DEFAULT: '#F5F7FA', // Branco suave
          dark: '#E5E9F2',    // Cinza claro
        },
        black: '#111827',
        white: '#FFFFFF',
        gray: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'Montserrat', 'ui-sans-serif', 'system-ui'],
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        bounceUpDown: 'bounceUpDown 0.8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-1px)' },
        },
        bounceUpDown: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
};
