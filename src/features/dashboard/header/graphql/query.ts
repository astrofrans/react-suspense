import { gql } from "@apollo/client";

export const VIEWER_QUERY = gql`
  query viewerQuery {
    viewer {
      id
      login
      name
      url
      avatarUrl
    }
  }
`;