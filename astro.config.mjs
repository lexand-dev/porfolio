import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: "https://lexand.website/",
  integrations: [tailwind(), react()],
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
    routing: {
      prefixDefaultLocale: false,
    },
    fallback: {
      en: "es",
    },
  },
  output: "server",
  adapter: vercel({
    webAnalytics: { enabled: true },
  }),
});
