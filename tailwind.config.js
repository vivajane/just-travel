/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'fun-bg': "url('/funpark.jpg')",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
        comfortaa: ["var(--font-comfortaa)", "cursive"],
        roboto: ["var(--font-roboto)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
