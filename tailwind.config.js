/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-orange": {
          600: "#FF6435",
          700: "#ff3b00",
        },

        "primary-black": {
          100: "#f8f8f8",
          500: "#99999933",
          600: "#200D00",
          700: "#000000",
        },
      },
      //
      height: {
        "menu-open": "calc(100vh - 73px)",
      },
    },
  },
  plugins: [],
};
