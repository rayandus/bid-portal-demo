import { useCallback } from 'react';
import { useQuery, UseQueryResult } from '@tanstack/react-query';
import queryKeys from './query-keys';
import { ApiError, useApiService } from '../../common/providers/api-service-provider';
import { AccountBalance } from '../types';

type UseAccountBalanceResponse = UseQueryResult<AccountBalance, ApiError>;

const useAccountBalance = (): UseAccountBalanceResponse => {
    const { axiosInstance } = useApiService();

    const fetch = useCallback(async () => {
        const response = await axiosInstance.get<AccountBalance>('/account/balance');

        return response.data;
    }, []);

    const result = useQuery(
        queryKeys.getAccountBalance(),
        () => fetch(),
        {
            refetchOnWindowFocus: false,
            keepPreviousData: true,
            onError: (_error: ApiError) => {},
        }
    );

    return result;
};

export default useAccountBalance;
