import * as path from "node:path";
import { defineConfig } from "rspress/config";

export default defineConfig({
  root: path.join(__dirname, "docs"),
  title: "Cloika tavern",
  icon: "/favicon.png",
  logo: {
    light: "/favicon.png",
    dark: "/favicon.png",
  },
  themeConfig: {
    socialLinks: [
      {
        icon: "github",
        mode: "link",
        content: "https://github.com/cloika25/cloika-tavern",
      },
    ],
  },
  base: "/",
  outDir: "doc_build",
  builderConfig: {
    output: {
      assetPrefix: "/",
    },
    tools: {
      rspack: {
        resolve: {
          fallback: {
            // Provide fallbacks for node modules that might cause issues
            path: false,
            fs: false,
          },
        },
      },
    },
  },
});
