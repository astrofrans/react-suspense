import React from "react";
import { Card } from "src/components/Card";
import { PULL_REQUESTS_QUERY } from "./graphql/query";
import { CardSkeleton } from "src/components/Card/skeleton";
import { useQuery } from "src/utils/use-delayed-query";

export const PullRequests = () => {
  const { loading, data } = useQuery(PULL_REQUESTS_QUERY, {}, 1500);

  if (loading) {
    return <CardSkeleton />;
  }

  if (!data) return null;

  const count = data.viewer.pullRequests.totalCount;

  return (
    <Card
      href="/"
      title="Open pull requests"
      description={`${count} pull requests open`}
    />
  );
};
