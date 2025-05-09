// src/theme.js
import { createTheme } from '@mui/material/styles';

const kanitFont = '"Kanit", sans-serif';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    background: {
      default: '#f5f5f5',
      paper: '#fff',
    },
  },
  typography: {
    fontFamily: kanitFont,
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9',
    },
    background: {
      default: '#121212',
      paper: '#1d1d1d',
    },
  },
  typography: {
    fontFamily: kanitFont,
  },
});
