/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
export default {
  mode: 'jit',
	content: ['./src/**/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
      colors: {
        'text': '#ffffff',
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
      dropShadow: {
        glow: [
          "0px 0px 5px #1c6391"
        ]
      },
      textShadow: {
        green: [
          '0.05em 0.05em #2f80b5, 0.1em 0.1em #1f5e87, 0.15em 0.15em #134261, 0.2em 0.2em #0d2b40, 0.25em 0.25em #061621'
        ],
        rainbow: [
          '0.04em 0.04em #d94b41, 0.08em 0.08em #f07f3a, 0.12em 0.12em #5df098, 0.16em 0.16em #3a83f0, 0.2em 0.2em #7d3fe8'
        ],
        title: [
          '0.02em 0.02em #d94b41, 0.04em 0.04em #f07f3a, 0.06em 0.06em #5df098, 0.08em 0.08em #3a83f0, 0.1em 0.1em #7d3fe8'
        ],
        none: [
          'none'
        ]
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
        title: "title 1.5s infinite",
        typing: "typing 2s steps(25)",
        blink: "blink 0.75s infinite"
      },
      keyframes: {
        title: {
          '0%': {
            textShadow: '0.02em 0.02em #d94b41, 0.04em 0.04em #f07f3a, 0.06em 0.06em #5df098, 0.08em 0.08em #3a83f0, 0.1em 0.1em #7d3fe8'
          },
          '60%': {
            textShadow: '0.04em 0.04em #d94b41, 0.08em 0.08em #f07f3a, 0.12em 0.12em #5df098, 0.16em 0.16em #3a83f0, 0.2em 0.2em #7d3fe8'
          },
          '100%': {
            textShadow: '0.02em 0.02em #d94b41, 0.04em 0.04em #f07f3a, 0.06em 0.06em #5df098, 0.08em 0.08em #3a83f0, 0.1em 0.1em #7d3fe8'
          },
        },
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
