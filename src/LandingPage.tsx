import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card.tsx";
import { Github, Twitter, Mail } from "lucide-react";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="px-4 py-24 mx-auto max-w-7xl">
        <div className="w-full mx-auto text-center md:w-11/12 xl:w-9/12">
          <h1 className="mb-8 text-4xl font-extrabold leading-none tracking-normal text-primary md:text-6xl md:tracking-tight">
            Building the future with modern web technologies
          </h1>
          <p className="px-0 mb-8 text-lg text-muted-foreground md:text-xl lg:px-24">
            Full-stack developer specializing in React, Node.js, and modern web
            development. Building elegant solutions to complex problems.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 mx-auto md:flex-row">
            <Button size="lg">View Projects</Button>
            <Button variant="outline" size="lg">
              Read Blog
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="px-4 py-16 mx-auto max-w-7xl">
        <h2 className="mb-12 text-3xl font-bold text-center">
          Featured Projects
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <Card key={i}>
              <CardHeader>
                <CardTitle>Project {i}</CardTitle>
                <CardDescription>
                  A brief description of this amazing project
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Built with React, TypeScript, and shadcn/ui. Features modern
                  design patterns and best practices.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-4 py-16 mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="mb-8 text-3xl font-bold">Let's Connect</h2>
          <div className="flex justify-center gap-4">
            <Button variant="outline" size="icon">
              <Github className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Twitter className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Mail className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
