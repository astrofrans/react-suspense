import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const BEARER_TOKEN = import.meta.env.VITE_GITHUB_BEARER_TOKEN;

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  // XXX: This is bad practice and it MUST be removed.
  // The token should be fetched either from .env or from local storage.
  const token = BEARER_TOKEN;
  return {
    headers: {
      ...headers,
      Authorization: token ? `bearer ${token}` : "",
    },
  };
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
