export const locales = ["en", "ja", "zh-cn"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";
export const languageNames: Record<Locale, string> = {
	en: "English",
	ja: "日本語",
	"zh-cn": "简体中文",
};
export const languageTags: Record<Locale, string> = {
	en: "en",
	ja: "ja",
	"zh-cn": "zh-CN",
};
export const ogLocales: Record<Locale, string> = {
	en: "en_US",
	ja: "ja_JP",
	"zh-cn": "zh_CN",
};
export function isLocale(value: string | undefined): value is Locale {
	return locales.some((locale) => locale === value);
}
export function localeFromPath(path: string): Locale {
	const first = path.split("/")[1];
	return isLocale(first) ? first : defaultLocale;
}
export function unlocalizedPath(path: string): string {
	return path.replace(/^\/(ja|zh-cn)(?=\/|$)/, "") || "/";
}
/** Client-safe links matching Astro's prefixDefaultLocale: false configuration. */
export function localePath(locale: Locale, path = "/"): string {
	const clean = path.replace(/^\/+|\/+$/g, "");
	const prefix = locale === defaultLocale ? "" : `/${locale}`;
	return `${prefix}/${clean}${clean && !/\.[a-z0-9]+$/i.test(clean) ? "/" : ""}`;
}
export const translatedPages = [
	"/",
	"/about",
	"/blog",
	"/tag",
	"/category",
	"/now",
	"/uses",
	"/changelog",
	"/contact",
];
