import type { Config } from 'tailwindcss';
import animate from 'tailwindcss-animate';
import { fontFamily } from 'tailwindcss/defaultTheme.js';

import base from './base.js';

export default {
  content: base.content,
  presets: [base],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    borderRadius: {
      lg: `var(--radius)`,
      md: `calc(var(--radius) - 2px)`,
      sm: 'calc(var(--radius) - 4px)',
      xl: 'calc(var(--radius) + 4px)',
      '2xl': 'calc(var(--radius) + 8px)',
      '3xl': 'calc(var(--radius) + 16px)',
      '4xl': 'calc(var(--radius) + 24px)',
      full: `9999px`,
    },
    fontFamily: {
      sans: ['var(--font-sans)', ...fontFamily.sans],
    },
    keyframes: {
      'accordion-down': {
        from: { height: '0' },
        to: { height: 'var(--radix-accordion-content-height)' },
      },
      'accordion-up': {
        from: { height: 'var(--radix-accordion-content-height)' },
        to: { height: '0' },
      },
    },
    animation: {
      'accordion-down': 'accordion-down 0.2s ease-out',
      'accordion-up': 'accordion-up 0.2s ease-out',
    },
  },
  plugins: [animate],
} satisfies Config;
