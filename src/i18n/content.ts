import { type CollectionEntry, getCollection } from "astro:content";
import { getRelativeLocaleUrl } from "astro:i18n";
import { type Locale, locales } from "./config";

export function postSlug(post: CollectionEntry<"blog">): string {
	return post.id.replace(/^(en|ja|zh-cn)\//, "");
}
export function translationKey(post: CollectionEntry<"blog">): string {
	return post.data.translationKey ?? postSlug(post);
}
export async function availablePosts() {
	const posts = await getCollection(
		"blog",
		({ data }) => import.meta.env.DEV || !data.draft,
	);
	const seen = new Set<string>();
	for (const post of posts) {
		if (!/^[a-z0-9-]+$/.test(postSlug(post)))
			throw new Error(
				`Blog entry ${post.id} must have a single kebab-case filename.`,
			);
		const folderLocale = /^(en|ja|zh-cn)\//.exec(post.id)?.[1];
		if (folderLocale && folderLocale !== post.data.lang)
			throw new Error(
				`Blog entry ${post.id} has mismatched lang: ${post.data.lang}`,
			);
		const key = `${post.data.lang}:${translationKey(post)}`;
		if (seen.has(key)) throw new Error(`Duplicate blog translation: ${key}`);
		seen.add(key);
	}
	return posts;
}
export async function localizedPosts(locale: Locale) {
	return (await availablePosts()).filter((post) => post.data.lang === locale);
}
export async function postAlternates(post: CollectionEntry<"blog">) {
	return (await availablePosts())
		.filter((entry) => translationKey(entry) === translationKey(post))
		.map((entry) => ({
			locale: entry.data.lang,
			href: getRelativeLocaleUrl(entry.data.lang, `blog/${postSlug(entry)}/`),
		}));
}
export function pageAlternates(path: string) {
	return locales.map((locale) => ({
		locale,
		href: getRelativeLocaleUrl(locale, path.replace(/^\//, "")),
	}));
}
