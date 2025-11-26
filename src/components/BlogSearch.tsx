import { useState, useMemo } from "react";
import { BlogCard } from "./BlogCard";
import { Input } from "./ui/input";
import { RiSearchLine } from "@remixicon/react";
import type { EnhancedBlogPost } from "@/lib/blog-helpers";

interface BlogSearchProps {
  posts: EnhancedBlogPost[];
}

export function BlogSearch({ posts }: BlogSearchProps) {
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
            placeholder="Search posts by title, description, category, or tag..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 h-12 text-base"
          />
        </div>

        {/* Search Results Count */}
        {searchQuery.trim() && (
          <p className="text-sm text-muted-foreground text-center mt-3">
            Found {filteredPosts.length}{" "}
            {filteredPosts.length === 1 ? "post" : "posts"}
            {filteredPosts.length === 0 && (
              <span className="ml-1">
                - try different keywords or{" "}
                <button
                  onClick={() => setSearchQuery("")}
                  className="text-primary hover:underline"
                >
                  clear search
                </button>
              </span>
            )}
          </p>
        )}
      </div>

      {/* Posts Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredPosts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>

      {/* Empty State */}
      {filteredPosts.length === 0 && !searchQuery.trim() && (
        <div className="text-center py-12">
          <p className="text-lg text-muted-foreground">No posts found.</p>
        </div>
      )}
    </div>
  );
}
