import React, { useEffect, useState, useRef } from "react";

export const useFetch = (url, _body) => {
  const [data, setData] = useState(null);
  // Adding the loading functionality
  const [loading, setLoading] = useState(false);
  // Error handling
  const [error, setError] = useState();
  const body = useRef(_body); // to create a reference for not just elements, but for your values as well.
  // If you are using function you need to use "useCallback"
  // if you are using an object you need to use use "useRef"

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const result = await response.json();
        setLoading(false);
        setData(result);
        setError("");
        console.log("------")
        
      } catch (error) {
        setLoading(false);
        setError(error.message);
      }
    };
    fetchData();
  }, [url, body]);

  return { data, loading, error };
};
