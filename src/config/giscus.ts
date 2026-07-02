// Giscus comments configuration.
//
// To turn comments on:
//   1. Make the site's GitHub repo PUBLIC and enable Discussions
//      (repo Settings → General → Features → Discussions).
//   2. Install the giscus app: https://github.com/apps/giscus
//   3. Open https://giscus.app, enter the repo, choose a Discussion
//      category (e.g. "Comments"), and copy the four values below.
//
// Until repoId and categoryId are filled in, the comments section is
// hidden in production (and shows a small reminder in dev).
export const giscusConfig = {
  repo: "heyjosephme/personal_page",
  repoId: "R_kgDON5cClQ", // heyjosephme/personal_page (fetched via GitHub API)
  category: "Announcements", // giscus opens threads in this category (announcement-type = no spam)
  categoryId: "DIC_kwDON5cClc4DAVAR", // "Announcements" category (fetched via GitHub API)
} as const;

export const giscusEnabled =
  giscusConfig.repoId.length > 0 && giscusConfig.categoryId.length > 0;
