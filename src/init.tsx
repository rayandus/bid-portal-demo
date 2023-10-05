import React from 'react';
import App from './app/app';
import { ThemeProvider } from '@emotion/react';
import { useTheme } from '@mui/material/styles';

const Init = () => {
    const muiTheme = useTheme();

    return (
        <ThemeProvider theme={muiTheme}>
            <App />
        </ThemeProvider>
    );
};

export default Init;
