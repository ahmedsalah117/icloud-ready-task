import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "pillar-details-gradient": "linear-gradient(to bottom,#fff,#97E0F3)",
      },
      colors: {
        navColor: "#f8f8f8",
        primaryColor: "#00244D",
        textSecColor: "#637182",
        textTertiaryColor: "#0097C2",
      },
    },
  },
  plugins: [],
};
export default config;
