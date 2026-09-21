import { type Locale, localePath, translatedPages } from "./config";
/** Untranslated editorial pages keep their English URLs until a translation exists. */
export function localizedNavPath(locale: Locale, path: string) {
	return translatedPages.includes(path.replace(/\/$/, "") || "/")
		? localePath(locale, path)
		: path;
}
