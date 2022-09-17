/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{html,js}',
    './pages/**/*.{html,js}',
    './index.html',
  ],
  theme: {
    extend: {
      backgroundColor: {
        skin: {
          main: 'var(--color-background-main)',
          key: 'var(--color-background-key)',
          screen: 'var(--color-background-screen)',
          button: 'var( --color-background-button)',
          delbutton: 'var( --color-background-delbutton)',
          equbutton: 'var( --color-background-equbutton)',
        
          
          
        }
      },
      textColor: {
        skin: {
          key:'var(--color-text-key)',
          input:'var(--color-text-screen)',
          equal: 'var(--color-text-equal)',

        }
      },
      fontFamily : {
        "league":  'League Spartan, sans-serif',
      },
      borderColor : {
        skin: {
          shadow: 'var(--color-border)',
          equal: 'var(--color-border-equal)',
          delete: 'var( --color-border-del)',
        }
      },
      inset :{
          point: 'var(--position-theme-pointer)'
        
      }
    },
  },
  plugins: [],
}