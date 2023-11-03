/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        container:"1440px"
      },
      screens:{
        xs:"320px",
        sm:"375px",
        sml:"500px",
        md:"667px",
        mdl:"768px",
        lg:"960px",
        lgl:"1024px",
        xl:"1280px"
      },
      fontFamily:{
        titleFont:"Roboto",
        bodyFont:"Poppins"
      },
      colors:{
        coligo_white:"#f8ffe5",
        coligo_green:"#06d6a0",
        coligo_yellow:"#ffc43d",
        whiteText:"#FFFFFF",
        lightText:"#CCC",
        coligo_blue:"#0e7490",
      },
      dropShadow: {
        glow: [
          "0 0px 20px rgba(255,255, 255, 0.35)",
          "0 0px 65px rgba(255, 255,255, 0.2)"
        ]
      },
      boxShadow:{
        Shadow:"1px 1px 20px 1px rgba(199,199,199,1)",
        textInput:"0 0 3px 2px rgb(228 121 17 / 50%)",
      }
    },
    plugins: []
  }
}