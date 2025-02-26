/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sofia: ["Sofia Pro"],
        myan: ["Myan San"],
      },
      fontSize: {
        header: ["28px"],
        body: ["18px"],
        cardheader: ["22px"],
        cardbody: ["14px"],
      },
      colors: {
        primary: "#3DBB47", // Custom primary color
        secondary: "#1A4F1E", // Custom secondary color
        hihglight: "#154119",
        background: "#ECF8ED",
        sub: "#C3EAC6",
        footer: "#1C1C1C",
        // Add more custom colors as needed
      },
    },
  },
  plugins: [],
};
