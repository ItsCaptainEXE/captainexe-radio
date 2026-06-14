import { defineConfig } from "vite";

export default defineConfig({
  root: ".",        // <-- IMPORTANT
  base: "/",        // <-- IMPORTANT
  build: {
    outDir: "dist"
  }
});
