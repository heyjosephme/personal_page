import { localizedNavPath } from "@/i18n/navigation";
import { ui } from "@/i18n/ui";
import { localePath, type Locale } from "@/i18n/config";
import { Button } from "./ui/button";
import {
	RiGithubLine,
	RiLinkedinBoxLine,
	RiTwitterXLine,
	RiMailLine,
	RiRssLine,
} from "@remixicon/react";
import { features, type Feature } from "@/config/features";

interface FooterProps {
	locale?: Locale;
	commitHash?: string;
	buildDate?: string;
}

// Site launch year - update this only if you rebrand/restart the site
const START_YEAR = 2025;

const Footer = ({ commitHash, buildDate, locale = "en" }: FooterProps) => {
	const t = ui[locale];
	// Get current year at build time (SSG) - auto-updates on each build
	const currentYear = new Date().getFullYear();

	// Format copyright year: "2025" if same year, "2025-2026" if different
	const copyrightYear =
		START_YEAR === currentYear
			? `${START_YEAR}`
			: `${START_YEAR}-${currentYear}`;

	// Navigation links
	const navLinks = (
		[
			{ name: t.blog, url: "/blog" },
			{ name: t.projects, url: "/projects", feature: "projects" },
			{ name: t.reading, url: "/reading", feature: "reading" },
			{ name: t.now, url: "/now" },
			{ name: t.uses, url: "/uses" },
			{ name: t.changelog, url: "/changelog" },
		] as { name: string; url: string; feature?: Feature }[]
	).filter((link) => link.feature === undefined || features[link.feature]);

	// Social icon links
	const socialLinks = [
		{
			name: "GitHub",
			url: "https://github.com/heyjosephme",
			icon: <RiGithubLine className="w-5 h-5" />,
			external: true,
		},
		{
			name: "Twitter",
			url: "https://x.com/heyjosephme",
			icon: <RiTwitterXLine className="w-5 h-5" />,
			external: true,
		},
		{
			name: "LinkedIn",
			url: "https://www.linkedin.com/in/tokyojoseph/",
			icon: <RiLinkedinBoxLine className="w-5 h-5" />,
			external: true,
		},
		{
			name: "Email",
			url: "mailto:contact@heyjoseph.me",
			icon: <RiMailLine className="w-5 h-5" />,
			external: false,
		},
	];

	// Tech stack links
	const techLinks = [
		{ name: "Astro", url: "https://astro.build" },
		{ name: "React", url: "https://react.dev" },
		{ name: "Tailwind CSS", url: "https://tailwindcss.com" },
		{ name: "Cloudflare Workers", url: "https://workers.cloudflare.com" },
	];

	// Reusable external link component
	const ExternalLink = ({
		href,
		children,
		className = "",
		...props
	}: {
		href: string;
		children: React.ReactNode;
		className?: string;
		[key: string]: any;
	}) => (
		<a
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			className={`hover:text-foreground transition-colors ${className}`}
			{...props}
		>
			{children}
		</a>
	);

	return (
		<footer className="border-t bg-background mt-auto">
			<div className="mx-auto max-w-7xl px-4 py-8">
				<div className="flex flex-col gap-6">
					{/* Main footer content */}
					<div className="flex flex-col items-center justify-between gap-4 md:flex-row">
						{/* Left: Copyright */}
						<div className="text-center md:text-left">
							<p className="text-sm text-muted-foreground">
								© {copyrightYear} Joseph. {t.rights}
							</p>
						</div>

						{/* Right: Navigation + RSS + Social */}
						<div className="flex items-center gap-4">
							{/* Navigation Links */}
							<nav className="flex gap-2">
								{navLinks.map((link) => (
									<Button
										key={link.name}
										variant="ghost"
										size="sm"
										className="text-sm text-muted-foreground hover:text-foreground"
										asChild
									>
										<a href={localizedNavPath(locale, link.url)}>{link.name}</a>
									</Button>
								))}
							</nav>

							{/* Divider */}
							<div className="h-4 w-px bg-border hidden md:block" />

							{/* RSS Link */}
							<Button
								variant="ghost"
								size="icon"
								className="text-muted-foreground hover:text-foreground"
								asChild
								title={t.rss}
							>
								<a href={localePath(locale, "rss.xml")} aria-label={t.rss}>
									<RiRssLine className="w-5 h-5" />
								</a>
							</Button>

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

					{/* Built with section */}
					<div className="border-t pt-4 text-center">
						<p className="text-xs text-muted-foreground">
							{t.builtWith}{" "}
							{techLinks.slice(0, 3).map((tech, index) => (
								<span key={tech.name}>
									<ExternalLink href={tech.url}>{tech.name}</ExternalLink>
									{index < 2 && " · "}
								</span>
							))}
							. {t.deployedOn}{" "}
							<ExternalLink href={techLinks[3].url}>
								{techLinks[3].name}
							</ExternalLink>
							{(commitHash || buildDate) && (
								<>
									{" "}
									(
									{commitHash && (
										<ExternalLink
											href={`https://github.com/heyjosephme/personal_page/commit/${commitHash}`}
											className="font-mono"
											title={t.viewCommit}
										>
											{commitHash.slice(0, 7)}
										</ExternalLink>
									)}
									{commitHash && buildDate && " · "}
									{buildDate && (
										<span className="font-mono" title={t.buildDate}>
											{buildDate}
										</span>
									)}
									)
								</>
							)}
							.
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
