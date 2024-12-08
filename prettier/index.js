/** @typedef {import("prettier").Config} PrettierConfig */

/** @type { PrettierConfig  } */
const config = {
  plugins: ['prettier-plugin-organize-imports'],
  trailingComma: 'es5',
  tabWidth: 2,
  singleQuote: true,
  useTabs: false,
  jsxSingleQuote: false,
  arrowParens: 'avoid',
  bracketSpacing: true,
  bracketSameLine: false,
  semi: true,
  proseWrap: 'always', // printWidth line breaks in md/mdx
};

export default config;
