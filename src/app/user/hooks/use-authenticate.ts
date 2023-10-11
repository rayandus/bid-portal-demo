import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { Token } from '../types';
import { ApiError, useApiService } from '../../common/providers/api-service-provider';

// TO DO: Separate login and auth from user

interface UseAuthenticateVariables {
  email: string;
  password: string;
}

type UseAuthenticateResponse = UseMutationResult<
  Token,
  ApiError,
  UseAuthenticateVariables
>;

const useAuthenticate = (): UseAuthenticateResponse => {
  const apiService = useApiService();

  const result = useMutation(
    async (variables: UseAuthenticateVariables) => {
      const { email, password } = variables;

      const response = await apiService.axiosInstance.post<Token>('/auth/login', {
        email,
        password,
      });

      return response.data;
    },
    {
      onSuccess: (data: Token) => {
        const { token } = data;
        sessionStorage.setItem('token', token);
        apiService.setBearerToken(token);
      },
      onError: (_error: ApiError) => {},
    },
  );

  return { ...result };
};

export default useAuthenticate;
