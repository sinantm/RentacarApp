import { ApiError } from './ApiError';
import { AxiosError } from 'axios';

export interface ApiResponse<T> {
  data?: T;
  loading: boolean;
  error?: AxiosError<ApiError>;
  execute?: () => void;
}

export default ApiResponse;
