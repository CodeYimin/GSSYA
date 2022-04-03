import reactRefresh from "@vitejs/plugin-react-refresh";
import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh(), tsConfigPaths()],
  server: {
    hmr: true,
    port: 3044,
  },
});
