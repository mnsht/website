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
  buttons: {
    learnMore: {
      position: 'relative',
      cursor: 'pointer',
      backgroundColor: 'transparent',
      zIndex: 0,
      '&:focus': { outline: 'none' },
      '&:before': {
        position: 'absolute',
        top: '50%',
        left: '0',
        right: '0',
        bottom: '0',
        width: '100%',
        margin: '0px auto',
        zIndex: -1,
        borderTop: `1px solid ${lightGray}`,
        content: '""'
      },
      '& > span': {
        background: white,
        padding: '0px 10px',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        transition: 'color 0.25s ease-in-out',
        color: mediumGray,
        '&:hover': {
          color: darkGray
        }
      }
    }
  },
  Box: {
    fontFamily: font
  },
  Link: {
    textDecoration: 'none',
    transition: 'color 0.25s ease-in-out',
    color: lightGray,
    '&:hover': { color: mediumGray }
  }
};
