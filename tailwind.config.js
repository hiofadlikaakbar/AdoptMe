const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "350px",
      ...defaultTheme.screens,
    },
    fontFamily: {
      Inter: ["Inter"],
      Sawa: ["Sawarabi Gothic"],
    },
    extend: {
      colors: {
        paleBlue: "#304057",
        secondGray: "#6D6D6D",
        secondBlack: "#151515",
        linearBlue: "#cce4ff",
        lightBlue: "#637C95",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
