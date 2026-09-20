export const SITE_TITLE =
	"Joseph Ju — Freelance FDE & Full-Stack Developer in Tokyo";

export const SITE_DESCRIPTION =
	"I'm Joseph, a freelance forward deployed engineer and full-stack developer in Tokyo. Read my notes on software development and indie hacking after hours.";

/** Use production URLs without tracking parameters, matching the sitemap's trailing slashes. */
export function canonicalPageURL(
	input: string,
	site: URL | string = "https://heyjoseph.me",
): string {
	const pathname = new URL(input, site).pathname;
	return new URL(`${pathname.replace(/\/+$/, "")}/`, site).href;
}
