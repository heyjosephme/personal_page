import type { EnhancedBlogPost } from "@/lib/blog-helpers";
import { Badge } from "@/components/ui/badge";
import { Hash } from "lucide-react";

interface TrendingTagsProps {
  posts: EnhancedBlogPost[];
}

export function TrendingTags({ posts }: TrendingTagsProps) {
  // Extract all categories from posts and count occurrences
  const categoryCount: Record<string, number> = {};

  posts.forEach((post) => {
    if (post.data.categories && post.data.categories.length > 0) {
      post.data.categories.forEach((category) => {
        categoryCount[category] = (categoryCount[category] || 0) + 1;
      });
    }
  });

  // Sort categories by count (descending)
  const sortedCategories = Object.entries(categoryCount)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10); // Take top 10

  return (
    <div className="bg-background">
      <div className="flex flex-row items-center justify-between pb-2">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <Hash className="w-4 h-4" />
          Trending Categories
        </h3>
      </div>

      <div className="pt-2">
        {sortedCategories.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {sortedCategories.map(([category, count]) => (
              <Badge
                key={category}
                variant="secondary"
                className="hover:bg-secondary/80 transition-colors"
              >
                <a
                  href={`/category/${category.toLowerCase()}`}
                  className="hover:text-primary"
                >
                  {category} ({count})
                </a>
              </Badge>
            ))}
          </div>
        ) : (
          <div className="text-sm text-muted-foreground">No categories yet</div>
        )}
      </div>
    </div>
  );
}
