module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'custom': '"Press Start 2P"',
      'customtwo': '"VT323"'
    },
    extend: {
      backgroundImage: theme => ({
        'space': "url('./images/retro.png')",
        'game': "url('./images/game.png')"
      }),
      colors: {
        hotPink: '#ff6bd5',
        limeGreen: '#52ff4d'
      },
  },
  variants: {
    extend: {
        backgroundImage: ['hover', 'focus']
      }
    },
  },
  plugins: [],
}
