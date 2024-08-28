import React from "react";
import {
  Header,
  PullRequests,
  Issues,
  Repositories,
  Footer,
} from "src/features/dashboard";
import { Layout } from "src/components/Layout";

export const DashboardRoute: React.FC = () => {
  return (
    <>
      <Header />
      <Layout>
        <PullRequests />
        <Issues />
        <Repositories />
      </Layout>
      <Footer />
    </>
  );
};
