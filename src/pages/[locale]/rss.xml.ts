export { GET } from "../rss.xml";
export const prerender = true;
export function getStaticPaths() {
	return ["ja", "zh-cn"].map((locale) => ({ params: { locale } }));
}
