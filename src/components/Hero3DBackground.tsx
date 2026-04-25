'use client';
import { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

const FloatingDust = (props: any) => {
  const ref = useRef<any>(null);
  // Split into two sets of particles for mixed colors
  const sphereBlack = useMemo(() => random.inSphere(new Float32Array(900), { radius: 1.5 }), []);
  const sphereGrey = useMemo(() => random.inSphere(new Float32Array(900), { radius: 1.5 }), []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 30; // Very slow rotation
      ref.current.rotation.y -= delta / 40;
    }
  });

  return (
    <group ref={ref} rotation={[0, 0, Math.PI / 4]}>
      {/* Black particles */}
      <Points positions={sphereBlack as Float32Array} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#777777" // Sophisticated Grey
          size={0.012} 
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.6} 
        />
      </Points>
      {/* Grey particles */}
      <Points positions={sphereGrey as Float32Array} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#888888" // Neutral Grey
          size={0.01} 
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.5} 
        />
      </Points>
    </group>
  );
};

export default function Hero3DBackground() {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0 }}>
      <Canvas camera={{ position: [0, 0, 1] }} dpr={[1, 2]}>
        <Suspense fallback={null}>
          <FloatingDust />
        </Suspense>
      </Canvas>
    </div>
  );
}
