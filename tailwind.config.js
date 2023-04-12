/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: "#050621",
        white: "#fff",
        gainsboro: {
          "100": "#e6e6ec",
          "200": "#d9d9d9",
          "300": "rgba(217, 217, 217, 0.04)",
        },
        darkslateblue: { "100": "#6568b4", "200": "#262656" },
        whitesmoke: { "100": "#f5f5f5", "200": "#eaeaea", "300": "#e9e9e9" },
        blue: "#6701fc",
        blueviolet: "#8c02f9",
        dimgray: "#545356",
        steelblue: "#8c8ec3",
        tomato: "#ff5733",
        royalblue: "#7479f0",
      },
      fontFamily: { poppins: "Poppins" },
      borderRadius: { "53xl": "72px", mid: "17px", "152xl-5": "171.5px" },
    },
    fontSize: {
      "5xl": "24px",
      xl: "20px",
      lg: "18px",
      "7xl": "26px",
      "81xl": "100px",
      "17xl": "36px",
    },
  },
  corePlugins: { preflight: false },
};
