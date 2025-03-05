import { Home, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumb({ items, className }: BreadcrumbProps) {
  return (
    <nav
      aria-label="breadcrumb"
      className={cn("flex items-center space-x-2 text-sm", className)}
    >
      <a
        href="/"
        className="text-muted-foreground hover:text-primary transition-colors"
      >
        <Home className="w-4 h-4" />
      </a>
      <ChevronRight className="w-4 h-4 text-muted-foreground" />
      {items.map((item, index) => (
        <span key={item.label} className="flex items-center space-x-2">
          {item.href ? (
            <a
              href={item.href}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ) : (
            <span className="text-primary font-medium">{item.label}</span>
          )}
          {index < items.length - 1 && (
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
          )}
        </span>
      ))}
    </nav>
  );
}
