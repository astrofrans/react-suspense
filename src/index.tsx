import { Root } from "./pages";
import React from "react";
import { createRoot } from "react-dom/client";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { client } from "./apollo-client";
import { ApolloProvider } from "@apollo/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

async function renderApp(Component: React.FC) {
  const container = document.getElementById("app");

  if (container) {
    const root = createRoot(container);
    root.render(
      <BrowserRouter basename="/">
        <title>React Suspense demo</title>
        <QueryClientProvider client={queryClient}>
          <ApolloProvider client={client}>
            <Routes>
              <Route path="/*" element={<Component />} />
            </Routes>
          </ApolloProvider>
        </QueryClientProvider>
      </BrowserRouter>
    );
  }
}

renderApp(Root);
