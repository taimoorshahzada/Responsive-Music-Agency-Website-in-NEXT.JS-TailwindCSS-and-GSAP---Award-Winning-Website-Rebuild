/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        monument: ["Monument Extended"],
        neutralFace: ["Neutral Face"],
        segoe: ["Segoe UI"],
      },
    },
  },
  plugins: [],
};
