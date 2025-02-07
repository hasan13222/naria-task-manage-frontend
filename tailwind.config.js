/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			bgColor: 'rgb(218 200 188 / 10%)',
  			accent: '#07cdae',
  			secondary: '#047edf',
  			lightSecondary: '#90caf9',
  			primary: '#fe7096',
  			lightPrimary: '#ffbf96',
  			lightAccent: '#84d9d2',
  			textColor: '#3e4b5b'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}
