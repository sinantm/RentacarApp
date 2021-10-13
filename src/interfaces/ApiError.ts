import { AnyType } from "./type";

export interface ApiError {
  data: AnyType;
  headers: AnyType;
  status: number;
  statusText: string;
}

export default ApiError;
