import { gql } from "@apollo/client";

export const REPOSITORIES_QUERY = gql`
  query repositoriesQuery {
    viewer {
      id
      followers(first: 100) {
        edges {
          node {
            id
            gists(first: 100) {
              edges {
                node {
                  id
                  createdAt
                }
              }
            }
          }
        }
      }
      repositories  {
        totalCount
      }
    }
  }
`;