import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        ink: '#0B0B0B',
        ivory: '#F7F0E6',
        champagne: '#D7B56D',
        clay: '#B66A45',
        smoke: '#1A1A1A'
      },
      boxShadow: {
        glow: '0 0 70px rgba(215,181,109,0.12)'
      }
    }
  },
  plugins: []
};

export default config;
