/** @typedef {import("prettier").Config} PrettierConfig */

/** @type { PrettierConfig  } */
const config = {
  printWidth: 80,
  plugins: ['prettier-plugin-organize-imports'],
  singleQuote: true,
  trailingComma: 'all',
  tabWidth: 2,
  arrowParens: 'always',
  semi: true,
  proseWrap: 'always', // printWidth line breaks in md/mdx
};

export default config;
