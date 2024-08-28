import { gql } from "@apollo/client";

export const HEADER_QUERY = gql`
  query headerQuery {
    viewer {
      id
      login
      name
      url
      avatarUrl
    }
  }
`;