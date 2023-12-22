import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      less: {
        module: true,
        javascriptEnabled: true,
        math: "parens-division",
      },
    },
  },
  server: {
    port: 8000,
    cors: true,
    proxy: {
      "/api": {
        target: "https://www.landcover100.com/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
