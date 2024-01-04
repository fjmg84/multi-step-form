/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'mobile-bg': "url('/images/bg-sidebar-mobile.svg')",
        'desktop-bg': "url('/images/bg-sidebar-desktop.svg')",
      },
      colors: {
        'marine-blue': 'hsl(213, 96%, 18%)',
        'purplish-blue': 'hsl(243, 100%, 62%)',
        'pastel-blue': 'hsl(228, 100%, 84%)',
        'light-blue': 'hsl(206, 94%, 87%)',
        'strawberry-red': 'hsl(354, 84%, 57%)',
        'cool-gray': 'hsl(231, 11%, 63%)',
        'light-gray': 'hsl(229, 24%, 87%)',
        'magnolia': 'hsl(217, 100%, 97%)',
        'alabaster': 'hsl(231, 100%, 99%)',
        'white': 'hsl(0, 0%, 100%)',
      },
      fontFamily: {
        'ubuntu-regular': ['Ubuntu-Regular', 'sans-serif'],
        'ubuntu-bold': ['Ubuntu-Bold', 'sans-serif'],
        'ubuntu-medium': ['Ubuntu-Medium', 'sans-serif'],
      },
      fontWeight: {
        400:400, 
        500:500, 
        700:700
      },
      fontSize: {
        'md': '16px',
      },
      screens: {
      'mobile': '375px',
      'desktop': '1440px',

    }
    }
  },
  plugins: [],
}

