// import type { Config } from "tailwindcss";

// const {
//   default: flattenColorPalette,
// } = require("tailwindcss/lib/util/flattenColorPalette");



// const config: Config = {
//   content: [
//     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       // backgroundImage: {
//       //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
//       //   "gradient-conic":
//       //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
//       // },
//     },
//     screens : {
//       xs: '475px',
//       sm: '640px',
//       md: '768px',
//       lg: '1280px',
//       xl: '1280px',
//       xxl: '1440px',
//     },
//     zIndex : {
//       '100' : '100',
//     },
//   },
//   plugins: [],
// };
// export default config;

//--------

import type { Config } from "tailwindcss";

const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",

    // Including the src directory if it exists
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      // Uncomment and add any additional extensions if needed
      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      // },
    },

 

    screens: {
      xs: '475px',
      sm: '640px',
      md: '768px',
      lg: '1280px',
      xl: '1280px',
      xxl: '1440px',
    },
    zIndex: {
      '100': '100',
    },
  },
  plugins: [addVariablesForColors],
};

export default config;
