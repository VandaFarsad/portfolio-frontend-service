import { useEffect, useRef, useState } from "react";

type FetchState = "initial" | "loading" | "success" | "error";

export const useFetch = <T,>(fetchFn: () => Promise<T[]>) => {
  const [data, setData] = useState<T[]>([]);
  const [state, setState] = useState<FetchState>("initial");
  const fetchFnRef = useRef(fetchFn);
  fetchFnRef.current = fetchFn;

  useEffect(() => {
    setState("loading");
    fetchFnRef
      .current()
      .then((result) => {
        setData(result);
        setState("success");
      })
      .catch(() => {
        setData([]);
        setState("error");
      });
  }, []);

  return { data, state };
};
