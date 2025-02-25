import { Button } from "./ui/button";
import { RiGithubLine, RiTwitterXLine, RiMailLine } from "@remixicon/react";

const Footer = () => {
  const currentYear = 2025; //new Date().getFullYear();
  // change every year manually
  // so enable static and prevent SSR
  // Social icon links
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/heyjosephju",
      icon: <RiGithubLine className="w-5 h-5" />,
      external: true,
    },
    {
      name: "Twitter",
      url: "https://x.com/heyjosephju",
      icon: <RiTwitterXLine className="w-5 h-5" />,
      external: true,
    },
    {
      name: "Email",
      url: "mailto:contact@heyjoseph.me",
      icon: <RiMailLine className="w-5 h-5" />,
      external: false,
    },
  ];

  return (
    <footer className="border-t bg-background mt-auto">
      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {currentYear} Joseph Ju. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            {/* Text Links */}
            {/* <nav className="flex gap-2">
              {textLinks.map((link) => (
                <Button
                  key={link.name}
                  variant="ghost"
                  size="sm"
                  className="text-sm text-muted-foreground hover:text-foreground"
                  asChild
                >
                  <a
                    href={link.url}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                  >
                    {link.name}
                  </a>
                </Button>
              ))}
            </nav> */}

            {/* Divider */}
            <div className="h-4 w-px bg-border" />

            {/* Social Icons */}
            <nav className="flex gap-1">
              {socialLinks.map((link) => (
                <Button
                  key={link.name}
                  variant="ghost"
                  size="icon"
                  className="text-muted-foreground hover:text-foreground"
                  asChild
                  title={link.name}
                >
                  <a
                    href={link.url}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    aria-label={link.name}
                  >
                    {link.icon}
                  </a>
                </Button>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
