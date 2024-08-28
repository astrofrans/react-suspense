import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const BEARER_TOKEN = import.meta.env.VITE_GITHUB_BEARER_TOKEN;

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
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
