import { ui } from "@/i18n/ui";
import { localePath, type Locale } from "@/i18n/config";
import type { EnhancedBlogPost } from "@/lib/blog-helpers";
import { BlogCard } from "@/components/BlogCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface RecentBlogPostsProps {
	posts: EnhancedBlogPost[];
	locale?: Locale;
	maxPosts?: number;
}

export function RecentBlogPosts({
	posts,
	maxPosts = 5,
	locale = "en",
}: RecentBlogPostsProps) {
	const t = ui[locale];
	const recentPosts = posts.slice(0, maxPosts);

	if (recentPosts.length === 0) {
		return null;
	}

	return (
		<section className="container px-4 py-16 mx-auto">
			<div className="max-w-7xl mx-auto">
				{/* Section Header */}
				<div className="flex items-center justify-between mb-8">
					<div>
						<h2 className="text-3xl font-bold tracking-tight">{t.latest}</h2>
						<p className="text-muted-foreground mt-2">{t.blogDescription}</p>
					</div>
					<Button variant="ghost" asChild className="hidden md:flex">
						<a
							href={localePath(locale, "blog")}
							className="flex items-center gap-2"
						>
							{t.allPosts}
							<ArrowRight className="w-4 h-4" />
						</a>
					</Button>
				</div>

				{/* Blog Posts Grid */}
				<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
					{recentPosts.map((post) => (
						<BlogCard key={post.id} post={post} />
					))}
				</div>

				{/* Mobile View All Button */}
				<div className="mt-8 text-center md:hidden">
					<Button variant="outline" asChild>
						<a
							href={localePath(locale, "blog")}
							className="flex items-center gap-2 mx-auto w-full"
						>
							{t.allPosts}
							<ArrowRight className="w-4 h-4" />
						</a>
					</Button>
				</div>
			</div>
		</section>
	);
}
