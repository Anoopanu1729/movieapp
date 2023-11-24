import { defineConfig } from "cypress";

export default defineConfig({
  defaultCommandTimeout:15000,
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
});
