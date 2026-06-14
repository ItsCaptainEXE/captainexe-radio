import { defineConfig } from "vite";

export default defineConfig({
  base: "/", // IMPORTANT for Vercel
  build: {
    outDir: "dist"
  }
});
