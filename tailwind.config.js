/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        float: "float 4s ease-in-out infinite",
        "float-slow": "float 5s ease-in-out infinite",
      },
      colors: {
        primary: "hsl(221.21, 83.19%, 53.33%)",
        secondary: "hsl(188.74, 94.5%, 42.75%)",
        typo: "hsl(0, 0%, 9.02%)",
        "typo-secondary": "hsl(0, 0%, 63.92%)",
        "typo-foreground": "hsl(0, 0%, 98.04%)",
        destructive: "hsl(0, 84.2%, 60.2%)",
        "destructive-foreground": "hsl(210, 40%, 98%)",
      },
    },
  },
  plugins: [],
};
