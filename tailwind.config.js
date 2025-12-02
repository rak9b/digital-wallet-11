/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eef9f8",
          100: "#d5f0ee",
          200: "#afe2de",
          300: "#7ccfc9",
          400: "#4db4ad",
          500: "#2d9892",
          600: "#207c78",
          700: "#0f6b66", // Deep Teal
          800: "#115653",
          900: "#134846",
          950: "#082b2a",
        },
        secondary: {
          50: "#fff3f2",
          100: "#ffe3e0",
          200: "#ffcac6",
          300: "#ffa29c",
          400: "#ff6b61", // Electric Coral
          500: "#f84639",
          600: "#e52e20",
          700: "#c12115",
          800: "#9f1e15",
          900: "#831e17",
          950: "#480b07",
        },
        surface: {
          light: "#F7F9FB",
          dark: "#121417",
        },
        success: "#2ECC71",
        warning: "#F39C12",
        error: "#E74C3C",
        info: "#3DA9F5",
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Montserrat', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'subtle': '0 2px 10px rgba(0, 0, 0, 0.03)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
      },
    },
  },
  plugins: [],
};
