import { ui } from "@/i18n/ui";
import { localePath } from "@/i18n/config";
import { useEffect, useState } from "react";
import type { EnhancedBlogPost } from "@/lib/blog-helpers";
import { CalendarIcon, Tags, Clock, Eye } from "lucide-react";
import { RiFolderOpenLine } from "@remixicon/react";
import { Badge } from "@/components/ui/badge";
import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface BlogCardProps {
	post: EnhancedBlogPost;
	class?: string;
}

export function BlogCard({ post, class: className }: BlogCardProps) {
	const locale = post.data.lang;
	const t = ui[locale];
	// Read-only view count (no increment — that only happens on the post page).
	const [views, setViews] = useState<number | null>(null);
	useEffect(() => {
		let active = true;
		fetch(`/api/views?slug=${encodeURIComponent(post.viewSlug)}`)
			.then((r) => r.json() as Promise<{ views?: number | null }>)
			.then((d) => {
				if (active && typeof d.views === "number") setViews(d.views);
			})
			.catch(() => {});
		return () => {
			active = false;
		};
	}, [post.viewSlug]);

	const formatDate = (dateStr: string): string => {
		const date = new Date(dateStr);
		return date.toLocaleDateString(locale, {
			year: "numeric",
			month: "short",
			day: "numeric",
			timeZone: "UTC",
		});
	};

	return (
		<Card
			className={cn(
				"relative group cursor-pointer hover:shadow-lg transition-shadow",
				className,
			)}
		>
			<a
				href={post.url}
				className="absolute inset-0 z-10"
				aria-label={`${t.read} ${post.data.title}`}
			/>
			<CardHeader>
				<CardTitle className="text-2xl group-hover:text-primary transition-colors">
					{post.data.title}
				</CardTitle>

				{post.data.description && (
					<CardDescription>{post.data.description}</CardDescription>
				)}

				<div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mt-2">
					<div className="flex items-center gap-1">
						<CalendarIcon className="w-4 h-4" />
						<time dateTime={post.timestamps.createdAt}>
							{formatDate(post.timestamps.createdAt)}
						</time>
					</div>

					<div className="flex items-center gap-1">
						<Clock className="w-4 h-4" />
						<span>
							{post.readingTime} {t.minRead}
						</span>
					</div>

					{views !== null && (
						<div className="flex items-center gap-1">
							<Eye className="w-4 h-4" />
							<span className="tabular-nums">
								{new Intl.NumberFormat(locale).format(views)}
							</span>
						</div>
					)}

					{post.data.categories && post.data.categories.length > 0 && (
						<div className="flex items-center gap-2">
							<RiFolderOpenLine className="w-4 h-4" />
							<div className="flex flex-wrap gap-1">
								{post.data.categories.map((category) => (
									<Badge
										key={category}
										variant="secondary"
										className="relative z-20 text-xs hover:bg-secondary/80 transition-colors"
									>
										<a
											href={localePath(
												locale,
												`category/${category.toLowerCase()}`,
											)}
											className="hover:text-primary"
											onClick={(e) => e.stopPropagation()}
										>
											{category}
										</a>
									</Badge>
								))}
							</div>
						</div>
					)}

					{post.data.tags && post.data.tags.length > 0 && (
						<div className="flex items-center gap-2 ml-4">
							<Tags className="w-4 h-4" />
							<div className="flex flex-wrap gap-1">
								{post.data.tags.map((tag) => (
									<Badge
										key={tag}
										variant="outline"
										className="text-xs hover:bg-secondary/80 transition-colors"
									>
										<a
											href={localePath(locale, `tag/${tag.toLowerCase()}`)}
											className="hover:text-primary"
											onClick={(e) => e.stopPropagation()}
										>
											{tag}
										</a>
									</Badge>
								))}
							</div>
						</div>
					)}
				</div>
			</CardHeader>
		</Card>
	);
}
