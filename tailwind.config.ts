import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      scrollbar: ['rounded'],
      colors: {
        background: "#2D2933",
        primary: "#372B47",
        secondary: "#51317A",
        terciary : "#6000E1",
        comp1 : "#5F23AD",
        comp2: "#4fff61"
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
}
export default config
