import { ui } from "@/i18n/ui";
import type { Locale } from "@/i18n/config";
import { lazy, Suspense } from "react";

// Lazy load the globe component to avoid SSR issues
const DistanceGlobe = lazy(() =>
	import("./DistanceGlobe").then((mod) => ({ default: mod.DistanceGlobe })),
);

export function DistanceGlobeWrapper({ locale = "en" }: { locale?: Locale }) {
	return (
		<Suspense
			fallback={
				<div className="flex flex-col items-center gap-4">
					<div className="w-full max-w-2xl aspect-square flex items-center justify-center bg-muted/20 rounded-lg">
						<p className="text-muted-foreground">{ui[locale].loadingGlobe}</p>
					</div>
				</div>
			}
		>
			<DistanceGlobe locale={locale} />
		</Suspense>
	);
}
