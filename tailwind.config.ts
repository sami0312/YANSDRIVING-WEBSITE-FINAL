import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'yan-blue': 'hsl(220,100%,50%)',
        'yan-green': 'hsl(120,100%,25%)',
        'yan-red': 'hsl(0,100%,50%)',
        'yan-dark-blue': 'hsl(220,100%,25%)',
        'yan-light-gray': 'hsl(210,20%,98%)',
        'accent-blue': '#0066FF',
        'accent-green': '#008000',
        'accent-red': '#FF0000',
      },
      fontFamily: {
        sans: ['Open Sans', 'Roboto', 'sans-serif'],
      },
      maxWidth: {
        'container': '1200px',
      },
      spacing: {
        'section': '80px',
      }
    },
  },
  plugins: [],
}
export default config