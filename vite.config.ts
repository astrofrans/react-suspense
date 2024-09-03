import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import basicSsl from "@vitejs/plugin-basic-ssl";

const GITHUB_CLIENT_URI = "https://api.github.com/graphql"
const HOST = "dev.reactsuspense.io";
const PORT = 3000;

export default defineConfig(() => ({
  plugins: [
    react({ include: "pathToAllReactFiles.{jsx,tsx}" }),
    basicSsl({ name: "React Suspense", domains: [HOST] }),
  ],
  resolve: {
    alias: {
      src: "/src",
    },
  },
  server: {
    port: PORT,
    host: HOST,
    proxy: {
      '/graphql': {
        target: GITHUB_CLIENT_URI,
        changeOrigin: true,
        secure: true,
        rewrite: path => path.replace(/^\/graphql/, '')
      },
    }
  },
}));
