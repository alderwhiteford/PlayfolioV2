import type { Config } from "tailwindcss";
import Typography from '@tailwindcss/typography'
import { fontFamily } from 'tailwindcss/defaultTheme'

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        backgroundDark: "#080808",
        backgroundLight: "#FFFFFF",
        primary: "#ECC061",
        secondary: "#98D6FF",
      },
      fontFamily: {
        jost: ["Jost", ...fontFamily.sans],
        inter: ["Inter", ...fontFamily.sans],
        ibmPlexMono: ["IBM Plex Mono", ...fontFamily.mono]
      },
    },
  },
  plugins: [ Typography ],
} satisfies Config;
