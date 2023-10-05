import React from 'react';
import App from './app/app';
import { ThemeProvider } from '@emotion/react';
import { useTheme } from '@mui/material/styles';
import { Header } from './app/common/components';

const Init = () => {
  const muiTheme = useTheme();

  return (
    <ThemeProvider theme={muiTheme}>
      <Header />
      <App />
    </ThemeProvider>
  );
};

export default Init;
