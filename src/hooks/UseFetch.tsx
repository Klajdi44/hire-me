import { useState, useEffect } from "react";
import { LOADING_STATUS } from "../constants/constants";
import { Children } from "../types";

const useFetch = (url: string) => {
  const [data, setData] = useState<null | Children>(null);
  const [error, setError] = useState<null | string>(null);
  const [loadingState, setLoadingState] = useState<LOADING_STATUS | null>(null);

  useEffect(() => {
    setLoadingState(LOADING_STATUS.LOADING);

    fetch(url)
      .then(response => {
        if (!response.ok) {
          setLoadingState(null);
          throw new Error("something went wrong");
        }
        return response.json();
      })
      .then(apiData => {
        setError(null);
        setLoadingState(LOADING_STATUS.LOADED);
        setData(apiData);
      })
      .catch(err => {
        setData(null);
        setLoadingState(null);
        setError(err.message);
      });
  }, [url]);
  return {
    data,
    error,
    loadingState,
  };
};
export default useFetch;
