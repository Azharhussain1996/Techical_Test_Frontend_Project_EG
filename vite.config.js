import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteTsconfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), viteTsconfigPaths()],
  optimizeDeps: {
    include: ["react-imask"],
  },
  //base: "./",
  //base: "/dw/",
  // build: {
  //   target: 'esnext',
  // },
  resolve: {
    extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json"],
    alias: [
      { find: "layout", replacement: "/src/layout" },
      { find: "routes", replacement: "/src/routes" },
      { find: "actions", replacement: "/src/actions" },
      { find: "assets", replacement: "/src/assets" },
      { find: "components", replacement: "/src/components" },
      { find: "styles", replacement: "/assets/styles" },
      { find: "global", replacement: "/src/global" },
      { find: "services", replacement: "/src/services" },
      { find: "dummy-data", replacement: "/src/dummy-data" },
      { find: "lib", replacement: "/src/lib" },
      { find: "hooks", replacement: "/src/hooks" },
      { find: "store", replacement: "/src/store" },
    ],
  },
  server: {
    // this ensures that the browser opens upon server start
    open: true,
    // this sets a default port to 3000
    port: 3001,
  },
});
