import { ui } from "@/i18n/ui";
import { localePath, type Locale } from "@/i18n/config";
interface HeroProps {
	showAnimation?: boolean;
	locale?: Locale;
}

const Hero = ({ showAnimation = true, locale = "en" }: HeroProps) => {
	const t = ui[locale];
	return (
		<div className={showAnimation ? "animate-fade-in-up" : ""}>
			<h1 className="mb-6 text-5xl font-extrabold leading-tight tracking-tight text-foreground md:text-7xl">
				{t.heroTitle}
			</h1>

			<p className="px-0 mb-4 text-xl md:text-2xl lg:px-24 text-foreground/90 leading-relaxed">
				{t.heroWork}
			</p>

			<p className="px-0 mb-10 text-lg text-muted-foreground lg:px-24">
				{t.heroLocation}
			</p>

			<div className="flex items-center justify-center gap-3 text-lg">
				<a
					href={localePath(locale, "blog")}
					className="text-foreground underline underline-offset-4 transition-colors hover:text-muted-foreground"
				>
					{t.readBlog}
				</a>
				<span aria-hidden="true" className="text-muted-foreground">
					·
				</span>
				<a
					href={localePath(locale, "about")}
					className="text-foreground underline underline-offset-4 transition-colors hover:text-muted-foreground"
				>
					{t.aboutMe}
				</a>
			</div>
		</div>
	);
};

export default Hero;
