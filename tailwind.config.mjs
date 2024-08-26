/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
export default {
  mode: 'jit',
	content: ['./src/**/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
      colors: {
        'text': '#e1e6f0',
        'text2': '#969eb0',
        'text3': '#666e7d',
        'background': '#10141a',
        'accent': '#1d2530',
        'primary': '#61AFEF',
        'secondary': '#151b24',
        green: {
          100:  '#98C379',
        },
        red: {
          100: '#E06C75',
        },
        gray: {
          900: '#08090a',
          800: '#13151a',
          700: '#191c24',
          600: '#1f232e',
          500: '#2a3040',
          400: '#333b4f',
          300: '#3f4963',
          200: '#b0b2b5',
          100: '#f5f6f7'
        },
      },
      fontFamily: {
        brains: 'brains',
        rubik: 'rubik',
      },
      gridTemplateRows: {
        home: [
          'auto 1fr auto'
        ]
      },
      animation: {
        typing: "typing 2s steps(50)",
        blink: "blink 0.75s infinite"
      },
      keyframes: {
        typing: {
          from: {
            width: "0",
            visibility: "hidden"
          },
          to: {
            width: "100%"
          }
        },
        blink: {
          "50%": {
            opacity: "0%"
          },
          "100%": {
            opacity: "100%"
          }
        }
      }
    },
	},
	plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
          'animate-delay': (value) => ({
            animationDelay: value,
          }),
          'opacity': (value) => ({
            opacity: value,
          }),
        },
        { values: theme('textShadow') },
        { values: theme('transitionDelay') },
        { values: theme('opacity') }
      )
    }),
  ],
}
