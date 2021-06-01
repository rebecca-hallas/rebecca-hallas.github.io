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
        'space': "url('./retro.png')",
        'game': "url('./game.png')"
      }),
      colors: {
        hotPink: '#ff6bd5',
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
