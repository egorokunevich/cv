import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      width: {
        '2px': '2px',
      },
      height: {
        '2px': '2px',
      },
      screens: {
        xsm: '490px',
      },
    },
  },
  plugins: [],
};
export default config;
