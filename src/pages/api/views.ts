import type { APIRoute } from "astro";
import { env } from "cloudflare:workers";

// SSR endpoint (runs on the Worker) — needed for KV access.
export const prerender = false;

const KEY = (slug: string) => `views:${slug}`;

// Only accept slugs that look like our own post paths, so this can't be
// used to write arbitrary keys into KV.
function cleanSlug(raw: unknown): string | null {
  if (typeof raw !== "string") return null;
  const s = raw.trim();
  return /^\/blog\/[a-z0-9-]+$/.test(s) ? s : null;
}

function json(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "content-type": "application/json", "cache-control": "no-store" },
  });
}

// GET /api/views?slug=/blog/x — read the current count (no increment)
export const GET: APIRoute = async ({ url }) => {
  const slug = cleanSlug(url.searchParams.get("slug"));
  if (!slug) return json({ error: "invalid slug" }, 400);
  const kv = env.VIEWS;
  if (!kv) return json({ views: null }); // binding not configured yet
  const val = await kv.get(KEY(slug));
  return json({ views: val ? Number(val) : 0 });
};

// POST /api/views {"slug":"/blog/x"} — increment and return the new count.
// Note: KV read-then-write isn't atomic, so counts are approximate under
// heavy concurrency — fine for a blog view counter.
export const POST: APIRoute = async ({ request }) => {
  const body = await request.json().catch(() => null);
  const slug = cleanSlug((body as { slug?: unknown } | null)?.slug);
  if (!slug) return json({ error: "invalid slug" }, 400);
  const kv = env.VIEWS;
  if (!kv) return json({ views: null });
  const current = Number((await kv.get(KEY(slug))) ?? "0") || 0;
  const next = current + 1;
  await kv.put(KEY(slug), String(next));
  return json({ views: next });
};
