import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ThemeProvider } from '@emotion/react';
import { useTheme } from '@mui/material/styles';
import App from './app/app';
import ApiServiceProvider, { ApiService } from './app/common/providers/api-service-provider';

// TO DO: Add default to configuration file
const API_ENDPOINT = import.meta.env.VITE_API_ENDPOINT || 'http://localhost:3000/api';

const queryClient = new QueryClient();

const Init = () => {
  const muiTheme = useTheme();

  const apiService = new ApiService(API_ENDPOINT);

  return (
    <ThemeProvider theme={muiTheme}>
      <ApiServiceProvider service={apiService}>
        <QueryClientProvider client={queryClient}>
          <App />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </ApiServiceProvider>
    </ThemeProvider>
  );
};

export default Init;
