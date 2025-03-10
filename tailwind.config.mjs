/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
export default {
  mode: 'jit',
	content: ['./src/**/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
	theme: {
		extend: {
      colors: {
        'text': '#46494b',
        'text2': '#7f8b90',
        'text3': '#8f8f8f',
        'background': '#f3f5f6',
        'accent': '#e5e8ea',
        'primary': '#8875e0',
        
        'darktext': '#e1e6f0',
        'darktext2': '#969eb0',
        'darktext3': '#666e7d',
        'darkbackground': '#10141a',
        'darkaccent': '#151b24',
        'darkprimary': '#61AFEF',
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
        jetbrains: 'jetbrains-mono',
        rubik: 'rubik',
        noto: 'noto-sans',
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
