import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, Github, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

// Define the Project type
export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  featured?: boolean;
}

// Sample projects data (you'll want to move this to a separate file later)
const projects: Project[] = [
  {
    id: "bookkeeper",
    title: "Bookkeeper",
    description:
      "A bookkeeping app for freelancers to manage their finances with ease.",
    tags: ["TypeScript", "React", "nextjs", "shadcn/ui", "Tailwind CSS"],
    githubUrl: "https://github.com/heyjosephme/freelancer",
    /* liveUrl: "https://yourblog.com", */
    featured: true,
  },
  {
    id: "jobListing",
    title: "Job Listing",
    description:
      "A job listing app for freelancers to find jobs and apply to them.",
    tags: ["Ruby on Rails", "Hotwire", "Tailwind CSS"],
    /* githubUrl: "https://github.com/yourusername/task-manager",
    liveUrl: "https://yourtaskapp.com", */
    featured: true,
  },
  {
    id: "BitCare",
    title: "BitCare",
    description: "A mobile app to manage your health and fitness with ease.",
    tags: ["React Native", "TypeScript"],
    /* githubUrl: "https://github.com/yourusername/weather-app", */
    featured: true,
  },
];

interface ProjectsProps {
  limit?: number;
  className?: string;
}

export function Projects({ limit = 3, className }: ProjectsProps) {
  // Get featured projects first, then others, up to the limit
  const displayProjects = [...projects]
    .sort((a, b) => (a.featured === b.featured ? 0 : a.featured ? -1 : 1))
    .slice(0, limit);

  return (
    <section className={cn("py-8", className)}>
      <div className="container">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold">Featured Projects</h2>
          <Button variant="ghost" asChild>
            <a href="/projects" className="flex items-center gap-2">
              View all projects <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="flex flex-col h-full hover:shadow-md transition-shadow">
      <CardHeader>
        <CardTitle className="text-xl">{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" size="sm" asChild>
          <a href={`/projects/${project.id}`}>Details</a>
        </Button>
        <div className="flex gap-2">
          {project.githubUrl && (
            <Button variant="ghost" size="icon" asChild>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub repository"
              >
                <Github className="h-4 w-4" />
              </a>
            </Button>
          )}
          {project.liveUrl && (
            <Button variant="ghost" size="icon" asChild>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Live site"
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}
