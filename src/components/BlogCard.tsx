import type { EnhancedBlogPost } from "@/lib/blog-helpers";
import { CalendarIcon, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
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

  const isUpdated = post.timestamps.updatedAt !== post.timestamps.createdAt;

  return (
    <Card
      className={cn("relative hover:shadow-lg transition-shadow", className)}
    >
      <CardHeader>
        <CardTitle className="text-2xl">
          <a
            href={`/blog/${post.slug}`}
            className="hover:text-primary transition-colors"
          >
            {post.data.title}
          </a>
        </CardTitle>

        {post.data.description && (
          <CardDescription>{post.data.description}</CardDescription>
        )}
      </CardHeader>

      <CardContent>
        <div className="flex flex-wrap gap-2 items-center text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <CalendarIcon className="w-4 h-4" />
            <time>{formatDate(post.timestamps.createdAt)}</time>
          </div>

          {/* {isUpdated && (
            <>
              <span>•</span>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <time>Updated {formatDate(post.timestamps.updatedAt)}</time>
              </div>
            </>
          )} */}
        </div>
      </CardContent>

      <CardFooter>
        <div className="flex gap-2">
          {post.data.category && (
            <Badge variant="secondary">
              <a
                href={`/category/${post.data.category.toLowerCase()}`}
                className="hover:text-primary"
              >
                {post.data.category}
              </a>
            </Badge>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}
