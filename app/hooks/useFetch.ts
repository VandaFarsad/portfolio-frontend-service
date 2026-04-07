import { useEffect, useState } from "react";

type FetchState = "initial" | "loading" | "success" | "error";

export const useFetch = <T,>(fetchFn: () => Promise<T[]>) => {
  const [data, setData] = useState<T[]>([]);
  const [state, setState] = useState<FetchState>("initial");

  useEffect(() => {
    setState("loading");
    fetchFn()
      .then((result) => {
        setData(result);
        setState("success");
      })
      .catch(() => {
        setData([]);
        setState("error");
      });
  }, [fetchFn]);

  return { data, state };
};
