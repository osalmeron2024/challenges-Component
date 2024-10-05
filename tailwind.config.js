/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        lightRed: "hsl(0, 100%, 67%)",
        lightRedTransparency: "hsla(0, 100%, 67%, 0.2)",
        orangeYellow: "hsl(39, 100%, 56%)",
        orangeYellowTransparency: "hsla(39, 100%, 56%, 0.2)",
        greenTeal: "hsl(166, 100%, 37%)",
        greenTealTransparency: "hsla(166, 100%, 37%, 0.2)",
        cobaltBlue: "hsl(234, 85%, 45%)",
        cobaltBlueTransparency: "hsla(234, 85%, 45%, 0.2)",
        lightSlateBlue: "hsl(252, 100%, 67%)",
        lightRoyalBlue: "hsl(241, 81%, 54%)",
        violetBlue: "hsla(256, 72%, 46%, 1)",
        persianBlue: "hsla(241, 72%, 46%, 0)",
        whiteHsl: "hsl(0, 0%, 100%)",
        paleBlue: "hsl(221, 100%, 96%)",
        lightLavender: "hsl(241, 100%, 89%)",
        darkGrayBlue: "hsl(224, 30%, 27%)",
        darkGrayBlueAlpha: "hsla(224, 30%, 27%, 0.2)",
      },
      fontFamily: {
        "HankenGrotesk-Bold": ["HankenGrotesk-Bold", "sans-serif"],
        "HankenGrotesk-ExtraBold": ["HankenGrotesk-ExtraBold","sans-serif"],
        "HankenGrotesk-Medium": ["HankenGrotesk-Medium","sans-serif"],
        "HankenGrotesk-VariableFont-wght": ['HankenGrotesk-VariableFont_wght',"sans-serif"],
      },
      width:{
        "w375px": "375px",
      },
      height:{
        "h805px": "750px"
      },
    },
  },
  plugins: [],
};
