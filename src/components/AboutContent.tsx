import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { DistanceGlobeWrapper } from "./DistanceGlobeWrapper";

const AboutContent = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const sections = [
    {
      title: "Background",
      badge: "Journey",
      text: "Originally from China, now based in Tokyo, Japan. While studying Computer Science in college, I spent most of my time self-learning programming rather than following traditional coursework. Later, I left college but continued my self-taught journey, driven by genuine curiosity.",
    },
    {
      title: "Technical Focus",
      badge: "Skills",
      text: "Full-stack developer specializing in Ruby and TypeScript ecosystem. Experienced in Ruby on Rails with Hotwire, and leveraging React.js with TypeScript for versatile full-stack development solutions.",
    },
    {
      title: "Current Chapter",
      badge: "Now",
      text: "Currently working on indie projects while running the Tokyo Indie Hackers community. Building in public and sharing the journey with fellow creators.",
    },
    {
      title: "Beyond Code",
      badge: "Life",
      text: "When I'm not coding, you'll find me enjoying manga, anime, and novels, or exploring historical narratives. I value meaningful conversations with others, whether about technology, history, or life in general.",
    },
  ];

  return (
    <motion.section
      className="px-4 py-24 mx-auto max-w-7xl"
      initial="initial"
      animate="animate"
      variants={staggerChildren}
    >
      {/* Intro Header */}
      <motion.div className="text-center mb-16" variants={fadeInUp}>
        <h1 className="text-4xl font-bold tracking-tight mb-4">About Me</h1>
        <p className="text-muted-foreground">
          Developer, Indie Hacker, Story Enthusiast
        </p>
      </motion.div>

      {/* Two Column Layout: Globe Sidebar + Content */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
        {/* Left Sidebar - Globe (Sticky on desktop) */}
        <motion.aside
          className="w-full lg:w-96 lg:flex-shrink-0 lg:sticky lg:top-24"
          variants={fadeInUp}
        >
          <DistanceGlobeWrapper />
        </motion.aside>

        {/* Right Content - About Sections */}
        <div className="w-full lg:flex-1 lg:min-w-0 space-y-8">
          {sections.map((section, index) => (
            <motion.div key={section.title} variants={fadeInUp}>
              <Card className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <h2 className="text-2xl font-semibold">{section.title}</h2>
                    <Badge variant="secondary">{section.badge}</Badge>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {section.text}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default AboutContent;
