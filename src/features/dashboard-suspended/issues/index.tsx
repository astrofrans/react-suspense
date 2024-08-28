import React from "react";
import { Card } from "src/components/Card";
import { ISSUES_QUERY } from "./graphql/query";
import { useSuspenseQuery } from "src/utils/use-delayed-suspense-query";

export const Issues = () => {
  const { data } = useSuspenseQuery(ISSUES_QUERY);

  if (!data) return null;

  const count = data.viewer.issues.totalCount;

  return (
    <Card href="/" title="Open issues" description={`${count} issues open`} />
  );
};
