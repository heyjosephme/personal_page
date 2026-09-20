interface HeroProps {
	showAnimation?: boolean;
}

const Hero = ({ showAnimation = true }: HeroProps) => {
	return (
		<div className={showAnimation ? "animate-fade-in-up" : ""}>
			<h1 className="mb-6 text-5xl font-extrabold leading-tight tracking-tight text-foreground md:text-7xl">
				I'm Joseph.
			</h1>

			<p className="px-0 mb-4 text-xl md:text-2xl lg:px-24 text-foreground/90 leading-relaxed">
				FDE at work. Indie hacker after hours.
			</p>

			<p className="px-0 mb-10 text-lg text-muted-foreground lg:px-24">
				Based in Tokyo.
			</p>

			<div className="flex items-center justify-center gap-3 text-lg">
				<a
					href="/blog"
					className="text-foreground underline underline-offset-4 transition-colors hover:text-muted-foreground"
				>
					Read the Blog
				</a>
				<span aria-hidden="true" className="text-muted-foreground">
					·
				</span>
				<a
					href="/about"
					className="text-foreground underline underline-offset-4 transition-colors hover:text-muted-foreground"
				>
					About Me
				</a>
			</div>
		</div>
	);
};

export default Hero;
