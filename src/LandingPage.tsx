import Contact from "@/components/Contact";
import { Projects } from "@/components/Projects";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Featured Projects */}
      {/* <section className="px-4 py-16 mx-auto max-w-7xl">
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
      </section> */}

      {/* Contact Section */}
      <Projects limit={3} className="py-12 max-w-7xl mx-auto px-4" />
      <Contact />
    </div>
  );
};

export default LandingPage;
