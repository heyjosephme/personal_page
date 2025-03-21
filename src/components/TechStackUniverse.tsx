import { motion } from "framer-motion";
import {
  SiRuby,
  SiTypescript,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiRubyonrails,
  SiAstro,
  SiExpress,
  SiExpo,
  SiNextdotjs,
  SiPostgresql,
  SiMongodb,
  SiDebian,
  SiJavascript,
  SiDocker,
  SiAmazonwebservices,
  SiGooglecloud,
  SiCloudflare,
} from "react-icons/si";

const technologies = [
  { Icon: SiRuby, name: "Ruby", color: "#CC342D" },
  { Icon: SiRubyonrails, name: "Rails", color: "#CC0000" },
  { Icon: SiNodedotjs, name: "Node.js", color: "#339933" },
  { Icon: SiExpress, name: "Express", color: "#000000" },
  { Icon: SiPostgresql, name: "PostgreSQL", color: "#336791" },
  { Icon: SiReact, name: "React", color: "#61DAFB" },
  { Icon: SiAstro, name: "Astro", color: "#FF5D01" },
  { Icon: SiNextdotjs, name: "Next.js", color: "#000000" },
  { Icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
  { Icon: SiJavascript, name: "JavaScript", color: "#F0DB4F" },
  { Icon: SiTailwindcss, name: "Tailwind", color: "#06B6D4" },
  { Icon: SiExpo, name: "Expo", color: "#000000" },
  { Icon: SiDocker, name: "Docker", color: "#2496ED" },
  { Icon: SiDebian, name: "Debian", color: "#A41633" },
  { Icon: SiAmazonwebservices, name: "AWS", color: "#232F3E" },
  { Icon: SiGooglecloud, name: "Google Cloud", color: "#1A73E8" },
  { Icon: SiMongodb, name: "MongoDB", color: "#4DB33D" },
  { Icon: SiCloudflare, name: "Cloudflare", color: "#F38020" },
];

export function TechStackUniverse() {
  return (
    <div className="relative w-full h-[400px]">
      {technologies.map((tech, index) => (
        <motion.div
          key={tech.name}
          className="absolute"
          initial={{
            x: Math.random() * 300 - 150,
            y: Math.random() * 500 - 250,
            opacity: 0,
          }}
          animate={{
            x: [
              Math.random() * 300 - 150,
              Math.random() * 300 - 150,
              Math.random() * 300 - 150,
            ],
            y: [
              Math.random() * 500 - 250,
              Math.random() * 500 - 250,
              Math.random() * 500 - 250,
            ],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        >
          <motion.div
            className="w-16 h-16 flex items-center justify-center bg-background/50 backdrop-blur-sm rounded-full shadow-lg"
            whileHover={{ scale: 1.3, rotate: 10 }}
          >
            <tech.Icon
              className="w-8 h-8"
              style={{ color: tech.color }}
              title={tech.name}
            />
          </motion.div>
        </motion.div>
      ))}
      {/* Add more stars in the background */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={`star-${i}`}
          className="absolute w-2 h-2 bg-primary/20 rounded-full"
          initial={{
            x: Math.random() * 500,
            y: Math.random() * 600,
            scale: 0,
          }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
}
