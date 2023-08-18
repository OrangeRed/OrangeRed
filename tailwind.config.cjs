/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        animatedgradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      animation: {
        gradient: "animatedgradient 6s ease infinite alternate",
      },
      "white-shadow": {
        background:
          "radial-gradient(800px circle at var(--mouse-x) var(--mouse-y),rgb(255, 255, 255, 0.1),transparent 40%);",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
