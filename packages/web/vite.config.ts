import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    modules: {},
  },
  server: {
    port: 3000,
    proxy: {
      "/graphql": "http://localhost:3010",
    },
  },
});
