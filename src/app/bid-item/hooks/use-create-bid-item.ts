import { useCallback } from 'react';
import { useMutation, UseMutationResult, useQueryClient } from '@tanstack/react-query';
import { ApiError, useApiService } from '../../common/providers/api-service-provider';
import bidItemQueryKeys from './query-keys';
import { ExpiryDuration } from '../../common/components';
import { BidItem } from '../types';

interface UseCreateBidItemVariables {
  name: string;
  startPrice: number;
  expiryDuration: ExpiryDuration;
  isActive: boolean;
}

interface UseCreateBidItemProps {
  canInvalidateQueries?: boolean;
}

type UseCreateBidItemResponse = UseMutationResult<BidItem, ApiError, UseCreateBidItemVariables>;

const useCreateBidItem = (props?: UseCreateBidItemProps): UseCreateBidItemResponse => {
  const { canInvalidateQueries = true } = props || {};

  const apiService = useApiService();

  const queryClient = useQueryClient();

  const result = useMutation(
    async (variables: UseCreateBidItemVariables) => {
      const response = await apiService.axiosInstance.post<BidItem>('/bid-item', variables);

      return response.data;
    },
    {
      onSuccess: () => {
        if (canInvalidateQueries) {
          invalidateQueries();
        }
      },
      onError: (_error: ApiError) => {},
    },
  );

  const invalidateQueries = useCallback(async (): Promise<void> => {
    const key = bidItemQueryKeys.getBidItems();

    await queryClient.invalidateQueries(key);
  }, [queryClient]);

  return { ...result };
};

export default useCreateBidItem;
