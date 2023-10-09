import React, { createContext, useContext } from 'react';
import ApiService from './api-service';

const ApiServiceContext = createContext<ApiService | null>(null);

interface ApiServiceProviderProps {
    children: React.ReactNode;
    service: ApiService;
}

const ApiServiceProvider = (props: ApiServiceProviderProps) => {
    const { children, service } = props;

    return <ApiServiceContext.Provider value={service}>{children}</ApiServiceContext.Provider>
};

export const useApiService = (): ApiService => {
    const ctx = useContext(ApiServiceContext);

    if (!ctx) {
        throw new Error('Make sure to wrap your app component with ApiServiceProvider');
    }

    return ctx;
};

export default ApiServiceProvider;
