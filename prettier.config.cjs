/** @type {import("prettier").Config} */
module.exports = {
  plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
  overrides: [{ files: "*.astro", options: { parser: "astro" } }],
  semi: false,
  printWidth: 100,
}
