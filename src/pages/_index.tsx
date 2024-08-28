import React, { Suspense } from "react";
import {
  Header,
  PullRequests,
  Issues,
  Repositories,
  Footer,
} from "src/features/dashboard-suspended";
import { Layout } from "src/components/Layout";
import { SuspendedDashboardSkeleton } from "src/features/dashboard-suspended/skeleton";

export const DashboardRoute: React.FC = () => {
  return (
    <Suspense fallback={<SuspendedDashboardSkeleton />}>
      <>
        <Header />
        <Layout>
          <PullRequests />
          <Issues />
          <Repositories />
        </Layout>
        <Footer />
      </>
    </Suspense>
  );
};
