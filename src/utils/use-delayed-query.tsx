import { useQuery as useApolloQuery } from "@apollo/client";
import { useState, useEffect } from "react";

/**
 * Helper hook to artificially slow down the query response for demo purposes
 *
 * By default queries will be delayed by 1000ms (1 second)
 */
export const useQuery = (query, options = {}, delay = 1000) => {
  const { loading, data, error, ...rest } = useApolloQuery(query, options);

  const [delayedData, setDelayedData] = useState<any>(null);
  const [delayedLoading, setDelayedLoading] = useState(true);

  useEffect(() => {
    if (!loading) {
      // When the query is done loading, set a timer to delay the data
      const timer = setTimeout(() => {
        setDelayedData(data);
        setDelayedLoading(false);
      }, delay);

      // Clean up the timer when the component unmounts
      return () => clearTimeout(timer);
    }
  }, [loading, data, delay]);

  return {
    loading: delayedLoading,
    data: delayedData,
    error,
    ...rest,
  };
};
