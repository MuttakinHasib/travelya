module.exports = {
  // mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
    },
    extend: {
      fontFamily: {
        archivo: ["Archivo Narrow", 'Aria'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
