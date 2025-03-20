import { motion } from "framer-motion";
import {
  SiRuby,
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiRubyonrails,
  SiAstro,
} from "react-icons/si";

const technologies = [
  { Icon: SiRuby, name: "Ruby", color: "#CC342D" },
  { Icon: SiRubyonrails, name: "Rails", color: "#CC0000" },
  { Icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
  { Icon: SiReact, name: "React", color: "#61DAFB" },
  { Icon: SiTailwindcss, name: "Tailwind", color: "#06B6D4" },
  { Icon: SiAstro, name: "Astro", color: "#FF5D01" },
];

export function TechStackUniverse() {
  return (
    <div className="relative w-full h-[400px]">
      {technologies.map((tech, index) => (
        <motion.div
          key={tech.name}
          className="absolute"
          initial={{
            x: Math.random() * 200 - 100,
            y: Math.random() * 200 - 100,
            opacity: 0,
          }}
          animate={{
            x: [
              Math.random() * 200 - 100,
              Math.random() * 200 - 100,
              Math.random() * 200 - 100,
            ],
            y: [
              Math.random() * 200 - 100,
              Math.random() * 200 - 100,
              Math.random() * 200 - 100,
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
            className="w-12 h-12 flex items-center justify-center bg-background/50 backdrop-blur-sm rounded-full shadow-lg"
            whileHover={{ scale: 1.2 }}
          >
            <tech.Icon
              className="w-6 h-6"
              style={{ color: tech.color }}
              title={tech.name}
            />
          </motion.div>
        </motion.div>
      ))}
      {/* Add some stars in the background */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`star-${i}`}
          className="absolute w-1 h-1 bg-primary/20 rounded-full"
          initial={{
            x: Math.random() * 300,
            y: Math.random() * 300,
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
