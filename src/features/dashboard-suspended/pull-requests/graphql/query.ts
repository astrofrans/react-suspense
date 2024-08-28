import { gql } from "@apollo/client";

export const PULL_REQUESTS_QUERY = gql`
  query pullRequestsQuery {
    viewer {
      id
      pullRequests(states: [OPEN]) {
        totalCount
      }
    }
  }
`;