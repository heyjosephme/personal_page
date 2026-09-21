import { localizedNavPath } from "@/i18n/navigation";
import { ui } from "@/i18n/ui";
import { localePath, type Locale } from "@/i18n/config";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { ButtonThemeSwitcher } from "@/components/ThemeSwitcher";
import { features, type Feature } from "@/config/features";

const Navbar = ({
	locale = "en",
	languages = [],
}: {
	locale?: Locale;
	languages?: { locale: string; href: string; label: string }[];
}) => {
	const t = ui[locale];
	const [isOpen, setIsOpen] = useState(false);

	const navItems = (
		[
			{ name: t.home, path: "/" },
			{ name: t.blog, path: "/blog" },
			{ name: t.projects, path: "/projects", feature: "projects" },
			{ name: t.reading, path: "/reading", feature: "reading" },
			{ name: t.now, path: "/now" },
			{ name: t.uses, path: "/uses" },
			{ name: t.about, path: "/about" },
		] as { name: string; path: string; feature?: Feature }[]
	).filter((item) => item.feature === undefined || features[item.feature]);

	return (
		<nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="mx-auto max-w-7xl px-4">
				<div className="flex min-h-16 items-center justify-between gap-3">
					{/* Logo/Name */}
					<div className="flex-none text-xl font-bold animate-fade-in-up">
						<a
							href={localePath(locale)}
							className="hover:text-primary transition-colors duration-300"
						>
							Joseph
						</a>
					</div>

					{/* Desktop Navigation - Centered */}
					<div className="hidden md:flex flex-1 items-center justify-center">
						<div className="flex items-center gap-4">
							{navItems.map((item) => (
								<a
									key={item.name}
									href={localizedNavPath(locale, item.path)}
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
							<ButtonThemeSwitcher locale={locale} />
						</div>
						<details className="relative">
							<summary className="cursor-pointer text-sm px-2 py-2">
								{t.language}
							</summary>
							<ul className="absolute right-0 mt-2 min-w-40 rounded-md border bg-background p-2 shadow-md">
								{languages.map((language) => (
									<li key={language.locale}>
										<a
											href={language.href}
											hrefLang={language.locale}
											aria-current={
												language.locale === locale ? "page" : undefined
											}
											className="block rounded px-3 py-2 text-sm hover:bg-accent"
										>
											{language.label}
										</a>
									</li>
								))}
							</ul>
						</details>
						{/* Mobile Menu Button */}
						<div className="md:hidden">
							<Button
								variant="ghost"
								size="icon"
								aria-label={t.menu}
								aria-expanded={isOpen}
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
									href={localizedNavPath(locale, item.path)}
									className="block rounded-md px-3 py-2 text-base font-medium hover:bg-accent hover:text-accent-foreground transition-all duration-150 active:scale-95"
								>
									{item.name}
								</a>
							))}
							<div className="px-3 py-2 border-t mt-2 pt-2">
								<div className="flex items-center justify-between">
									<span className="text-sm font-medium">{t.theme}</span>
									<ButtonThemeSwitcher locale={locale} />
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
