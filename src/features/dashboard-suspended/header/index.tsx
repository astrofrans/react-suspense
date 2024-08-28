import React from "react";
import { HEADER_QUERY } from "./graphql/query";
import { Header as HeaderComponent } from "src/components/Header";
import { useSuspenseQuery } from "src/utils/use-delayed-suspense-query";

export const Header: React.FC = () => {
  const { data } = useSuspenseQuery(HEADER_QUERY, {}, 1500);

  const { login, url, avatarUrl } = data.viewer;

  return <HeaderComponent login={login} url={url} avatarUrl={avatarUrl} />;
};
