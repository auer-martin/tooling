import prettierConfig from '../prettier-config/index.js';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'url';

/** @typedef {import("prettier").Config} PrettierConfig */
/** @typedef {import("prettier-plugin-tailwindcss").PluginOptions} TailwindConfig */

const tailwindFileUrl = new URL(
  './node_modules/@ausweis/tailwind-config/web.ts',
  import.meta.url
);
const tailwindFileExists = existsSync(tailwindFileUrl);

console.info(`Tailwind config ${tailwindFileExists ? 'found' : 'not found'}.`);

/** @type { PrettierConfig  } */
const config = {
  ...prettierConfig,
  plugins: [...(prettierConfig.plugins ?? []), 'prettier-plugin-tailwindcss'],
  tailwindConfig: false ? fileURLToPath('') : undefined,
  tailwindPreserveWhitespace: true,
  tailwindFunctions: ['cn', 'cva', 'clsx'],
};

export default config;
