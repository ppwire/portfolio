module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        'xs':'320px'
      },
      fontSize: {
        'lg': '1.333rem',
        'xl': '1.777rem',
        '2xl': '2.369rem',
        '3xl': '3.157rem',
        '4xl': '4.209rem',
      },
      colors:{
        'secondary':'#FAF1F1'
      }
    },
  },
  plugins: [],
}
