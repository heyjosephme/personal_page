import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    //{ name: "Projects", path: "/projects" },
    //{ name: "About", path: "/" },
    // TODO: Add projects and about
    { name: "Projects", path: "/" },
    { name: "About", path: "/about" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center">
          {/* Logo/Name */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-none text-xl font-bold"
          >
            <a href="/" className="hover:text-primary transition-colors">
              Joseph Ju
            </a>
          </motion.div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex flex-1 items-center justify-center">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.path}
                  className="relative text-sm font-medium transition-colors hover:text-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                >
                  <span className="relative">
                    {item.name}
                    <span className="absolute inset-x-0 -bottom-0.5 h-0.5 origin-left scale-x-0 transform bg-primary transition-transform duration-300 ease-out group-hover:scale-x-100" />
                  </span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right side spacer - for future theme/language switcher */}
          <div className="flex-none md:w-[68px]">
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
                className="hover:bg-transparent"
              >
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden"
          >
            <div className="space-y-1 pb-3 pt-2">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.path}
                  className="block rounded-md px-3 py-2 text-base font-medium hover:bg-accent hover:text-accent-foreground"
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
