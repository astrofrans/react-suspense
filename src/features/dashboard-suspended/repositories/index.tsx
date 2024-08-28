import React from "react";
import { Card } from "src/components/Card";
import { REPOSITORIES_QUERY } from "./graphql/query";
import { useSuspenseQuery } from "src/utils/use-delayed-suspense-query";

export const Repositories = () => {
  const { data } = useSuspenseQuery(REPOSITORIES_QUERY);

  if (!data) return null;

  const count = data.viewer.repositories.totalCount;

  return (
    <Card href="/" title="Repositories" description={`${count} repositories`} />
  );
};
