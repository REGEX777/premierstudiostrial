/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.{ejs, html}"],
  theme: {
    extend: {
      screens:{
        '4k-low': '1950px',
        '4k-lowminus2': '1350px',
        '4k-mid': '1500px',
        '4k-lowest': '1400px',
        '4k-solasau': '1600px',
        'md-start': '900px',
        'mc-bc': '1000px',
        'md-mid': '740px',
        'mid-small': '650px',
        'mid-small3': '600px',
        'mid-small2': '500px',
        'mob-ninenine3': '1000px',
        'mob-ninenine4': '1100px',
        'mob-ninenine5': '1150px',
        '4k-midlow': '1800px',
        '450peeeexxx': '450px',
        '470pxx': '470px',
        '700px': '700px',
        '1470px': '1470px',
        '1200px': '1200px',
        '800px': '800px'
      },
      fontFamily:{
        "inter": 'Inter, sans-serif',
        'noto': 'Noto Color Emoji, serif'
      }
    },
  },
  plugins: [],
}