import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { ButtonThemeSwitcher } from "@/components/ThemeSwitcher";

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
          <div className="flex-none text-xl font-bold animate-fade-in-up">
            <a
              href="/"
              className="hover:text-primary transition-colors duration-300"
            >
              Joseph
            </a>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex flex-1 items-center justify-center">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.path}
                  className="relative text-sm font-medium transition-all duration-300 hover:text-primary hover:scale-105 active:scale-95 group"
                >
                  <span className="relative">
                    {item.name}
                    <span className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-primary scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100" />
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Right side actions */}
          <div className="flex-none flex items-center gap-2">
            <div className="hidden md:flex items-center space-x-2">
              <ButtonThemeSwitcher />
            </div>
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
          <div className="md:hidden animate-slide-in-down">
            <div className="space-y-1 pb-3 pt-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.path}
                  className="block rounded-md px-3 py-2 text-base font-medium hover:bg-accent hover:text-accent-foreground transition-all duration-150 active:scale-95"
                >
                  {item.name}
                </a>
              ))}
              <div className="px-3 py-2 border-t mt-2 pt-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Theme</span>
                  <ButtonThemeSwitcher />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
