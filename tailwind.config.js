/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px", // Exemplo de breakpoint personalizado para "small"
      md: "768px",
      lg: "1024px",
    },
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        sky: "url('../public/back.aviv')",
      },
    },
  },
  plugins: [],
};
