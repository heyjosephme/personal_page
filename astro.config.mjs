import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  output: "server",
  adapter: cloudflare({
    prerenderEnvironment: "node",
    // v14 changed the default image service from "compile" to "cloudflare-binding",
    // which requires a Cloudflare Images (IMAGES) binding at runtime. Keep compile-time
    // optimization (pre-v14 behavior) so astro:assets images work without extra bindings.
    imageService: "compile",
  }),

  integrations: [react(), sitemap()],

  vite: {
    plugins: [tailwindcss()],
    // Cold-start "Invalid hook call" / "Cannot read properties of null (reading
    // 'useState')" fix for the Cloudflare workerd dev SSR (Astro 7 + adapter 14).
    //
    // The adapter runs dev SSR inside workerd and optimizes server deps into
    // .vite/deps_ssr. If any island dependency is discovered *lazily* (i.e. it
    // isn't pre-bundled), Vite re-runs optimization and reloads the worker
    // mid-render. React and react-dom/server can then land in separate optimize
    // passes, leaving react-dom/server with a React whose hook dispatcher is
    // null — so the first request renders nothing and only a refresh (after the
    // optimizer settles) works. It is a timing artifact, not a real duplicate.
    //
    // Fix: pre-bundle React AND every island dependency in a single startup pass
    // so the optimizer never reloads during a request. The Cloudflare adapter
    // merges `vite.optimizeDeps.include` into every server environment
    // (astro/ssr/prerender) and it also applies to the client, so one list
    // covers both. Keep this in sync with the libraries used by React islands.
    optimizeDeps: {
      include: [
        // React core
        "react",
        "react-dom",
        "react-dom/server",
        "react/jsx-runtime",
        "react/jsx-dev-runtime",
        // Island dependencies (Radix UI, icons, animation, globe, misc)
        "@radix-ui/react-dropdown-menu",
        "@radix-ui/react-navigation-menu",
        "@radix-ui/react-slot",
        "@radix-ui/react-switch",
        "lucide-react",
        "@remixicon/react",
        "framer-motion",
        "react-globe.gl",
        "tocbot",
        "class-variance-authority",
        "clsx",
        "tailwind-merge",
        // Server-side deps that are otherwise discovered lazily on the first
        // request (the adapter's SSR entry and the content-collection zod
        // schemas). Pre-bundling them removes the last optimizer reloads, which
        // is what re-desyncs React mid-render on a cold start.
        "@astrojs/cloudflare/entrypoints/server",
        "astro/zod",
      ],
    },
  },

  site: "https://heyjoseph.me", // Replace with your actual domain
});
