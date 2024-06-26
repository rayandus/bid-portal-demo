import { useCallback } from 'react';
import { useMutation, UseMutationResult, useQueryClient } from '@tanstack/react-query';
import { ApiError, useApiService } from '../../common/providers/api-service-provider';
import bidItemQueryKeys from './query-keys';
import { BidItem } from '../types';
import { userQueryKeys } from '../../user-profile/hooks';
import { ViewBidItemsEnum } from '../view-bid-items';

interface UsePlaceBidVariables {
  bidItemId: string;
  amount: number;
}

interface UsePlaceBidProps {
  canInvalidateQueries?: boolean;
}

type UsePlaceBidResponse = UseMutationResult<BidItem, ApiError, UsePlaceBidVariables>;

const usePlaceBid = (props?: UsePlaceBidProps): UsePlaceBidResponse => {
  const { canInvalidateQueries = true } = props || {};

  const apiService = useApiService();

  const queryClient = useQueryClient();

  const result = useMutation(
    async (variables: UsePlaceBidVariables) => {
      const { bidItemId, amount } = variables;
      const response = await apiService.axiosInstance.put<BidItem>(
        `/bid-item/${bidItemId}`,
        { amount },
      );

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
    const keyViewManagedBidItems = bidItemQueryKeys.getBidItems(ViewBidItemsEnum.MANAGED);
    const keyViewAllBidItems = bidItemQueryKeys.getBidItems(ViewBidItemsEnum.ALL);
    const keyAccountBalance = userQueryKeys.getAccountBalance();

    Promise.allSettled([
      queryClient.invalidateQueries(keyViewManagedBidItems),
      queryClient.invalidateQueries(keyViewAllBidItems),
      queryClient.invalidateQueries(keyAccountBalance),
    ]);
  }, [queryClient]);

  return { ...result };
};

export default usePlaceBid;
