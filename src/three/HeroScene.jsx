import React, { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

/* ============================================================
   HERO HOLOGRAPHIC HUD & ORBITAL TELEMETRY INTERFACE
   Complements the Signature Abstract Background Monolith
   ============================================================ */

function HolographicInterface({ mouseRef }) {
  const groupRef = useRef();
  const ringRef1 = useRef();
  const ringRef2 = useRef();
  const ringRef3 = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const mx = mouseRef.current?.x || 0;
    const my = mouseRef.current?.y || 0;

    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.08 + mx * 0.25;
      groupRef.current.rotation.x = Math.sin(t * 0.2) * 0.08 + my * 0.15;
    }

    if (ringRef1.current) ringRef1.current.rotation.z = t * 0.2;
    if (ringRef2.current) ringRef2.current.rotation.z = -t * 0.15;
    if (ringRef3.current) ringRef3.current.rotation.y = t * 0.12;
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Dynamic Ambient Orbit Rings */}
      <mesh ref={ringRef1} rotation={[Math.PI / 4, 0, 0]}>
        <torusGeometry args={[1.85, 0.012, 8, 80]} />
        <meshBasicMaterial color="#8B5CF6" transparent opacity={0.55} blending={THREE.AdditiveBlending} />
      </mesh>

      <mesh ref={ringRef2} rotation={[-Math.PI / 3, Math.PI / 6, 0]}>
        <torusGeometry args={[2.25, 0.01, 8, 90]} />
        <meshBasicMaterial color="#C084FC" transparent opacity={0.45} blending={THREE.AdditiveBlending} />
      </mesh>

      <mesh ref={ringRef3} rotation={[0, Math.PI / 4, Math.PI / 5]}>
        <torusGeometry args={[2.65, 0.008, 8, 100]} />
        <meshBasicMaterial color="#A855F7" transparent opacity={0.35} blending={THREE.AdditiveBlending} />
      </mesh>

      {/* Floating Micro Shards */}
      {[[-1.6, 1.2, 0.5], [1.8, -0.8, -0.4], [0.4, 1.9, -0.8], [-1.2, -1.4, 0.6]].map((pos, i) => (
        <mesh key={i} position={pos} scale={[0.15, 0.25, 0.15]}>
          <octahedronGeometry args={[1, 0]} />
          <meshStandardMaterial
            color={i % 2 === 0 ? "#C084FC" : "#8B5CF6"}
            emissive="#4C1D95"
            metalness={0.9}
            roughness={0.15}
            transparent
            opacity={0.85}
          />
        </mesh>
      ))}
    </group>
  );
}

export default function HeroScene({ mouseRef }) {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <Canvas
      dpr={Math.min(typeof window !== "undefined" ? window.devicePixelRatio : 1, isMobile ? 1 : 1.5)}
      camera={{ position: [0, 0, 5.5], fov: 50 }}
      gl={{ antialias: !isMobile, alpha: true }}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.4} />
      <directionalLight position={[4, 5, 5]} intensity={1.0} color="#C084FC" />
      <pointLight position={[0, 0, 2]} intensity={1.5} color="#A855F7" />
      <Suspense fallback={null}>
        <HolographicInterface mouseRef={mouseRef} />
      </Suspense>
    </Canvas>
  );
}
