import { Button } from "@/components/ui/button";
import {
  RiGithubLine,
  RiTwitterLine,
  RiMailLine,
  RiDiscordLine,
} from "@remixicon/react";
import { Linkedin } from "lucide-react";

const username = "heyjosephme";
const email = "contact@heyjoseph.me";

const Contact = () => {
  const socialLinks = [
    {
      name: "GitHub",
      icon: <RiGithubLine className="w-4 h-4" />,
      url: `https://github.com/${username}`,
    },
    {
      name: "Twitter",
      icon: <RiTwitterLine className="w-4 h-4" />,
      url: `https://x.com/${username}`,
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-4 h-4" />,
      url: `https://www.linkedin.com/in/tokyojoseph/`,
    },
    {
      name: "Discord",
      icon: <RiDiscordLine className="w-4 h-4" />,
      url: `https://discord.com/users/${username}`,
    },
    {
      name: "Email",
      icon: <RiMailLine className="w-4 h-4" />,
      url: `mailto:${email}`,
    },
  ];

  return (
    <section className="px-4 py-4 mx-auto max-w-7xl">
      <div className="text-center animate-fade-in-up">
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
      </div>
    </section>
  );
};

export default Contact;
