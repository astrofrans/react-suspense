import React from "react";
import {
  Header,
  PullRequests,
  Issues,
  Repositories,
  Footer,
} from "./dashboard";

import { Layout } from "src/components/Layout";

export const Dashboard: React.FC = () => {
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
