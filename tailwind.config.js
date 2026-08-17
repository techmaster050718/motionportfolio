/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "#0d1116",
          secondary: "#14181f",
        },
        accent: {
          DEFAULT: "#00df8f",
          dark: "#00b373",
        },
        text: {
          primary: "#ffffff",
          secondary: "#9ca3af",
        },
        border: "rgba(255,255,255,0.10)",
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
      }
    },
  },
  plugins: [],
}