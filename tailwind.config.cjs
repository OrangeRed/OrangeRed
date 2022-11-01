// const darkTheme = {
//   colors: {
//     primary: colors.purple[700],
//     secondary: colors.purple[800],
//     dark: {
//       primary: colors.purple[300],
//       secondary: colors.purple[500],
//     },
//     accent: {
//       gray: {
//         light: colors.gray[300],
//         dark: colors.gray[500],
//       },
//       default: colors.blue[700],
//     },
//   },
// }

// const { colors } = darkTheme

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      // colors: {
      //   theme: {
      //     ...colors,
      //   },
      // },
    },
  },
  plugins: [],
}
