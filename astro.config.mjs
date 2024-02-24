import tailwind from "@astrojs/tailwind"
import vercel from "@astrojs/vercel/serverless"
import { defineConfig } from "astro/config"

import solidJs from "@astrojs/solid-js"

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind(), solidJs()],
	output: "server",
	adapter: vercel(),
	i18n: {
		defaultLocale: "es",
		locales: ["es", "en"],
		routing: {
			prefixDefaultLocale: false
		}
	}
})
