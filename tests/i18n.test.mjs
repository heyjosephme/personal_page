import assert from "node:assert/strict";
import test from "node:test";
import {
	localeFromPath,
	localePath,
	locales,
	translatedPages,
	unlocalizedPath,
} from "../src/i18n/config.ts";
import { ui } from "../src/i18n/ui.ts";

test("English URLs remain unprefixed, including RSS", () => {
	assert.equal(localePath("en"), "/");
	assert.equal(localePath("en", "/blog/example/"), "/blog/example/");
	assert.equal(localePath("en", "rss.xml"), "/rss.xml");
});
test("locale paths preserve pages and endpoint extensions", () => {
	for (const locale of ["ja", "zh-cn"]) {
		assert.equal(localePath(locale), `/${locale}/`);
		assert.equal(
			localePath(locale, "blog/example"),
			`/${locale}/blog/example/`,
		);
		assert.equal(localePath(locale, "rss.xml"), `/${locale}/rss.xml`);
		for (const path of translatedPages) {
			const localized = localePath(locale, path);
			assert.equal(localeFromPath(localized), locale);
			assert.equal(unlocalizedPath(localized), localePath("en", path));
		}
	}
});
test("locale detection respects path segment boundaries", () => {
	assert.equal(localeFromPath("/japan/"), "en");
	assert.equal(unlocalizedPath("/japan/"), "/japan/");
	assert.equal(localeFromPath("/ja/about/"), "ja");
	assert.equal(localeFromPath("/zh-cn/blog/"), "zh-cn");
});
test("every supported language provides every UI message", () => {
	for (const locale of locales) {
		assert.deepEqual(Object.keys(ui[locale]).sort(), Object.keys(ui.en).sort());
		for (const value of Object.values(ui[locale]))
			assert.ok(value.trim().length);
	}
});
