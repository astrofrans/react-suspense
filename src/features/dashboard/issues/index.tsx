import React from "react";
import { Card } from "src/components/Card";
import { ISSUES_QUERY } from "./graphql/query";
import { CardSkeleton } from "src/components/Card/skeleton";
import { useQuery } from "src/utils/use-delayed-query";

export const Issues = () => {
  const { loading, data } = useQuery(ISSUES_QUERY);

  if (loading) {
    return <CardSkeleton />;
  }

  if (!data) return null;

  const count = data.viewer.issues.totalCount;

  return (
    <Card href="/" title="Open issues" description={`${count} issues open`} />
  );
};
