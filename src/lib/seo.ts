/** Use production URLs without tracking parameters, matching the sitemap's trailing slashes. */
export function canonicalPageURL(
	input: string,
	site: URL | string = "https://heyjoseph.me",
): string {
	const pathname = new URL(input, site).pathname;
	return new URL(`${pathname.replace(/\/+$/, "")}/`, site).href;
}
