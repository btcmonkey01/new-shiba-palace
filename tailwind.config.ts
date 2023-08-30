import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'shibaBackground': "url('/background.webp')"
      },
      colors: {
        'primary': '#f7442f',
        'secondary': '#ffb203'
      }
    },
  },
  plugins: [],
}
export default config
