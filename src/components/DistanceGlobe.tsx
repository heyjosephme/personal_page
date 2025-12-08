import { useEffect, useState, useRef } from 'react';

interface Coordinates {
  lat: number;
  lng: number;
}

interface PointData {
  lat: number;
  lng: number;
  size: number;
  color: string;
  label: string;
}

interface ArcData {
  startLat: number;
  startLng: number;
  endLat: number;
  endLng: number;
  color: string[];
}

const TOKYO_COORDS: Coordinates = {
  lat: 35.6762,
  lng: 139.6503,
};

// Haversine formula to calculate distance between two points on Earth
function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371; // Radius of Earth in kilometers
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c;
  return Math.round(distance);
}

export function DistanceGlobe() {
  const [userCoords, setUserCoords] = useState<Coordinates | null>(null);
  const [distance, setDistance] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [GlobeComponent, setGlobeComponent] = useState<any>(null);
  const globeEl = useRef<any>();

  // Dynamically import Globe component only on client
  useEffect(() => {
    import('react-globe.gl').then((mod) => {
      setGlobeComponent(() => mod.default);
    });
  }, []);

  useEffect(() => {
    // Check if we're in the browser
    if (typeof window === 'undefined') return;

    // Get user's location using browser Geolocation API
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const coords = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          setUserCoords(coords);

          // Calculate distance
          const dist = calculateDistance(
            TOKYO_COORDS.lat,
            TOKYO_COORDS.lng,
            coords.lat,
            coords.lng
          );
          setDistance(dist);
        },
        (err) => {
          console.error('Geolocation error:', err);
          // User denied or error - just show globe without user location
          // Don't treat this as an error, just skip showing distance
          setError(null);
        },
        {
          timeout: 10000, // 10 second timeout
          enableHighAccuracy: false,
        }
      );
    }
  }, []);

  useEffect(() => {
    // Auto-rotate globe
    if (globeEl.current) {
      globeEl.current.controls().autoRotate = true;
      globeEl.current.controls().autoRotateSpeed = 0.5;
    }
  }, []);

  const pointsData: PointData[] = [
    {
      lat: TOKYO_COORDS.lat,
      lng: TOKYO_COORDS.lng,
      size: 0.5,
      color: 'red',
      label: 'Tokyo (Me)',
    },
    ...(userCoords ? [{
      lat: userCoords.lat,
      lng: userCoords.lng,
      size: 0.5,
      color: 'blue',
      label: 'You',
    }] : []),
  ];

  const arcsData: ArcData[] = userCoords ? [{
    startLat: TOKYO_COORDS.lat,
    startLng: TOKYO_COORDS.lng,
    endLat: userCoords.lat,
    endLng: userCoords.lng,
    color: ['red', 'blue'],
  }] : [];

  // Show loading state until Globe component is loaded
  if (!GlobeComponent) {
    return (
      <div className="flex flex-col items-center gap-4">
        <div className="w-full aspect-square flex items-center justify-center bg-muted/20 rounded-lg">
          <p className="text-muted-foreground">Loading globe...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative w-full aspect-square">
        <GlobeComponent
          ref={globeEl}
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
          backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
          pointsData={pointsData}
          pointAltitude={0.01}
          pointColor="color"
          pointRadius="size"
          pointLabel="label"
          arcsData={arcsData}
          arcColor="color"
          arcDashLength={0.4}
          arcDashGap={2}
          arcDashAnimateTime={2000}
          arcStroke={0.5}
        />
      </div>

      {distance !== null && (
        <p className="text-sm text-center text-muted-foreground">
          📍 You're <strong className="text-foreground">{distance.toLocaleString()} km</strong> away from Tokyo
        </p>
      )}

      {error && (
        <p className="text-xs text-center text-destructive">{error}</p>
      )}
    </div>
  );
}
