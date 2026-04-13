import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  output: "server",
  adapter: cloudflare({
    prerenderEnvironment: "node",
  }),

  integrations: [react(), sitemap()],

  vite: {
    plugins: [tailwindcss()],
  },

  site: "https://heyjoseph.me", // Replace with your actual domain
});
