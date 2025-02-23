import type { AstroIntegration } from "astro";
import fs from "fs/promises";
import path from "path";

export default function blogTimestamps(): AstroIntegration {
  return {
    name: "blog-timestamps",
    hooks: {
      "astro:build:setup": async () => {
        const blogDir = path.join(process.cwd(), "src/content/blog");
        const files = await fs.readdir(blogDir);

        for (const file of files) {
          if (!file.endsWith(".md")) continue;

          const filePath = path.join(blogDir, file);
          const stat = await fs.stat(filePath);
          const content = await fs.readFile(filePath, "utf-8");

          // Parse frontmatter
          const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
          if (!frontmatterMatch) continue;

          let frontmatter = frontmatterMatch[1];
          const restContent = content.slice(frontmatterMatch[0].length);

          // Update or add createTime and updateTime
          const createTime = stat.birthtime.toISOString();
          const updateTime = stat.mtime.toISOString();

          // Update frontmatter
          if (!frontmatter.includes("createTime:")) {
            frontmatter += `\ncreateTime: ${createTime}`;
          }
          if (!frontmatter.includes("updateTime:")) {
            frontmatter += `\nupdateTime: ${updateTime}`;
          }

          // Write back to file
          const newContent = `---\n${frontmatter}\n---${restContent}`;
          await fs.writeFile(filePath, newContent);
        }
      },
    },
  };
}
