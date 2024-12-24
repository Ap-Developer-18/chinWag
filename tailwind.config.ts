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
        'footer-layer': "url(/assets/images/webp/footer-layer.webp)",
        'section-layer': "url(/assets/images/webp/section-layer.webp)",
      },
      container: {
        center: true,
        padding: "20px",
        screens: {
          'sm': "640px",
          'md': "768px",
          'lg': "1024px",
          'xl': "1180px",
        },
      },
      lineHeight: {
        'custom-xl': "60px",
      },
      colors: {
        'light-green': "#7A9E9F",
        'dark-green': "#4F6367",
        'off-green': "#2A3739",
        'cool-green': "#88ADAE",
        'medium-green': "#B8D8D8",
        'light-sky': "#BBFFFF4D",
        'light-gray': "#00000033",
        'off-gray': "#738184",
        'medium-gray': "#D3D6D6",
        'off-blue': "#7A9E9FD4",
        'dark-gray': "#4C5F63",
      },
      dropShadow: {
        'gray-sm': "1px 1px 0px #5F5F5F",
      },
      boxShadow: {
        '3xl': "0px 0px 0px 1px white, 2px 2px 0px 1px #7A9E9F",
      },
    },
  },
  plugins: [],
};
export default config;