import { ui } from "@/i18n/ui";
import { aboutSections } from "@/i18n/about";
import type { Locale } from "@/i18n/config";
import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { DistanceGlobeWrapper } from "./DistanceGlobeWrapper";

const AboutContent = ({ locale = "en" }: { locale?: Locale }) => {
	const t = ui[locale];
	const fadeInUp = {
		initial: { opacity: 0, y: 20 },
		animate: { opacity: 1, y: 0 },
		transition: { duration: 0.5 },
	};

	const staggerChildren = {
		animate: {
			transition: {
				staggerChildren: 0.2,
			},
		},
	};

	const sections = aboutSections[locale];

	return (
		<motion.section
			className="px-4 py-24 mx-auto max-w-7xl"
			initial="initial"
			animate="animate"
			variants={staggerChildren}
		>
			{/* Intro Header */}
			<motion.div className="text-center mb-16" variants={fadeInUp}>
				<h1 className="text-4xl font-bold tracking-tight mb-4">{t.aboutMe}</h1>
				<p className="text-muted-foreground">{t.aboutSubtitle}</p>
			</motion.div>

			{/* Two Column Layout: Globe Sidebar + Content */}
			<div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
				{/* Left Sidebar - Globe (Sticky on desktop) */}
				<motion.aside
					className="w-full lg:w-96 lg:flex-shrink-0 lg:sticky lg:top-24"
					variants={fadeInUp}
				>
					<DistanceGlobeWrapper locale={locale} />
				</motion.aside>

				{/* Right Content - About Sections */}
				<div className="w-full lg:flex-1 lg:min-w-0 space-y-8">
					{sections.map((section, index) => (
						<motion.div key={section.title} variants={fadeInUp}>
							<Card className="overflow-hidden">
								<CardContent className="p-6">
									<div className="flex items-center gap-2 mb-4">
										<h2 className="text-2xl font-semibold">{section.title}</h2>
										<Badge variant="secondary">{section.badge}</Badge>
									</div>
									<p className="text-muted-foreground leading-relaxed">
										{section.text}
									</p>
								</CardContent>
							</Card>
						</motion.div>
					))}
				</div>
			</div>
		</motion.section>
	);
};

export default AboutContent;
