import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  color: {
    dark: '#999',
    light: '#fafafa',
    clean: '#fff',
  },
  size: {
    superLarge: '48px',
    large: '24px',
    medium: '18px',
    small: '16px',
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
