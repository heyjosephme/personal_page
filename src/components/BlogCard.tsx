import type { EnhancedBlogPost } from "@/lib/blog-helpers";
import { CalendarIcon, Tags } from "lucide-react";
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
  const formatDate = (dateStr: string): string => {
    const date = new Date(dateStr);
    const day = date.getDate();
    const month = date.toLocaleString("en-US", { month: "short" });
    const year = date.getFullYear();

    return `${month} ${day}, ${year}`;
  };

  return (
    <Card
      className={cn(
        "relative group cursor-pointer hover:shadow-lg transition-shadow",
        className
      )}
    >
      <a
        href={`/blog/${post.slug}`}
        className="absolute inset-0 z-10"
        aria-label={`Read ${post.data.title}`}
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
            <time>{formatDate(post.timestamps.createdAt)}</time>
          </div>

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
                      href={`/category/${category.toLowerCase()}`}
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
                      href={`/tag/${tag.toLowerCase()}`}
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
