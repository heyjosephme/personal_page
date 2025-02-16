import { Button } from "./ui/button";

const Footer = () => {
  const currentYear = 2025; //new Date().getFullYear();
  // change every year manually
  // so enable static and prevent SSR
  const footerLinks = [
    { name: "Blog", url: "https://blog.heyjoseph.me", external: true },
    { name: "GitHub", url: "https://github.com/heyjosephju", external: true },
    { name: "Twitter", url: "https://x.com/heyjosephju", external: true },
  ];

  return (
    <footer className="border-t bg-background mt-auto">
      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {currentYear} Joseph Ju. All rights reserved.
          </p>

          {/* Links */}
          <nav className="flex gap-4">
            {footerLinks.map((link) => (
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
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
