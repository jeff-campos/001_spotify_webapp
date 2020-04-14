import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  color: {
    black: '#262626',
    dark: '#999',
    light: '#fafafa',
    clean: '#fff',
  },
  size: {
    superLarge: '48px',
    large: '24px',
    medium: '18px',
    small: '16px',
    superSmall: '14px',
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
