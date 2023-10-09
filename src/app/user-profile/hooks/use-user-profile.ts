import { useCallback } from 'react';
import { useQuery, UseQueryResult } from '@tanstack/react-query';
import queryKeys from './query-keys';
import { ApiError, useApiService } from '../../common/providers/api-service-provider';
import { User } from '../types';

type UseUserProfileResponse = UseQueryResult<User, ApiError>;

const useUserProfile = (): UseUserProfileResponse => {
    const { axiosInstance } = useApiService();

    const fetch = useCallback(async () => {
        const response = await axiosInstance.get<User>('/user/me');

        return response.data;
    }, []);

    const result = useQuery(
        queryKeys.getUserProfile(),
        () => fetch(),
        {
            refetchOnWindowFocus: false,
            keepPreviousData: true,
            onError: (_error: ApiError) => {},
        }
    );

    return result;
};

export default useUserProfile;
