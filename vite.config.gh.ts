import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // This MUST match your repo name exactly:
  base: "/metabull-site/",
  plugins: [react()],
});
