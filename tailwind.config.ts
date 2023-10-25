import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // colors: {
      //   background: "#062336",
      //   primary: "#181a29",
      //   secondary: "#0a002b",
      //   terciary : "#232736",
      //   comp1 : "#13334b"
      // },
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
  plugins: [],
}
export default config
