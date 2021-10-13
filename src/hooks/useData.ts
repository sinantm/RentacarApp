import { ApiResponse } from '../interfaces/ApiResponse';
import { AxiosPromise } from 'axios';
import { useCallback, useEffect, useRef, useState } from 'react';
import { AnyType } from 'interfaces/type';


export const useData = <T>(asyncFunction:AnyType, params?:AnyType, immediate = true) => {
  const counter = useRef(0);
  const [value, setValue] = useState<ApiResponse<T>>({
    loading: immediate
  });

  const execute = useCallback(() => {
    counter.current++;
    setValue({ ...value, loading: true });
    return (asyncFunction(params) as AxiosPromise<T>)
      .then((response: AnyType) => {
        if (response.isAxiosError) {
          setValue({ ...value, loading: false, data: undefined, error: response });
        } else {
          setValue({ ...value, loading: false, data: response.data as T });
        }
      })
      .catch((error) => {
        setValue({ ...value, loading: false, data: undefined, error: error });
      });
  }, [asyncFunction, params, value]);

  const setData = (data: T) => {
    setValue({ ...value, data, loading: false, error: undefined });
  };

  useEffect(() => {
    if (immediate && counter.current === 0) {
      execute();
    }
  }, [execute, immediate]);

  return { ...value, execute, setData };
};

export default useData;
