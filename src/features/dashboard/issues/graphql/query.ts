import { gql } from "@apollo/client";

export const ISSUES_QUERY = gql`
  query issuesQuery {
    viewer {
      id
      issues(states: [OPEN]) {
        totalCount
      }
    }
  }
`;