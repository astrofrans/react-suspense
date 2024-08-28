import React from "react";
import { Card } from "src/components/Card";
import { PULL_REQUESTS_QUERY } from "./graphql/query";
import { useSuspenseQuery } from "src/utils/use-delayed-suspense-query";

export const PullRequests = () => {
  const { data } = useSuspenseQuery(PULL_REQUESTS_QUERY, {}, 2100);

  const count = data.viewer.pullRequests.totalCount;

  return (
    <Card
      href="/"
      title="Open pull requests"
      description={`${count} pull requests open`}
    />
  );
};
