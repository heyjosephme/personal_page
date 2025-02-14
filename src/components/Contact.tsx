import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Github, Twitter, Mail } from "lucide-react";

const username = "heyjosephme";
const email = "contact@heyjoseph.me";

const Contact = () => {
  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github className="w-4 h-4" />,
      url: `https://github.com/${username}`,
    },
    {
      name: "Twitter",
      icon: <Twitter className="w-4 h-4" />,
      url: `https://x.com/${username}`,
    },
    {
      name: "Email",
      icon: <Mail className="w-4 h-4" />,
      url: `mailto:${email}`,
    },
  ];

  return (
    <section className="px-4 py-16 mx-auto max-w-7xl">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="mb-8 text-3xl font-bold">Let's Connect</h2>
        <div className="flex justify-center gap-4">
          {socialLinks.map((link) => (
            <Button key={link.name} variant="outline" size="icon" asChild>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Connect on ${link.name}`}
                title={link.name}
              >
                {link.icon}
              </a>
            </Button>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
