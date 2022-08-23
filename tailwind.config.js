/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      '50%': '50%',
      '16': '4rem',
    },
    extend: {
      fontFamily: {
        body: ['"Josefin Sans"']
      },
      backgroundImage: {
      },
      backgroundImage: {
        'header-pattern': "url('./images/Object.png')",
        'header-media': "url('./images/media.jpg')",
        'ear': "url('./images/ear.jpg')",
        'grid': "url('./images/grid.jpg')",
        'soccer': "url('./images/soccer.jpg')",
        'night': "url('./images/night.jpg')",
        'above': "url('./images/above.jpg')",
        'pocket': "url('./images/pocket.jpg')",
        'maket': "url('./images/maket.png')",
      },
      fontFamily: {
        p: ['"Alata"']
      },
    },
  },
  plugins: [],
}
