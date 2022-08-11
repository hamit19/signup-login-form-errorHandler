/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        P404: "url('/src/img/p404.png')",
      },
    },
  },
  plugins: [],
};
