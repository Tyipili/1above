/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/app/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: "#0b0b0b",
          gold: "#d3a546",
          gray: "#f5f5f5"
        }
      }
    }
  },
  plugins: [],
};
