"use client";

import { useState, useEffect } from "react";
import { fetchData } from "../../services/fetchData";

export function usePageContent(url) {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetchData(url)
      .then((data) => {
        setData(data);
        setLoading(false);
        console.log("Data fetched ", data);
      })
      .catch((error) => {
        console.error("Failure to fetch data.", error);
      });
  }, [url]);

  return { data, isLoading };
}
