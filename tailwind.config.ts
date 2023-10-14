import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "white-1": "#EEEEF1",
        "white-2": "#F3F3F5",
        "white-opacity": "rgba(243, 243, 243, 0.18)",
        "black-1": "#050F20",
        "black-2": "#252525",
        "gray-1": "#C8C8C8",
        "gray-2": "#7F7F83",
        "gray-3": "#DADADA",
        "gray-4": "#C0C0C0",
        "gray-opacity": "rgba(174, 174, 174, 0.1)",
        "black-transparent": "rgba(0, 0, 0, 0.1)",
        "light-blue": "#56CCF2",
      },
      spacing: {
        "4.5": "1.125rem",
        "6.5": "1.625rem",
      },
      fontSize: {
        "7.5xl": [
          "5rem",
          {
            lineHeight: "88px",
            fontWeight: "600",
          },
        ],
        "7.7xl": [
          "5.625rem",
          {
            lineHeight: "90px",
            fontWeight: "600",
          },
        ],
        "17xl": [
          "14.375rem",
          {
            lineHeight: "110%",
            fontWeight: "500",
            letterSpacing: "6.9px",
          },
        ],
      },
      container: {
        screens: {
          "2xl": "1770px",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
