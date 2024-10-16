import { existsSync } from 'node:fs';
import { fileURLToPath } from 'url';

/** @typedef {import("prettier").Config} PrettierConfig */
/** @typedef {import("prettier-plugin-tailwindcss").PluginOptions} TailwindConfig */

const tailwindFileUrl = new URL('./../tailwind/web.ts', import.meta.url);
const tailwindFileExists = existsSync(tailwindFileUrl);

console.info(`Tailwind config ${tailwindFileExists ? 'found' : 'not found'}.`);

/** @type { PrettierConfig  } */
const config = {
  plugins: ['prettier-plugin-organize-imports', 'prettier-plugin-tailwindcss'],
  singleQuote: true,
  trailingComma: 'es5',
  arrowParens: 'avoid',
  tailwindConfig: tailwindFileExists
    ? fileURLToPath(tailwindFileUrl)
    : undefined,
  tailwindPreserveWhitespace: true,
  tailwindFunctions: ['cn', 'cva', 'clsx'],
};

export default config;
