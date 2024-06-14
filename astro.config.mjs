import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://cheery-kashata-d8db32.netlify.app",
  integrations: [preact()]
});