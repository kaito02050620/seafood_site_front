import { defineConfig } from "vite";
import FullReload from "vite-plugin-full-reload";
// import dotenv from "dotenv";

// dotenv.config();

export default defineConfig({
  plugins: [FullReload(["config/routes.rb", "app/views/**/*"])],
  //   resolve: {
  //     alias: {
  //       path: "path-browserify",
  //     },
  //   },
  //   define: {
  //     "process.env": process.env,
  //   },
});
