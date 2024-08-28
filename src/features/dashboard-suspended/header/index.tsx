import React from "react";
import { VIEWER_QUERY } from "./graphql/query";
import { Header as HeaderComponent } from "src/components/Header";
import { useSuspenseQuery } from "src/utils/use-delayed-suspense-query";

export const Header: React.FC = () => {
  const { data } = useSuspenseQuery(VIEWER_QUERY);

  if (!data?.viewer?.login) return null;

  const { login, url, avatarUrl } = data.viewer;

  return <HeaderComponent login={login} url={url} avatarUrl={avatarUrl} />;
};
