/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        lightcoral: {
          "100": "#d8727d",
          "200": "rgba(216, 114, 125, 0.1)",
        },
        slategray: "#787486",
        gray: "#0d062d",
        mediumseagreen: "#68b266",
        darkseagreen: "rgba(131, 194, 157, 0.2)",
        silver: {
          "100": "#c4c4c4",
          "200": "rgba(196, 196, 196, 0.3)",
        },
        peru: "#d58d49",
        burlywood: "rgba(223, 168, 116, 0.2)",
        blueviolet: {
          "100": "#5030e5",
          "200": "rgba(80, 48, 229, 0.08)",
          "300": "rgba(80, 48, 229, 0.59)",
          "400": "rgba(80, 48, 229, 0.06)",
        },
        cornflowerblue: "#76a5ea",
        orange: "#ffa500",
        dimgray: "#625f6d",
        gainsboro: "#e0e0e0",
        whitesmoke: "#f5f5f5",
        black: "#000",
        indianred: "#d25b68",
        mistyrose: "#f4d7da",
        gold: "rgba(252, 214, 74, 0.7)",
        thistle: "#e4ccfd",
        lightgreen: "#7ac555",
      },
      fontFamily: {
        inter: "Inter",
      },
      borderRadius: {
        "3xs": "10px",
      },
    },
    fontSize: {
      xs: "12px",
      base: "16px",
      lg: "18px",
      sm: "14px",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      sm: {
        max: "420px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
