import React from "react";
import { CardSkeleton } from "src/components/Card/skeleton";
import { Footer } from "src/components/Footer";
import { HeaderSkeleton } from "src/components/Header/skeleton";
import { Layout } from "src/components/Layout";

export const SuspendedDashboardSkeleton: React.FC = () => (
  <>
    <HeaderSkeleton />
    <Layout>
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </Layout>
    <Footer />
  </>
);
