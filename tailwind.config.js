/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include TypeScript files
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient':'linear-gradient(90deg, #bfdbfe 0%, #60a5fa 100%)', // Custom gradient
      },
    },
  },
  plugins: [],
}

