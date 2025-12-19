import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // IMPORTANT: custom domain (vedansh.in) serves from root
  base: "/",
  plugins: [react()],
  build: {
    outDir: "docs", // keep /docs if your Pages workflow uploads ./docs
    emptyOutDir: true,
  },
});
