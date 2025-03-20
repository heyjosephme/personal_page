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

export function TechStackOrbit() {
  return (
    <div className="relative w-[300px] h-[300px] mx-auto">
      {technologies.map((tech, index) => {
        const angle = (index * 360) / technologies.length;
        return (
          <motion.div
            key={tech.name}
            className="absolute"
            style={{
              width: 50,
              height: 50,
              borderRadius: "50%",
              top: "50%",
              left: "50%",
              marginLeft: -25,
              marginTop: -25,
            }}
            initial={{ rotate: angle }}
            animate={{
              rotate: angle + 360,
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <motion.div
              className="w-12 h-12 flex items-center justify-center bg-background rounded-full shadow-lg hover:scale-110 transition-transform"
              whileHover={{ scale: 1.2 }}
              style={{
                position: "absolute",
                top: -60, // Orbit radius
                left: "50%",
                marginLeft: -24,
              }}
            >
              <tech.Icon
                className="w-6 h-6"
                style={{ color: tech.color }}
                title={tech.name}
              />
            </motion.div>
          </motion.div>
        );
      })}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center"
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <span className="text-2xl">⚡️</span>
        </motion.div>
      </div>
    </div>
  );
}
