import prettierConfig from '@ausweis/prettier';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'url';

/** @typedef {import("prettier").Config} PrettierConfig */
/** @typedef {import("prettier-plugin-tailwindcss").PluginOptions} TailwindConfig */

const tailwindFileUrl = new URL(import.meta.resolve('@ausweis/tailwind/web'));
const tailwindFileExists = existsSync(tailwindFileUrl);

console.info(`Tailwind config ${tailwindFileExists ? 'found' : 'not found'}.`);

/** @type { PrettierConfig  } */
const config = {
  ...prettierConfig,
  plugins: [...(prettierConfig.plugins ?? []), 'prettier-plugin-tailwindcss'],
  ...(tailwindFileExists && { tailwindConfig: fileURLToPath(tailwindFileUrl) }),
  tailwindPreserveWhitespace: true,
  tailwindFunctions: ['cn', 'cva', 'clsx'],
};

export default config;
