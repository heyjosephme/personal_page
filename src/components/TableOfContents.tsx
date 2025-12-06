import { useEffect, useRef } from 'react';
import tocbot from 'tocbot';

interface TableOfContentsProps {
  contentSelector?: string;
}

export function TableOfContents({ contentSelector = '.prose' }: TableOfContentsProps) {
  const tocRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize tocbot
    tocbot.init({
      // Where to render the table of contents
      tocSelector: '.toc',
      // Where to grab the headings from
      contentSelector: contentSelector,
      // Which headings to grab (h2 and h3)
      headingSelector: 'h2, h3',
      // Headings offset for scrollspy
      headingsOffset: 100,
      scrollSmoothOffset: -100,
      // Smooth scroll on click
      scrollSmooth: true,
      // Highlight active heading
      hasInnerContainers: true,
      // Additional options
      collapseDepth: 6,
      // Link class
      linkClass: 'toc-link',
      // Active link class
      activeLinkClass: 'is-active-link',
      // List class
      listClass: 'toc-list',
      // Extra list class for nested items
      extraListClasses: '',
      // Active list item class
      activeListItemClass: 'is-active-li',
      // List item class
      listItemClass: 'toc-list-item',
      // Disable click if you don't want links
      onClick: false,
    });

    // Cleanup on unmount
    return () => tocbot.destroy();
  }, [contentSelector]);

  return (
    <div className="toc-wrapper">
      <div className="mb-4">
        <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
          On This Page
        </h3>
      </div>
      <nav className="toc" ref={tocRef}></nav>
    </div>
  );
}
