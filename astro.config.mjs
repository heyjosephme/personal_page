import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
  }),

  integrations: [react()],

  vite: {
    plugins: [tailwindcss()],
  },

  image: {
    // Using the default service (Squoosh)
    service: {
      entrypoint: "astro/assets/services/squoosh",
    },
    // Optional: Configure defaults
    remotePatterns: [
      {
        protocol: "https",
      },
    ],
  },
});
