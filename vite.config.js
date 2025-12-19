import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // IMPORTANT: repo name must match exactly
  base: "/Vedansh-website/",
  plugins: [react()],
  build: {
    outDir: "docs",       // GitHub Pages can deploy from /docs
    emptyOutDir: true,
  },
});
