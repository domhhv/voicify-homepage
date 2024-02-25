import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      width: {
        '1338': '1338px',
        '84': '84px',
      },
      height: {
        '46': '46px',
      },
      textColor: {
        purple: { 600: '#6F2DC1' },
        gray: { 600: '#808080', 700: '#646464' },
      },
      colors: {
        purple: '#6F2DC1',
        'light-purple': '#F4EFFA',
      },
      spacing: {
        '24px': '24px',
      },
    },
  },
  plugins: [],
};
export default config;
