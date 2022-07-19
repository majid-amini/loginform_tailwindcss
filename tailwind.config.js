/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm:'480px',
      md:'768px',
      lg:'976px',
      xl:'1440px'
    },
    extend: {
      colors: {
        brightRed: 'hsl(12, 88%, 59%)',
        brightRedLight: 'hsl(12, 88%, 69%)',
        brightRedSuplight: 'hsl(12, 88%, 95%)',
        darkBlue: 'hsl(228, 39%, 23%)',
        darkGrayishBlue: 'hsl(227, 12%, 61%)',
        lightGray: '#F5F5F5'
      } , 
      gridTemplateColumns : {
        //change style and variable
        // 'variable' : 'your assets exp : '1fr 2fr' exp2 : 'reapet(auto-fit , minmax(10rem , 1fr))'
        // to use add this class name : grid-cols-4col
        '1/5col' : '1.5fr 1fr' , 
        '4col' : '4fr 1fr' , 
      } ,
      gridTemplateRows : {
        //change style and variable
        // 'variable' : 'your assets exp : '1fr 2fr' exp2 : 'reapet(auto-fit , minmax(10rem , 1fr))'
        // to use add this class name : grid-rows-row12
        'row12' : '1fr 2fr' , 
      } ,
    },
  },
  plugins: [],
}
