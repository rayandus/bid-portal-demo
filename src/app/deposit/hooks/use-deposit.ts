import { useCallback } from 'react';
import { useMutation, UseMutationResult, useQueryClient } from '@tanstack/react-query';
import { Account } from '../types';
import { ApiError, useApiService } from '../../common/providers/api-service-provider';
import { userQueryKeys } from '../../user-profile/hooks';

interface UseDepositVariables {
  amount: number;
}

interface UseDepositProps {
  canInvalidateQueries?: boolean;
}

type UseDepositResponse = UseMutationResult<Account, ApiError, UseDepositVariables>;

const useDeposit = (props?: UseDepositProps): UseDepositResponse => {
  const { canInvalidateQueries = true } = props || {};

  const apiService = useApiService();

  const queryClient = useQueryClient();

  const result = useMutation(
    async (variables: UseDepositVariables) => {
      const { amount } = variables;

      const response = await apiService.axiosInstance.post<Account>('/account/deposit', {
        amount,
      });

      return response.data;
    },
    {
      onSuccess: (_data: Account) => {
        if (canInvalidateQueries) {
          invalidateQueries();
        }
      },
      onError: (_error: ApiError) => {},
    },
  );

  const invalidateQueries = useCallback(async (): Promise<void> => {
    const key = userQueryKeys.getAccountBalance();

    await queryClient.invalidateQueries(key);
  }, [queryClient]);

  return { ...result };
};

export default useDeposit;
