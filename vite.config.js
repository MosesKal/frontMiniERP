import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      jsx: {
        factory: "React.createElement",
        pragma: "React.createElement",
        loader: ".jsx",
      },
    },
  },
});
