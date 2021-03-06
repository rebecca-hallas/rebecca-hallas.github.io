module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'space': "url('./images/retro.png')",
        'game': "url('./images/game.png')",
        'cat': "url('./images/catlol.png')"
      }),

      fill: theme => ({
        'red': theme('colors.red.500'),
        'green': theme('colors.green.500'),
        'blue': theme('colors.blue.500'),
      }),
      screens: {
        'lg': '1025px',
        'ml': '1024px'
      },
      fontFamily: {
        'custom': '"Press Start 2P"',
        'customtwo': '"VT323"'
      },
      colors: {
        hotPink: '#ff6bd5',
        limeGreen: '#52ff4d'
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        'bounce-slow': 'bounce 2s linear infinite',
        'spin-slow': 'spin 4s linear infinite',
      },
      rotate: {
        '270': '270deg',
        '330': '330deg',
        '360': '360deg',
      },
    },
  },
  variants: {
    extend: {
      backgroundImage: ['hover', 'focus'],
      animation: ['hover', 'focus'],
      fill: ['hover', 'focus']
    }
  },
  plugins: [],
}
