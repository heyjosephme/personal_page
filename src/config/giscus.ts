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
  repo: "heyjosephme/your-site-repo", // e.g. "heyjosephme/personal-site"
  repoId: "", // data-repo-id from giscus.app
  category: "Comments", // Discussion category name
  categoryId: "", // data-category-id from giscus.app
} as const;

export const giscusEnabled =
  giscusConfig.repoId.length > 0 && giscusConfig.categoryId.length > 0;
