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
      //   primary: "#e0fbfc",
      //   secondary: "#EE6C4D",
      //   terciary: "#293241",
      //   comp1 : "#C2DFE3",
      //   comp2 : "#98C1D9"
      // },
      colors: {
        primary: "#2d283e",
        secondary: "#4c495d",
        terciary: "#564f6f",
        comp1 : "#802bb1",
        comp2 : "#d1d7e0"
      },
    },
  },
  plugins: [],
}
export default config
