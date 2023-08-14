// TODO: Improve error handling & data printing

import { useState, useEffect } from "react";

export function usePageContent(url) {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    try {
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error(
              `Failed to fetch data. HTTP response status: ${response.status}`
            );
          }
          return response.json();
        })
        .then((fetchedData) => {
          setData(fetchedData);
          setLoading(false);
          console.log("Data fetched ", fetchedData);
        });
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  }, [url]);

  return { data, isLoading };
}
