import axios, { AxiosInstance } from 'axios';

export interface ApiError extends Error {
  response: {
    data: {
      message: string;
      statusCode: number;
    };
  };
  status: number;
  statusText: string;
}

class ApiService {
  public axiosInstance: AxiosInstance;

  public constructor(baseUrl: string) {
    this.axiosInstance = axios.create({ baseURL: baseUrl });

    const token = sessionStorage.getItem('token');

    if (token) {
      this.setBearerToken(token);
    }

    this.setInterceptors();
  }

  public setInterceptors = () => {
    this.axiosInstance.interceptors.response.use(
      (response) => {
        return response;
      },
      (err: ApiError) => {
        return this.onInterceptorsReject(err);
      },
    );
  };

  private onInterceptorsReject = (err: ApiError) => {
    console.log('*** document.location.pathname', document.location.pathname);
    if (
      (err.status === 401 || err.response.data.statusCode === 401) &&
      !['/login'].includes(document.location.pathname)
    ) {
      // TO DO: Keep previous path for redirection
      document.location.href = '/login';
    }

    return Promise.reject(err);
  };

  public setBearerToken(token: string): void {
    this.axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }
}

export default ApiService;
