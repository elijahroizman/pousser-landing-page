/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./App.tsx"
  ],
  theme: {
    extend: {
      letterSpacing: {
        tightest: '-.075em',
      }
    },
  },
  plugins: [],
}
