import React from "react";
import { HEADER_QUERY } from "./graphql/query";
import { Header as HeaderComponent } from "src/components/Header";
import { HeaderSkeleton } from "src/components/Header/skeleton";
import { useQuery } from "src/utils/use-delayed-query";

export const Header: React.FC = () => {
  const { loading, data } = useQuery(HEADER_QUERY, {}, 1500);

  if (loading) {
    return <HeaderSkeleton />;
  }

  if (!data?.viewer?.login) return null;

  const { login, url, avatarUrl } = data.viewer;

  return <HeaderComponent login={login} url={url} avatarUrl={avatarUrl} />;
};
