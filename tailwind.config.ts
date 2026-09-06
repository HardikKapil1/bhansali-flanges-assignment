import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      colors: {
        steel: "#1C1F22",
        mill: "#F5F4F1",
        "accent-grey": "#8A9BA8",
        accent: "#C24A1F",
        certification: "#2E5E4E",
      },
      fontFamily: {
        display: ["var(--font-archivo)", "sans-serif"],
        body: ["var(--font-ibm-plex-sans)", "sans-serif"],
      },
    },
  },
};

export default config;
