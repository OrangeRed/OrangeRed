import { defineConfig } from "astro/config"
import tailwind from "@astrojs/tailwind"

import { SITE_URL } from "@content/metadata.json"

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  integrations: [tailwind({ applyBaseStyles: false })],
})
