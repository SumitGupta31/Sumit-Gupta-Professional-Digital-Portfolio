import type { Config } from 'tailwindcss';
const config: Config = { content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'], theme: { extend: { colors: { ink: '#08111f', electric: '#5ce1e6' }, boxShadow: { glow: '0 18px 60px rgba(92,225,230,.15)' } } }, plugins: [] };
export default config;
