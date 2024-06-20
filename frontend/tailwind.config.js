/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  mode: "jit",

  theme: {
    extend: {
      backgroundImage: {
      "bg_one": "url('/src/assets/vtu4.png')",
      "bg_two": "url('/src/assets/why_us.png')",
      },
      colors: {
        primary: "#0A101D",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        heading_one: ["Poppins", "sans-serif"],
        body_one: ["Roboto", "sans-serif"],
        heading_two: ["Montserrat", "sans-serif"],
        body_two: ["Lato", "sans-serif"],
        heading_three: ["Nunito Sans", "sans-serif"],
        body_three: ["Source Sans 3", "sans-serif"],
        heading_four: ["Roboto", "sans-serif"],
        body_four: ["Open Sans", "sans-serif"],
        
      },
    },
    screens: {
      xs: "490px",
      ss: "630px",
      sm: "768px",
      md: "1050px",
      lg: "1250px",
      xl: "1700px",
    },
  },
  plugins: [],
}


