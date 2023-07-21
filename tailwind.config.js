/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        logo: "#B68F04",
        text: "#40442B",
        subtext: "#513237",
      },
    },
  },
  plugins: [],
};
