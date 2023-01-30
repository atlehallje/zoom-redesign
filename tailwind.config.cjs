/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Internacional", "Helvetica", "Arial",],
        "open-sans": ['"Open Sans"'],
        handwriting: ["Pacifico"],
      },
      colors: {
        "zoom-blue": "#0b5cff",
        "light-blue": "#3b82f6",
        "dark-blue": "#1e3a8a",
        "nav-blue": "#0956B5",
        "darker-blue": "#110d40",
        "lighter-blue": "#c3d6e0",
        "gray": "#424240",
        "turqoise": "#00ede7",
        "light-gray": "#666484",
      },
    },
  },
  plugins: [],
};