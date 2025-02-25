import type { EnhancedBlogPost } from "@/lib/blog-helpers";
import { Clock } from "lucide-react";
import { motion, useAnimationControls } from "framer-motion";
import { useState, useEffect, useRef } from "react";

interface RecentlyUpdatedProps {
  posts: EnhancedBlogPost[];
  currentSlug?: string;
  maxPosts?: number; // Allow customizing the number of posts
}

export function RecentlyUpdated({
  posts,
  currentSlug,
  maxPosts = 5, // Default to 5 posts
}: RecentlyUpdatedProps) {
  // Filter out current post if we're on a blog post page
  const filteredPosts = currentSlug
    ? posts.filter((post) => post.slug !== currentSlug)
    : posts;

  // Take only the specified number of most recently updated posts
  const recentPosts = filteredPosts.slice(0, maxPosts);

  // Calculate a consistent height based on the maximum number of posts
  // Each post is approximately 32px tall (24px for content + 8px for margin)
  const minHeight = maxPosts * 32;

  return (
    <div className="bg-background">
      <div className="flex flex-row items-center justify-between pb-2">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <Clock className="w-4 h-4" />
          Recently Updated
        </h3>
      </div>

      <div className="pt-2" style={{ minHeight: `${minHeight}px` }}>
        {recentPosts.length > 0 ? (
          <div className="space-y-3">
            {recentPosts.map((post, index) => (
              <TimelineItem
                key={post.slug}
                post={post}
                isLast={index === recentPosts.length - 1}
              />
            ))}
          </div>
        ) : (
          <div className="text-sm text-muted-foreground">No recent updates</div>
        )}
      </div>
    </div>
  );
}

function TimelineItem({
  post,
  isLast,
}: {
  post: EnhancedBlogPost;
  isLast: boolean;
}) {
  const [isHovering, setIsHovering] = useState(false);
  const [isTruncated, setIsTruncated] = useState(false);
  const titleRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimationControls();

  // Check if title is truncated by comparing element width to container width
  useEffect(() => {
    const checkTruncation = () => {
      if (titleRef.current && containerRef.current) {
        const titleWidth = titleRef.current.scrollWidth;
        const containerWidth = containerRef.current.clientWidth;
        setIsTruncated(titleWidth > containerWidth);
      }
    };

    // Check on mount
    checkTruncation();

    // Also check on window resize
    window.addEventListener("resize", checkTruncation);
    return () => window.removeEventListener("resize", checkTruncation);
  }, []);

  // Control the animation based on hover state and truncation
  useEffect(() => {
    if (isHovering && isTruncated && titleRef.current && containerRef.current) {
      const titleWidth = titleRef.current.scrollWidth;
      const containerWidth = containerRef.current.clientWidth;
      const distance = titleWidth - containerWidth + 10; // Add a small buffer

      // Only animate if there's actually content overflowing
      if (distance > 0) {
        controls.start({
          x: [-5, -distance],
          transition: {
            duration: Math.min(5, distance * 0.01), // Scale duration with distance
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
          },
        });
      }
    } else {
      // Reset to starting position when not hovering
      controls.start({
        x: 0,
        transition: { duration: 0.3 },
      });
    }
  }, [isHovering, isTruncated, controls]);

  return (
    <div
      className="relative pl-5 group"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Timeline connector */}
      {!isLast && (
        <div className="absolute left-[0.4375rem] top-3 h-full w-px bg-border" />
      )}

      {/* Timeline dot with enhanced animation */}
      <motion.div
        className="absolute left-0 top-1.5 h-2.5 w-2.5 rounded-full bg-primary"
        animate={{
          scale: isHovering ? 1.5 : 1,
          boxShadow: isHovering
            ? "0 0 4px 2px rgba(var(--primary-rgb), 0.3)"
            : "none",
        }}
        transition={{ duration: 0.3 }}
      />

      <div className="flex flex-col">
        <div ref={containerRef} className="relative overflow-hidden">
          <a
            href={`/blog/${post.slug}`}
            className="font-medium inline-block w-full"
            title={post.data.title}
          >
            <motion.span
              ref={titleRef}
              className="inline-block whitespace-nowrap"
              animate={controls}
            >
              {post.data.title}
            </motion.span>
          </a>
        </div>
      </div>
    </div>
  );
}
