const font =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';

const white = '#fafafa';
const lightGray = '#ccc';
const mediumGray = '#999';
const darkGray = '#666';
const black = '#333';

export default {
  colors: {
    white,
    lightGray,
    mediumGray,
    darkGray,
    black
  },
  lineHeights: {
    normal: '1.75rem',
    tall: '2rem'
  },
  radii: [0, 4, 8],
  Box: {
    fontFamily: font
  },
  Link: {
    textDecoration: 'none',
    transition: 'color 0.25s ease-in-out',
    color: white,
    '&:hover': { color: lightGray }
  }
};
