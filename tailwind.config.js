import colors from "./src/theme/colors";
const { fontFamily } = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");
const iOSHeight = require("@rvxlab/tailwind-plugin-ios-full-height");

const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      "3xl": { max: "1600px" },
      "2xl": { max: "1400px" },
      xl: { max: "1280px" },
      lg: { max: "1000px" },
      md: { max: "700px" },
      sm: { max: "480px" },
    },
    extend: {
      colors: colors,
      fontFamily: {
        poppins: "var(--font-poppins)",
      },
      scale: {
        98: "98%",
        99: "99%",
        102: "102%",
      },
    },
  },
  plugins: [
    require("@headlessui/tailwindcss")({ prefix: "ui" }),
    require("tailwind-scrollbar"),
    iOSHeight,
    plugin(function ({ addBase, addComponents, addUtilities }) {
      addBase({
        p: {
          "@apply text-lg": {},
        },
        span: {
          "@apply text-lg": {},
        },
        button: {
          "@apply text-lg": {},
        },
      });
      addComponents({
        // ------- BOUNDING BOX
        ".bound": {
          "@apply border border-dashed border-red-500": {},
        },
        ".bound-blue": {
          "@apply border border-dashed border-sky-500": {},
        },
        ".bound-green": {
          "@apply border border-dashed border-emerald-500": {},
        },
        ".bound-pink": {
          "@apply border border-dashed border-pink-400": {},
        },
        ".bound-orange": {
          "@apply border border-dashed border-orange-400": {},
        },
        ".bound-purple": {
          "@apply border border-dashed border-violet-400": {},
        },
        ".bound-yellow": {
          "@apply border-3 border-dashed border-yellow-200": {},
        },
        // ------- BUTTONS
        ".button-base": {
          "@apply flex flex-row items-center justify-center transition-all active:scale-99 disabled:bg-n-2 disabled:text-n-4 disabled:hover:text-n-4 disabled:border-n-2 disabled:hover:bg-n-2 disabled:hover:border-n-2 disabled:cursor-not-allowed disabled:active:scale-100 font-light":
            {},
        },
        // #### BUTTON SIZES (AUTO)
        ".button-2xl": {
          "@apply gap-4 rounded-full px-16 py-4 text-lg": {},
        },
        ".button-xl": {
          "@apply gap-3 rounded-full px-12 py-3.5 text-lg": {},
        },
        ".button-lg": {
          "@apply gap-2 rounded-full px-10 py-2": {},
        },
        ".button-md": {
          "@apply gap-2 rounded-full px-6 py-2": {},
        },
        ".button-sm": {
          "@apply gap-2 rounded-full px-4 py-2 text-sm": {},
        },
        ".button-xs": {
          "@apply gap-2 rounded px-2 py-1 text-xs": {},
        },
        ".button-2xs": {
          "@apply gap-1 rounded px-1.5 pt-[3px] pb-[5px] text-2xs": {},
        },
        ".button-3xs": {
          "@apply gap-1 rounded px-1.5 pt-0.5 pb-1 text-2xs": {},
        },
        // #### BUTTON SIZES (FIXED)
        ".button-fixed-2xl": {
          "@apply button-base gap-4 justify-center rounded-full px-12 py-3 w-104":
            {},
        },
        ".button-fixed-xl": {
          "@apply button-base gap-4 justify-center rounded-full px-12 py-3 w-96":
            {},
        },
        ".button-fixed-lg": {
          "@apply button-base gap-4 justify-center rounded-full px-8 py-3 w-60":
            {},
        },
        ".button-fixed-md": {
          "@apply button-base gap-2 justify-center rounded-full px-6 py-3 w-44":
            {},
        },
        ".button-fixed-sm": {
          "@apply button-base gap-2 justify-center rounded-full px-5 py-3 w-40":
            {},
        },
        ".button-fixed-xs": {
          "@apply button-base gap-1 justify-center rounded-full px-4 py-3 w-28":
            {},
        },
        ".button-fixed-2xs": {
          "@apply button-base gap-1 justify-center rounded-full px-2 py-3 w-24":
            {},
        },
        // #### BUTTON STYLES
        ".button-disabled": {
          "@apply button-base border border-solid border-n-2 bg-n-2 text-n-4 fill-n-4 cursor-not-allowed":
            {},
        },
        ".button-contain-primary": {
          "@apply button-base border border-solid border-primary hover:border-primary-dark bg-primary hover:bg-primary-dark text-n-0":
            {},
        },
        ".button-contain-accent": {
          "@apply button-base border border-solid border-accent-dark hover:border-accent bg-accent-dark hover:bg-accent text-n-0":
            {},
        },
        ".button-contain-secondary": {
          "@apply button-base border border-solid border-secondary hover:border-secondary-dark bg-secondary hover:bg-secondary-dark text-n-0":
            {},
        },
        ".button-contain-gray": {
          "@apply button-base border border-solid border-n-2 hover:border-n-3 bg-n-2 hover:bg-n-3 text-n-9":
            {},
        },
        ".button-contain-black": {
          "@apply button-base border border-solid border-n-9 hover:border-n-7 bg-n-9 hover:bg-n-7 text-n-0 fill-n-0":
            {},
        },
        ".button-contain-white": {
          "@apply button-base border border-solid border-white hover:border-accent bg-white text-black fill-black hover:text-accent hover:fill-accent":
            {},
        },
        ".button-contain-error": {
          "@apply button-base border border-solid border-error hover:border-error-dark bg-error hover:bg-error-dark text-n-0":
            {},
        },
        ".button-contain-warning": {
          "@apply button-base border border-solid border-warning hover:border-warning-dark bg-warning hover:bg-warning-dark text-n-0":
            {},
        },
        ".button-outline-primary": {
          "@apply button-base border border-solid border-primary text-primary hover:bg-primary-lightest hover:text-primary-dark":
            {},
        },
        ".button-outline-accent": {
          "@apply button-base border border-solid border-accent text-accent hover:bg-accent-dark hover:text-white":
            {},
        },
        ".button-outline-secondary": {
          "@apply button-base border border-solid border-secondary text-secondary hover:bg-secondary-lightest hover:text-secondary-dark":
            {},
        },
        ".button-outline-black": {
          "@apply button-base border border-solid border-n-9 text-n-9 hover:bg-n-9 hover:text-n-0 hover:fill-n-0":
            {},
        },
        ".button-outline-white": {
          "@apply button-base border border-solid border-white text-white hover:bg-white hover:text-black hover:fill-black":
            {},
        },
        ".button-outline-gray": {
          "@apply button-base border border-solid border-n-2 text-n-9 hover:bg-n-1":
            {},
        },
        ".button-outline-error": {
          "@apply button-base border border-solid border-error text-error hover:bg-error-lightest hover:text-error-dark":
            {},
        },
        ".button-outline-warning": {
          "@apply button-base border border-solid border-warning text-warning-dark hover:bg-warning-lightest hover:text-warning-darker":
            {},
        },
        ".button-text-primary": {
          "@apply button-base text-primary hover:bg-primary-lightest hover:text-primary-dark":
            {},
        },
        ".button-text-accent": {
          "@apply button-base text-accent hover:bg-accent-lightest hover:text-accent-dark":
            {},
        },
        ".button-text-secondary": {
          "@apply button-base text-secondary hover:bg-secondary-lightest hover:text-secondary-dark":
            {},
        },
        ".button-text-gray": {
          "@apply button-base text-n-9 hover:bg-n-9 hover:text-n-0": {},
        },
        ".button-text-black": {
          "@apply button-base text-n-9 hover:bg-n-1": {},
        },
        ".button-text-white": {
          "@apply button-base text-white hover:bg-white/10": {},
        },
        ".button-text-error": {
          "@apply button-base text-error hover:bg-error-lightest hover:text-error-dark":
            {},
        },
        ".button-text-warning": {
          "@apply button-base text-warning hover:bg-warning-lightest hover:text-warning-dark":
            {},
        },
        ".button-link-primary": {
          "@apply !p-0 text-primary hover:underline disabled:text-n-4 disabled:hover:no-underline disabled:cursor-not-allowed underline-offset-8":
            {},
        },
        ".button-link-accent": {
          "@apply !p-0 text-accent hover:underline disabled:text-n-4 disabled:hover:no-underline disabled:cursor-not-allowed underline-offset-8":
            {},
        },
        ".button-link-secondary": {
          "@apply !p-0 text-secondary hover:underline disabled:text-n-4 disabled:hover:no-underline disabled:cursor-not-allowed underline-offset-8":
            {},
        },
        ".button-link-gray": {
          "@apply !p-0 text-n-9 hover:text-n-4 hover:underline disabled:text-n-4 disabled:hover:no-underline disabled:cursor-not-allowed underline-offset-8":
            {},
        },
        ".button-link-black": {
          "@apply !p-0 text-n-9 hover:underline disabled:text-n-4 disabled:hover:no-underline disabled:cursor-not-allowed underline-offset-8":
            {},
        },
        ".button-link-white": {
          "@apply !p-0 text-white hover:underline disabled:text-n-4 disabled:hover:no-underline disabled:cursor-not-allowed underline-offset-8":
            {},
        },
        ".button-link-error": {
          "@apply !p-0 text-error hover:underline disabled:text-n-4 disabled:hover:no-underline disabled:cursor-not-allowed underline-offset-8":
            {},
        },
      });
      addUtilities({});
    }),
  ],
};
export default config;
