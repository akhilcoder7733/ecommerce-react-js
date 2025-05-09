// src/context/ThemeContext.js
import React, { createContext, useMemo, useState } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme } from '../theme';

export const ThemeContext = createContext();

export const CustomThemeProvider = ({ children }) => {
  const [mode, setMode] = useState('light');

  const toggleTheme = () => {
    setMode(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const theme = useMemo(() => (mode === 'light' ? lightTheme : darkTheme), [mode]);

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <MuiThemeProvider theme={theme}>
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};
