import React from "react";
import { Route, Routes } from "react-router";
import { DashboardRoute } from "./_index";

export const Root: React.FC = () => (
  <Routes>
    <Route index element={<DashboardRoute />} />
  </Routes>
);
