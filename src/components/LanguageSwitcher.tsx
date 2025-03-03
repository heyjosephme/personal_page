import React from "react";
import { Languages } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const languages = [
  { code: "en", name: "English" },
  { code: "ja", name: "日本語" },
  { code: "zh", name: "中文" },
];

const LanguageSwitcher = ({ currentPath = "" }) => {
  // Get current language from URL or default to 'en'
  const [currentLang, setCurrentLang] = React.useState("en");

  const handleLanguageChange = (langCode) => {
    setCurrentLang(langCode);
    // Update URL using Astro's routing
    // TODO: Implement language switching
    //const newPath = `/${langCode}${currentPath.substring(3) || ''}`;
    //window.location.pathname = newPath;
  };

  // Set initial language based on URL when component mounts
  React.useEffect(() => {
    const pathLang = window.location.pathname.split("/")[1];
    if (pathLang && languages.some((lang) => lang.code === pathLang)) {
      setCurrentLang(pathLang);
    }
  }, []);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Languages className="h-5 w-5" />
          <span className="sr-only">Switch language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-[150px] bg-background border border-border"
      >
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            className={`
              text-sm cursor-pointer
              ${
                currentLang === lang.code
                  ? "text-primary font-medium"
                  : "text-foreground/80"
              }
              hover:text-foreground hover:bg-accent
            `}
            onClick={() => handleLanguageChange(lang.code)}
          >
            {lang.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
