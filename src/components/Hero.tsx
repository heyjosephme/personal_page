import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { MapPin } from "lucide-react";

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Main Heading */}
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-normal text-primary md:text-6xl md:tracking-tight">
        I'm Joseph
      </h1>

      {/* Subtitle with Location */}
      <div className="flex items-center justify-center gap-2 mb-8">
        <span className="text-xl text-muted-foreground">
          Problem Solver & Lifetime Learner
        </span>
        <span className="text-muted-foreground mx-2">•</span>
        <span className="flex items-center gap-1 text-muted-foreground">
          <MapPin className="w-4 h-4" />
          Tokyo
        </span>
      </div>

      {/* Mission Statement */}
      <p className="px-0 mb-8 text-lg text-muted-foreground md:text-xl lg:px-24">
        Freelance developer crafting solutions with TypeScript ecosystem. Always
        open to new challenges and embracing continuous growth through learning.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col items-center justify-center gap-4 mx-auto md:flex-row">
        <Button size="lg" className="w-full md:w-auto" asChild>
          <a href="/blog">Learning Journal</a>
        </Button>
        <Button
          variant="outline"
          size="lg"
          className="w-full md:w-auto"
          asChild
        >
          <a href="/about">About Me</a>
        </Button>
      </div>
    </motion.div>
  );
};

export default Hero;
