import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "happy-dom",
    setupFiles: "./src/tests/setup.js",
  },
  server: {
    port: 5173,
    host: "0.0.0.0",
  },
});
