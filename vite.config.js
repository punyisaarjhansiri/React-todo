import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/ReactProject-6-todo-ver1/",
  plugins: [react()],
});
