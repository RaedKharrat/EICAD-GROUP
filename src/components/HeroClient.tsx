'use client';

import dynamic from 'next/dynamic';

const LightRays = dynamic(() => import('./LightRays'), { ssr: false });

export default function HeroClient() {
  return (
    <LightRays
      raysOrigin="top-center"
      raysColor="#d4af37" /* Architectural Gold */
      raysSpeed={0.5}
      lightSpread={0.8}
      rayLength={2.5}
      followMouse={true}
      mouseInfluence={0.05}
      noiseAmount={0.02}
      distortion={0.1}
    />
  );
}
