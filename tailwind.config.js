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
        cream: {
          50: '#FDFBF7',
          100: '#F7F3EC', // reference cream panel
          200: '#EFE8DC',
          300: '#E2D7C3',
          400: '#C8B699',
        },
        charcoal: {
          900: '#201F1C',
          800: '#3B3A33', // reference dark brown charcoal text
          700: '#545249',
          600: '#737064',
          500: '#949082',
        },
        amberAccent: {
          DEFAULT: '#FFA94D',
          hover: '#FF922B',
          light: '#FFE8CC',
          dark: '#E8590C',
        },
        softTeal: {
          DEFAULT: '#7FBFC4',
          light: '#E6F4F5',
          dark: '#4B9DA3',
        },
        mustard: {
          DEFAULT: '#F2C14E',
          light: '#FEF6E0',
          dark: '#D99B16',
        },
        darkBg: {
          base: '#171614',
          surface: '#23211D',
          card: '#2D2A24',
          border: '#3D3931',
        }
      },
      fontFamily: {
        display: ['Fredoka', 'Baloo 2', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', '"DM Sans"', 'system-ui', 'sans-serif'],
        script: ['Caveat', 'cursive'],
      },
      borderRadius: {
        'hero-panel': '3.5rem',
        'hero-panel-mobile': '2rem',
      },
      boxShadow: {
        'soft-warm': '0 20px 40px -15px rgba(59, 58, 51, 0.08)',
        'float-pill': '0 8px 24px -6px rgba(255, 169, 77, 0.25)',
      }
    },
  },
  plugins: [],
}

