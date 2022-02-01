import { useEffect, useState } from "react";

export function useRestApiData<T>(apiEndpointUrl: string): T | null {
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    fetch(apiEndpointUrl)
      .then((res) => res.json())
      .then(setData);
  }, []);

  return data;
}
