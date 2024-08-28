import { useSuspenseQuery as useApolloSuspenseQuery } from "@apollo/client";
import { useSuspenseQuery as useReactQuerySuspenseQuery } from "@tanstack/react-query";

const waitUntil = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Helper hook to artificially slow down the query response for demo purposes
 *
 * By default queries will be delayed by 1000ms (1 second)
 */
export const useSuspenseQuery = (query, options = {}, delay = 1000) => {
  const apolloRes = useApolloSuspenseQuery(query, {});
  
  /**
   * This is an absolutely terrible way to do this, but it's just for demo purposes,
   * and piggy-backing on the @tanstack/react-query Suspense API made this a whole lot easier
   */
  const res = useReactQuerySuspenseQuery({
    queryKey: ["demo", query],
    queryFn: async () => {
      await waitUntil(delay);
      return apolloRes.data;
    },
  });

  return res;
};
