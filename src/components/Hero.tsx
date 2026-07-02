import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import { features } from "@/config/features";

interface HeroProps {
  showAnimation?: boolean;
}

const Hero = ({ showAnimation = true }: HeroProps) => {
  // CTAs adapt to which sections are enabled (src/config/features.ts)
  const ctas = (
    [
      features.projects && { href: "/projects", label: "View Projects" },
      features.reading && { href: "/reading", label: "What I'm Reading" },
      { href: "/blog", label: "Read the Blog" },
      { href: "/about", label: "About Me" },
    ].filter(Boolean) as { href: string; label: string }[]
  ).slice(0, 2);

  return (
    <div className={showAnimation ? "animate-fade-in-up" : ""}>
      {/* Main Heading */}
      <h1 className="mb-6 text-5xl font-extrabold leading-tight tracking-tight text-foreground md:text-7xl">
        I'm Joseph
      </h1>

      {/* Location */}
      <div className="flex items-center justify-center gap-2 mb-8">
        <MapPin className="w-5 h-5 text-muted-foreground" />
        <span className="text-xl text-muted-foreground">Tokyo, Japan</span>
      </div>

      {/* Story - Main Message */}
      <p className="px-0 mb-4 text-xl md:text-2xl lg:px-24 text-foreground/90 leading-relaxed">
        I build applications
        <br />
        that solve real problems.
      </p>

      {/* Tech Stack */}
      <p className="px-0 mb-10 text-lg text-muted-foreground lg:px-24">
        Full-stack developer based in Tokyo
        <br />
        Rails 8 + Hotwire · TypeScript · React
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col items-center justify-center gap-4 mx-auto md:flex-row">
        {ctas[0] && (
          <Button size="lg" className="w-full md:w-auto" asChild>
            <a href={ctas[0].href}>{ctas[0].label}</a>
          </Button>
        )}
        {ctas[1] && (
          <Button
            variant="outline"
            size="lg"
            className="w-full md:w-auto"
            asChild
          >
            <a href={ctas[1].href}>{ctas[1].label}</a>
          </Button>
        )}
      </div>
    </div>
  );
};

export default Hero;
