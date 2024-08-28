import { gql } from "@apollo/client";

export const REPOSITORIES_QUERY = gql`
  query repositoriesQuery {
    viewer {
      id
      repositories {
        totalCount
        totalDiskUsage
      }
    }
  }
`;