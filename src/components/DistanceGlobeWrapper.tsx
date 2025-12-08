import { lazy, Suspense } from 'react';

// Lazy load the globe component to avoid SSR issues
const DistanceGlobe = lazy(() => import('./DistanceGlobe').then(mod => ({ default: mod.DistanceGlobe })));

export function DistanceGlobeWrapper() {
  return (
    <Suspense fallback={
      <div className="flex flex-col items-center gap-4">
        <div className="w-full max-w-2xl aspect-square flex items-center justify-center bg-muted/20 rounded-lg">
          <p className="text-muted-foreground">Loading globe...</p>
        </div>
      </div>
    }>
      <DistanceGlobe />
    </Suspense>
  );
}
