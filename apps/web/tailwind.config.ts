import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        glow: '0 0 30px rgba(56,189,248,0.35)'
      },
      backgroundImage: {
        'neon-gradient': 'linear-gradient(135deg, rgba(0,255,255,0.2), rgba(168,85,247,0.2))'
      }
    }
  },
  plugins: []
};

export default config;

