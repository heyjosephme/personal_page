import type { EnhancedBlogPost } from "@/lib/blog-helpers";
import { Badge } from "@/components/ui/badge";
import { Tags } from "lucide-react";
import { motion } from "framer-motion";

interface TrendingTagsProps {
  posts: EnhancedBlogPost[];
}

export function TrendingTags({ posts }: TrendingTagsProps) {
  // Extract all tags from posts and count occurrences
  const tagCount: Record<string, number> = {};

  posts.forEach((post) => {
    if (post.data.tags && post.data.tags.length > 0) {
      post.data.tags.forEach((tag) => {
        tagCount[tag] = (tagCount[tag] || 0) + 1;
      });
    }
  });

  // Sort tags by count (descending)
  const sortedTags = Object.entries(tagCount)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10); // Take top 10

  return (
    <div className="bg-background">
      <div className="flex flex-row items-center justify-between pb-2">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <Tags className="w-4 h-4" />
          Trending Tags
        </h3>
      </div>

      <div className="pt-2">
        {sortedTags.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {sortedTags.map(([tag, count]) => (
              <motion.div
                key={tag}
                whileHover={{
                  scale: 1.05,
                  y: -2,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Badge
                  variant="secondary"
                  className="relative overflow-hidden group transition-colors duration-300
                            hover:bg-primary/10 dark:hover:bg-primary/20"
                >
                  <a
                    href={`/tag/${tag.toLowerCase()}/`}
                    className="relative z-10 transition-colors duration-300
                              group-hover:text-primary font-medium"
                  >
                    {tag}{" "}
                    <span
                      className="text-muted-foreground transition-colors duration-300
                                          group-hover:text-primary/70"
                    >
                      ({count})
                    </span>
                  </a>
                </Badge>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-sm text-muted-foreground">No tags yet</div>
        )}
      </div>
    </div>
  );
}
