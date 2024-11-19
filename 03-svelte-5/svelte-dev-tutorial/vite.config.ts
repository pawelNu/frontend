import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// https://vite.dev/config/
export default defineConfig({
  plugins: [svelte()],
  mode: "development",
  server: {
    hmr: true,
  },
  build: {
    sourcemap: true,
  },
});
