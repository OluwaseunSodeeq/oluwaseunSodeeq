/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        "header-bg": "#fafbfc",
        "text-color": "#333437",
        "blue-text": "#005CB7",
        "btn-text-color": "#67696E",
        "text-color-two": "#F2F4F6",
        "plain-white": "fff",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        outfit: ["Outfit", "serif"],
        quicksand: ["Quicksand", "serif"],
      },
      boxShadow: {
        custom: "0px 4px 40px 0px rgba(127, 181, 230, 0.12)",
      },
    },
  },
  plugins: [],
};
