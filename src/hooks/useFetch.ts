import { useEffect, useState } from "react";

const useFetch = <T>(
  fetch: () => Promise<any>,
) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect( () => {
    setLoading(true);
    fetch()
      .then(response => setData(response))
      .catch((err: string) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return { data, loading, error };
};

export default useFetch;
