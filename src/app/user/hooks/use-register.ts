import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { ApiError, useApiService } from '../../common/providers/api-service-provider';
import { User } from '../../user-profile/types';

interface UseRegisterVariables {
  email: string;
  password: string;
}

type UseRegisterResponse = UseMutationResult<User, ApiError, UseRegisterVariables>;

const useRegister = (): UseRegisterResponse => {
  const apiService = useApiService();

  const result = useMutation(
    async (variables: UseRegisterVariables) => {
      const { email, password } = variables;

      const response = await apiService.axiosInstance.post<User>('/user/register', {
        email,
        password,
      });

      return response.data;
    },
    {
      onError: (_error: ApiError) => {},
    },
  );

  return { ...result };
};

export default useRegister;
