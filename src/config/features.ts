// Section/page feature toggles.
//
// Flip a flag to `false` to hide a section from the whole site: its nav +
// footer links disappear, home sections stop rendering, the page redirects to
// home, its dynamic detail pages aren't generated, and it's dropped from the
// sitemap. Flip back to `true` to restore it — no other edits needed.
export const features = {
  projects: false, // /projects (+ /projects/[id]), nav/footer links, home "Featured Projects"
  reading: false, // /reading (+ /reading/[slug]), nav/footer links
} as const;

export type Feature = keyof typeof features;
