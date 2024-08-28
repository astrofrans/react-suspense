import React from "react";
import { Card } from "src/components/Card";
import { REPOSITORIES_QUERY } from "./graphql/query";
import { CardSkeleton } from "src/components/Card/skeleton";
import { useQuery } from "src/utils/use-delayed-query";

export const Repositories = () => {
  const { loading, data } = useQuery(REPOSITORIES_QUERY);

  if (loading) {
    return <CardSkeleton />;
  }

  if (!data) return null;

  const count = data.viewer.repositories.totalCount;
  const totalDiskUsage = data.viewer.repositories.totalDikUsage;

  return (
    <Card href="/" title="Repositories" description={`${count} repositories`} />
  );
};
