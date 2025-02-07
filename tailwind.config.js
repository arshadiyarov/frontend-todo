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
        ripple: {
          "0%": { transform: "scale(0)", opacity: "1" },
          "100%": { transform: "scale(4)", opacity: "0" },
        },
      },
      animation: {
        float: "float 4s ease-in-out infinite",
        "float-slow": "float 5s ease-in-out infinite",
        ripple: "ripple 1s linear",
      },
      colors: {
        primary: "hsl(221.21, 83.19%, 53.33%)",
        secondary: "hsl(188.74, 94.5%, 42.75%)",
        typo: "hsl(0, 0%, 9.02%)",
        "typo-secondary": "hsl(0, 0%, 63.92%)",
        "typo-foreground": "hsl(0, 0%, 98.04%)",
        destructive: "hsl(0, 84.2%, 60.2%)",
        "destructive-foreground": "hsl(210, 40%, 98%)",
        "dark-typo": "hsl(0, 0%, 100%)",
      },
      backgroundColor: {
        light: "hsl(0, 0%, 100%)",
        dark: "hsl(222.2, 84%, 4.9%)",
      },
      backgroundImage: {
        "auth-right": "url('/assets/img/auth-right.png')",
        "auth-right-dark": "url('/assets/img/auth-right-dark.png')",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
