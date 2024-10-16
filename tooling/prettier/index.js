import { fileURLToPath } from 'url';

/** @typedef {import("prettier").Config} PrettierConfig */
/** @typedef {import("prettier-plugin-tailwindcss").PluginOptions} TailwindConfig */

/** @type { PrettierConfig  } */
const config = {
  plugins: ['prettier-plugin-organize-imports', 'prettier-plugin-tailwindcss'],
  singleQuote: true,
  trailingComma: 'es5',
  arrowParens: 'avoid',
  tailwindConfig: fileURLToPath(
    new URL('../../tooling/tailwind/web.ts', import.meta.url)
  ),
  tailwindPreserveWhitespace: true,
  tailwindFunctions: ['cn', 'cva', 'clsx'],
};

export default config;
