import { ui } from "@/i18n/ui";
import { localePath, type Locale } from "@/i18n/config";
import { useState, useMemo } from "react";
import { BlogCard } from "./BlogCard";
import { Input } from "./ui/input";
import { RiSearchLine } from "@remixicon/react";
import type { EnhancedBlogPost } from "@/lib/blog-helpers";

interface BlogSearchProps {
	posts: EnhancedBlogPost[];
	locale?: Locale;
}

export function BlogSearch({ posts, locale = "en" }: BlogSearchProps) {
	const t = ui[locale];
	const [searchQuery, setSearchQuery] = useState("");

	// Filter posts based on search query
	const filteredPosts = useMemo(() => {
		if (!searchQuery.trim()) {
			return posts;
		}

		const query = searchQuery.toLowerCase().trim();
		const keywords = query.split(/\s+/); // Split by whitespace for multiple keywords

		return posts.filter((post) => {
			const searchableText = [
				post.data.title,
				post.data.description || "",
				...(post.data.categories || []),
				...(post.data.tags || []),
			]
				.join(" ")
				.toLowerCase();

			// Match if ANY keyword is found
			return keywords.some((keyword) => searchableText.includes(keyword));
		});
	}, [posts, searchQuery]);

	return (
		<div>
			{/* Search Input */}
			<div className="mb-8">
				<div className="relative max-w-2xl mx-auto">
					<RiSearchLine className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
					<Input
						type="text"
						placeholder={t.search}
						aria-label={t.search}
						value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}
						className="pl-10 h-12 text-base"
					/>
				</div>

				{/* Search Results Count */}
				{searchQuery.trim() && (
					<p className="text-sm text-muted-foreground text-center mt-3">
						{t.results} {filteredPosts.length}{" "}
						<button
							type="button"
							onClick={() => setSearchQuery("")}
							className="text-primary hover:underline"
						>
							{t.clearSearch}
						</button>
					</p>
				)}
			</div>

			{/* Posts Grid */}
			<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
				{filteredPosts.map((post) => (
					<BlogCard key={post.id} post={post} />
				))}
			</div>

			{/* Empty State */}
			{filteredPosts.length === 0 && !searchQuery.trim() && (
				<div className="text-center py-16">
					<p className="text-lg font-medium">{t.empty}</p>
					<p className="text-muted-foreground mt-2">
						<a
							href={localePath(locale, "about")}
							className="text-primary hover:underline"
						>
							{t.aboutMe}
						</a>
						{locale !== "en" && (
							<>
								{" "}
								·{" "}
								<a href="/blog/" className="text-primary hover:underline">
									{t.readEnglish}
								</a>
							</>
						)}
					</p>
				</div>
			)}
		</div>
	);
}
