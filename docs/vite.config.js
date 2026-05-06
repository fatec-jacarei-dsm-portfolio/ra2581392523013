import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/ra2581392523013/",
  build: {
    outDir: ".",
    emptyOutDir: false,
  },
});