import React, { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

/* ============================================================
   GLOBAL BACKGROUND SCENE — MIDNIGHT FUTURISTIC AI THEME
   Signature Feature: Large Irregular Abstract 3D Structure
   + Perspective Dot Grid Wave + Decorative Polyhedron
   + Cyan/Blue/Violet Ambient Atmosphere
   ============================================================ */

const globalMouse = { x: 0, y: 0, vx: 0, vy: 0 };
const smoothMouse = { x: 0, y: 0 };
let scrollProgress = 0;
let scrollY = 0;

if (typeof window !== "undefined") {
  let lastX = 0, lastY = 0;
  window.addEventListener("mousemove", (e) => {
    const nx = (e.clientX / window.innerWidth) * 2 - 1;
    const ny = -((e.clientY / window.innerHeight) * 2 - 1);
    globalMouse.vx = nx - lastX;
    globalMouse.vy = ny - lastY;
    globalMouse.x = nx;
    globalMouse.y = ny;
    lastX = nx; lastY = ny;
  }, { passive: true });

  window.addEventListener("scroll", () => {
    scrollY = window.scrollY;
    const maxScroll = Math.max(document.body.scrollHeight - window.innerHeight, 1);
    scrollProgress = Math.min(Math.max(scrollY / maxScroll, 0), 1);
  }, { passive: true });
}

/* ============================================================
   PROCEDURAL IRREGULAR ABSTRACT CRYSTALLINE GEOMETRY
   ============================================================ */
function createIrregularCrystalGeometry(detail = 4) {
  const base = new THREE.IcosahedronGeometry(1.6, detail);
  const pos = base.attributes.position;
  const count = pos.count;
  const newPositions = new Float32Array(count * 3);

  const v = new THREE.Vector3();

  for (let i = 0; i < count; i++) {
    v.fromBufferAttribute(pos, i);

    const radius = v.length();
    const theta = Math.atan2(v.z, v.x);
    const phi = Math.acos(Math.max(Math.min(v.y / radius, 1), -1));

    const lobe1 = Math.sin(theta * 3.0 + phi * 2.0) * 0.35;
    const lobe2 = Math.cos(theta * 2.0 - phi * 4.0) * 0.25;
    const lobe3 = Math.sin(phi * 5.0 + theta) * 0.18;
    const spike = Math.pow(Math.max(Math.sin(theta * 4.0) * Math.cos(phi * 3.0), 0), 3.0) * 0.45;
    const indentation = -Math.pow(Math.max(Math.cos(theta * 2.0 + 1.5) * Math.sin(phi * 2.0), 0), 2.0) * 0.35;

    const twist = v.y * 0.45;
    const cosT = Math.cos(twist);
    const sinT = Math.sin(twist);

    const totalDisp = 1.0 + lobe1 + lobe2 + lobe3 + spike + indentation;
    v.multiplyScalar(totalDisp);

    const rx = v.x * cosT - v.z * sinT;
    const rz = v.x * sinT + v.z * cosT;

    newPositions[i * 3 + 0] = rx;
    newPositions[i * 3 + 1] = v.y * 1.15;
    newPositions[i * 3 + 2] = rz;
  }

  const geom = new THREE.BufferGeometry();
  geom.setAttribute("position", new THREE.BufferAttribute(newPositions, 3));
  if (base.index) geom.setIndex(base.index);
  geom.computeVertexNormals();
  return geom;
}

/* ============================================================
   SIGNATURE OBJECT: ABSTRACT NEURAL / CRYSTALLINE MONOLITH
   ============================================================ */
function SignatureAbstractStructure({ isMobile }) {
  const groupRef = useRef();
  const mainMeshRef = useRef();
  const wireframeRef = useRef();
  const coreRef = useRef();
  const lightRef = useRef();

  const { crystalGeom, innerGeom } = useMemo(() => {
    const detail = isMobile ? 3 : 4;
    const main = createIrregularCrystalGeometry(detail);
    const inner = createIrregularCrystalGeometry(detail - 1);
    return { crystalGeom: main, innerGeom: inner };
  }, [isMobile]);

  const shards = useMemo(() => {
    const count = isMobile ? 8 : 15;
    const list = [];
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2 + Math.random() * 0.4;
      const radius = 2.4 + Math.random() * 1.6;
      const height = (Math.random() - 0.5) * 3.2;
      const speed = 0.3 + Math.random() * 0.5 * (i % 2 === 0 ? 1 : -1);
      const rotSpeed = [Math.random() * 0.02, Math.random() * 0.02, Math.random() * 0.02];
      const scale = 0.08 + Math.random() * 0.14;
      const type = i % 3;
      list.push({ angle, radius, height, speed, rotSpeed, scale, type });
    }
    return list;
  }, [isMobile]);

  const spores = useMemo(() => {
    const count = isMobile ? 35 : 85;
    const pos = new Float32Array(count * 3);
    const phases = new Float32Array(count);
    const radii = new Float32Array(count);
    const speeds = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      radii[i] = 1.8 + Math.random() * 2.2;
      phases[i] = Math.random() * Math.PI * 2;
      speeds[i] = 0.4 + Math.random() * 0.6;
      pos[i * 3 + 0] = Math.cos(phases[i]) * radii[i];
      pos[i * 3 + 1] = (Math.random() - 0.5) * 3.5;
      pos[i * 3 + 2] = Math.sin(phases[i]) * radii[i];
    }
    return { positions: pos, phases, radii, speeds, count };
  }, [isMobile]);

  const sporeGeo = useMemo(() => {
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(spores.positions, 3));
    return g;
  }, [spores]);

  const { neuralNodes, filamentGeo } = useMemo(() => {
    const count = isMobile ? 8 : 16;
    const nodes = [];
    for (let i = 0; i < count; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = Math.cbrt(Math.random()) * 0.95;
      nodes.push(new THREE.Vector3(
        r * Math.sin(phi) * Math.cos(theta),
        r * Math.sin(phi) * Math.sin(theta) * 1.2,
        r * Math.cos(phi)
      ));
    }

    const lines = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const d = nodes[i].distanceTo(nodes[j]);
        if (d < 1.1) {
          lines.push(nodes[i].x, nodes[i].y, nodes[i].z);
          lines.push(nodes[j].x, nodes[j].y, nodes[j].z);
        }
      }
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.Float32BufferAttribute(lines, 3));
    return { neuralNodes: nodes, filamentGeo: geo };
  }, [isMobile]);

  const shardRefs = useRef([]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const group = groupRef.current;
    if (!group) return;

    const mx = smoothMouse.x;
    const my = smoothMouse.y;

    const targetScreenX = isMobile ? 0 : 0.45;
    const distToMouse = Math.hypot(mx - targetScreenX, my - 0.1);
    const proximity = Math.max(1.0 - distToMouse * 1.1, 0.0);

    const sp = scrollProgress;

    let targetX, targetY, targetZ, targetScale, targetRotX, targetRotY, targetRotZ;

    if (sp < 0.22) {
      const p = sp / 0.22;
      targetX = THREE.MathUtils.lerp(isMobile ? 0 : 3.0, isMobile ? 0 : 2.4, p);
      targetY = THREE.MathUtils.lerp(0.1, -0.3, p);
      targetZ = THREE.MathUtils.lerp(0.2, -1.8, p);
      targetScale = THREE.MathUtils.lerp(isMobile ? 0.9 : 1.22, 1.05, p);
      targetRotX = p * 0.4;
      targetRotY = t * 0.12 + mx * 0.6;
      targetRotZ = p * 0.2;
    } else if (sp < 0.45) {
      const p = (sp - 0.22) / 0.23;
      targetX = THREE.MathUtils.lerp(isMobile ? 0 : 2.4, isMobile ? 0 : 1.6, p);
      targetY = THREE.MathUtils.lerp(-0.3, -0.6, p);
      targetZ = THREE.MathUtils.lerp(-1.8, -4.2, p);
      targetScale = THREE.MathUtils.lerp(1.05, 0.95, p);
      targetRotX = 0.4 + p * 0.5;
      targetRotY = t * 0.1 + mx * 0.5;
      targetRotZ = 0.2 + p * 0.3;
    } else if (sp < 0.68) {
      const p = (sp - 0.45) / 0.23;
      targetX = THREE.MathUtils.lerp(isMobile ? 0 : 1.6, 0.0, p);
      targetY = THREE.MathUtils.lerp(-0.6, 0.2, p);
      targetZ = THREE.MathUtils.lerp(-4.2, -5.8, p);
      targetScale = THREE.MathUtils.lerp(0.95, 1.1, p);
      targetRotX = 0.9 - p * 0.4;
      targetRotY = t * 0.08 + mx * 0.4;
      targetRotZ = 0.5 - p * 0.3;
    } else if (sp < 0.88) {
      const p = (sp - 0.68) / 0.2;
      targetX = THREE.MathUtils.lerp(0.0, isMobile ? 0 : -2.4, p);
      targetY = THREE.MathUtils.lerp(0.2, -0.8, p);
      targetZ = THREE.MathUtils.lerp(-5.8, -4.5, p);
      targetScale = THREE.MathUtils.lerp(1.1, 0.88, p);
      targetRotX = 0.5 + p * 0.3;
      targetRotY = t * 0.09 + mx * 0.45;
      targetRotZ = 0.2 + p * 0.4;
    } else {
      const p = (sp - 0.88) / 0.12;
      targetX = THREE.MathUtils.lerp(isMobile ? 0 : -2.4, 0.0, p);
      targetY = THREE.MathUtils.lerp(-0.8, 0.8, p);
      targetZ = THREE.MathUtils.lerp(-4.5, -2.0, p);
      targetScale = THREE.MathUtils.lerp(0.88, 0.95, p);
      targetRotX = 0.8 + p * 0.4;
      targetRotY = t * 0.14 + mx * 0.5;
      targetRotZ = 0.6 - p * 0.4;
    }

    const floatY = Math.sin(t * 0.42) * 0.25 + Math.cos(t * 0.28) * 0.12;
    const floatX = Math.sin(t * 0.31) * 0.15;
    const floatZ = Math.cos(t * 0.36) * 0.18;

    const parallaxX = mx * 1.35 - (proximity > 0.1 ? (mx - targetScreenX) * 0.4 : 0);
    const parallaxY = my * 0.95 - (proximity > 0.1 ? (my - 0.1) * 0.35 : 0);

    group.position.x += (targetX + floatX + parallaxX - group.position.x) * 0.045;
    group.position.y += (targetY + floatY + parallaxY - group.position.y) * 0.045;
    group.position.z += (targetZ + floatZ - group.position.z) * 0.045;

    const tiltX = my * 0.38;
    const tiltZ = -mx * 0.25;
    group.rotation.x += (targetRotX + tiltX + Math.sin(t * 0.18) * 0.08 - group.rotation.x) * 0.04;
    group.rotation.y += (targetRotY + Math.cos(t * 0.15) * 0.05 - group.rotation.y) * 0.04;
    group.rotation.z += (targetRotZ + tiltZ + Math.sin(t * 0.22) * 0.06 - group.rotation.z) * 0.04;

    const breathe = 1.0 + Math.sin(t * 1.2) * 0.028 + Math.sin(t * 2.5) * 0.012;
    const finalScale = targetScale * breathe;
    group.scale.set(finalScale, finalScale, finalScale);

    if (lightRef.current) {
      const baseIntensity = 1.6 + Math.sin(t * 1.8) * 0.4;
      const flareIntensity = baseIntensity + proximity * 2.8;
      lightRef.current.intensity = THREE.MathUtils.lerp(lightRef.current.intensity, flareIntensity, 0.1);
    }

    if (coreRef.current) {
      const coreScale = 0.5 + Math.sin(t * 2.2) * 0.08 + proximity * 0.15;
      coreRef.current.scale.set(coreScale, coreScale, coreScale);
    }

    shardRefs.current.forEach((shardMesh, i) => {
      if (!shardMesh) return;
      const s = shards[i];
      const curAngle = s.angle + t * s.speed;
      const r = s.radius + (proximity * 0.4);
      shardMesh.position.x = Math.cos(curAngle) * r;
      shardMesh.position.z = Math.sin(curAngle) * r;
      shardMesh.position.y = s.height + Math.sin(t * 0.8 + s.angle) * 0.3;
      shardMesh.rotation.x += s.rotSpeed[0];
      shardMesh.rotation.y += s.rotSpeed[1];
      shardMesh.rotation.z += s.rotSpeed[2];
    });

    if (sporeGeo.attributes.position) {
      const posArr = sporeGeo.attributes.position.array;
      for (let i = 0; i < spores.count; i++) {
        const i3 = i * 3;
        const phase = spores.phases[i];
        const rad = spores.radii[i] + Math.sin(t * 0.6 + phase) * 0.3 + (proximity * 0.6);
        const curA = phase + t * spores.speeds[i] * 0.4;
        posArr[i3 + 0] = Math.cos(curA) * rad;
        posArr[i3 + 1] += Math.sin(t * 1.1 + phase) * 0.006;
        posArr[i3 + 2] = Math.sin(curA) * rad;
      }
      sporeGeo.attributes.position.needsUpdate = true;
    }
  });

  return (
    <group ref={groupRef} position={[2.8, 0.1, 0]}>
      {/* 1. MAIN FACETED ORGANIC CRYSTAL MESH */}
      <mesh ref={mainMeshRef} geometry={crystalGeom}>
        <meshPhysicalMaterial
          color="#150B2E"
          emissive="#2E1065"
          emissiveIntensity={0.65}
          roughness={0.18}
          metalness={0.88}
          clearcoat={0.9}
          clearcoatRoughness={0.12}
          reflectivity={0.9}
          transparent
          opacity={0.85}
          wireframe={false}
          flatShading={true}
        />
      </mesh>

      {/* 2. EXOSKELETON HOLOGRAPHIC WIREFRAME MATRIX */}
      <mesh ref={wireframeRef} geometry={crystalGeom} scale={[1.012, 1.012, 1.012]}>
        <meshBasicMaterial
          color="#A855F7"
          wireframe
          transparent
          opacity={0.25}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* 3. INNER NEURAL CAVITY MESH — subtle cyan tint added */}
      <mesh geometry={innerGeom} scale={[0.72, 0.72, 0.72]}>
        <meshStandardMaterial
          color="#0EA5E9"
          emissive="#0369A1"
          emissiveIntensity={0.7}
          roughness={0.3}
          metalness={0.7}
          transparent
          opacity={0.45}
          wireframe={true}
        />
      </mesh>

      {/* 4. INTERNAL PULSING NUCLEUS */}
      <mesh ref={coreRef}>
        <sphereGeometry args={[0.45, 24, 24]} />
        <meshBasicMaterial
          color="#E9D5FF"
          transparent
          opacity={0.75}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* 5. INTERNAL SYNAPTIC NODES & FILAMENTS */}
      <group>
        {neuralNodes.map((n, i) => (
          <mesh key={i} position={n}>
            <sphereGeometry args={[0.045, 8, 8]} />
            <meshBasicMaterial
              color={i % 2 === 0 ? "#22D3EE" : "#E9D5FF"}
              blending={THREE.AdditiveBlending}
            />
          </mesh>
        ))}
        <lineSegments geometry={filamentGeo}>
          <lineBasicMaterial
            color="#06B6D4"
            transparent
            opacity={0.4}
            blending={THREE.AdditiveBlending}
          />
        </lineSegments>
      </group>

      {/* 6. INTERNAL DYNAMIC POINT LIGHT */}
      <pointLight ref={lightRef} color="#A855F7" intensity={2.2} distance={12} decay={2} />

      {/* 7. ORBITING HOLOGRAPHIC ENERGY HALO RINGS */}
      <mesh rotation={[Math.PI / 3, 0.2, 0]}>
        <torusGeometry args={[2.5, 0.012, 8, 80]} />
        <meshBasicMaterial color="#8B5CF6" transparent opacity={0.45} blending={THREE.AdditiveBlending} />
      </mesh>
      <mesh rotation={[-Math.PI / 4, Math.PI / 5, 0]}>
        <torusGeometry args={[3.1, 0.01, 8, 90]} />
        <meshBasicMaterial color="#C084FC" transparent opacity={0.35} blending={THREE.AdditiveBlending} />
      </mesh>

      {/* 8. SATELLITE CRYSTAL SHARDS */}
      {shards.map((s, i) => (
        <mesh
          key={i}
          ref={(el) => (shardRefs.current[i] = el)}
          scale={[s.scale, s.scale * 1.6, s.scale]}
        >
          {s.type === 0 && <octahedronGeometry args={[1, 0]} />}
          {s.type === 1 && <tetrahedronGeometry args={[1, 0]} />}
          {s.type === 2 && <icosahedronGeometry args={[1, 0]} />}
          <meshStandardMaterial
            color="#8B5CF6"
            emissive="#4C1D95"
            emissiveIntensity={0.5}
            roughness={0.2}
            metalness={0.85}
            transparent
            opacity={0.8}
            flatShading={true}
          />
        </mesh>
      ))}

      {/* 9. ORBITING BIO-DIGITAL SPORE PARTICLES */}
      <points geometry={sporeGeo}>
        <pointsMaterial
          size={0.065}
          color="#E9D5FF"
          transparent
          opacity={0.7}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
        />
      </points>
    </group>
  );
}

/* ============================================================
   NEW: PERSPECTIVE DOT-GRID WAVE
   3D perspective plane of dots with animated sine-wave displacement.
   Positioned at the bottom of the hero section in 3D space.
   ============================================================ */
function PerspectiveDotGridWave({ isMobile }) {
  const meshRef = useRef();

  const { positions, originalY, count, cols, rows } = useMemo(() => {
    const cols = isMobile ? 28 : 52;
    const rows = isMobile ? 18 : 32;
    const count = cols * rows;
    const pos = new Float32Array(count * 3);
    const origY = new Float32Array(count);

    // Span the grid across 3D space with perspective foreshortening
    const xSpan = 22;
    const zSpanNear = 2.0;
    const zSpanFar = -8.0;

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const idx = r * cols + c;
        // t goes 0 (far back) to 1 (near camera bottom)
        const t = r / (rows - 1);
        // Perspective: spread wider as we come closer
        const xScale = THREE.MathUtils.lerp(0.3, 1.0, t);
        const x = ((c / (cols - 1)) - 0.5) * xSpan * xScale;
        const z = THREE.MathUtils.lerp(zSpanFar, zSpanNear, t);
        // Y base: angled plane going down toward viewer
        const y = THREE.MathUtils.lerp(1.5, -4.2, t);

        pos[idx * 3 + 0] = x;
        pos[idx * 3 + 1] = y;
        pos[idx * 3 + 2] = z;
        origY[idx] = y;
      }
    }

    return { positions: pos, originalY: origY, count, cols, rows };
  }, [isMobile]);

  const geo = useMemo(() => {
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(new Float32Array(count * 3), 3));
    return g;
  }, [count]);

  const origPositions = useMemo(() => Float32Array.from(positions), [positions]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const pos = geo.attributes.position.array;

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const idx = r * cols + c;
        const i3 = idx * 3;
        // Wave displacement — gentle rolling sine across X and Z
        const waveX = Math.sin(c * 0.35 + t * 0.38) * 0.14;
        const waveZ = Math.cos(r * 0.45 + t * 0.28) * 0.10;
        const combinedWave = waveX + waveZ;

        pos[i3 + 0] = origPositions[i3 + 0];
        pos[i3 + 1] = originalY[idx] + combinedWave;
        pos[i3 + 2] = origPositions[i3 + 2];
      }
    }
    geo.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={meshRef} geometry={geo}>
      <pointsMaterial
        size={isMobile ? 0.045 : 0.038}
        color="#06B6D4"
        transparent
        opacity={0.28}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

/* ============================================================
   NEW: DECORATIVE WIREFRAME POLYHEDRON + ORBITAL RINGS
   Small futuristic geometric object in the upper-right area.
   ============================================================ */
function DecorativePolyhedron({ isMobile }) {
  const groupRef = useRef();
  const polyRef = useRef();
  const ring1Ref = useRef();
  const ring2Ref = useRef();
  const ring3Ref = useRef();
  const glowLightRef = useRef();

  // Position: upper-right of the global scene, separate from the main monolith
  const basePos = isMobile ? [0, 3.2, -3] : [4.8, 3.5, -2.5];

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const group = groupRef.current;
    if (!group) return;

    // Gentle float
    group.position.y = basePos[1] + Math.sin(t * 0.55) * 0.22 + Math.cos(t * 0.33) * 0.10;
    group.position.x = basePos[0] + Math.sin(t * 0.28) * 0.12;

    // Slow rotation of the polyhedron itself
    if (polyRef.current) {
      polyRef.current.rotation.x = t * 0.09;
      polyRef.current.rotation.y = t * 0.14;
      polyRef.current.rotation.z = t * 0.07;
    }

    // Independent orbital ring rotations
    if (ring1Ref.current) {
      ring1Ref.current.rotation.z = t * 0.18;
      ring1Ref.current.rotation.x = Math.PI / 3.5 + Math.sin(t * 0.15) * 0.05;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.z = -t * 0.13;
      ring2Ref.current.rotation.y = t * 0.10;
    }
    if (ring3Ref.current) {
      ring3Ref.current.rotation.y = t * 0.16;
      ring3Ref.current.rotation.x = Math.sin(t * 0.20) * 0.12;
    }

    // Soft glow pulse
    if (glowLightRef.current) {
      glowLightRef.current.intensity = 0.6 + Math.sin(t * 1.4) * 0.2;
    }
  });

  return (
    <group ref={groupRef} position={basePos}>
      {/* Core wireframe icosahedron — cyan/violet */}
      <mesh ref={polyRef}>
        <icosahedronGeometry args={[0.42, 1]} />
        <meshBasicMaterial
          color="#22D3EE"
          wireframe
          transparent
          opacity={0.55}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Inner solid fill — very subtle */}
      <mesh>
        <icosahedronGeometry args={[0.38, 1]} />
        <meshStandardMaterial
          color="#0C1A2E"
          emissive="#0E7490"
          emissiveIntensity={0.4}
          roughness={0.5}
          metalness={0.8}
          transparent
          opacity={0.35}
        />
      </mesh>

      {/* Violet wireframe overlay — second layer */}
      <mesh>
        <icosahedronGeometry args={[0.50, 0]} />
        <meshBasicMaterial
          color="#8B5CF6"
          wireframe
          transparent
          opacity={0.22}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Orbital ring 1 — cyan */}
      <mesh ref={ring1Ref} rotation={[Math.PI / 3.5, 0, 0]}>
        <torusGeometry args={[0.82, 0.008, 8, 64]} />
        <meshBasicMaterial
          color="#06B6D4"
          transparent
          opacity={0.55}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Orbital ring 2 — electric blue */}
      <mesh ref={ring2Ref} rotation={[-Math.PI / 4, Math.PI / 5, 0]}>
        <torusGeometry args={[1.05, 0.006, 8, 72]} />
        <meshBasicMaterial
          color="#3B82F6"
          transparent
          opacity={0.42}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Orbital ring 3 — violet */}
      <mesh ref={ring3Ref} rotation={[0, Math.PI / 4, Math.PI / 5]}>
        <torusGeometry args={[1.28, 0.005, 8, 80]} />
        <meshBasicMaterial
          color="#A855F7"
          transparent
          opacity={0.30}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Soft cyan point glow */}
      <pointLight
        ref={glowLightRef}
        color="#06B6D4"
        intensity={0.7}
        distance={6}
        decay={2}
      />
    </group>
  );
}

/* ============================================================
   BACKGROUND PARTICLES & AMBIENT DEPTH LAYERS
   ============================================================ */

/* ---- Layer 1: Distant Deep Particles — now cyan/blue ---- */
function DeepBackgroundParticles({ count = 400 }) {
  const meshRef = useRef();

  const { positions, sizes, phases } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const sz = new Float32Array(count);
    const ph = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      pos[i * 3 + 0] = (Math.random() - 0.5) * 46;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 36;
      pos[i * 3 + 2] = -14 + (Math.random() - 0.5) * 16;
      sz[i] = 0.02 + Math.random() * 0.04;
      ph[i] = Math.random() * Math.PI * 2;
    }
    return { positions: pos, sizes: sz, phases: ph };
  }, [count]);

  const origPositions = useMemo(() => Float32Array.from(positions), [positions]);

  const geo = useMemo(() => {
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(new Float32Array(count * 3), 3));
    return g;
  }, [count]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const pos = geo.attributes.position.array;
    const scroll = scrollY * 0.0012;

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const phase = phases[i];
      pos[i3 + 0] = origPositions[i3 + 0] + Math.sin(t * 0.15 + phase) * 0.2 + smoothMouse.x * 0.25;
      pos[i3 + 1] = origPositions[i3 + 1] + Math.cos(t * 0.12 + phase) * 0.2 + smoothMouse.y * 0.18 - scroll;
      pos[i3 + 2] = origPositions[i3 + 2];
    }
    geo.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={meshRef} geometry={geo}>
      <pointsMaterial
        size={0.065}
        sizeAttenuation
        transparent
        opacity={0.38}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        color="#22D3EE"
      />
    </points>
  );
}

/* ---- Layer 2: Foreground Ambient Dust Particles — now light-cyan ---- */
function ForegroundFloatingParticles({ count = 120 }) {
  const meshRef = useRef();

  const { positions, phases } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const ph = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      pos[i * 3 + 0] = (Math.random() - 0.5) * 26;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = 2.0 + Math.random() * 5.0;
      ph[i] = Math.random() * Math.PI * 2;
    }
    return { positions: pos, phases: ph };
  }, [count]);

  const origPositions = useMemo(() => Float32Array.from(positions), [positions]);

  const geo = useMemo(() => {
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(new Float32Array(count * 3), 3));
    return g;
  }, [count]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const pos = geo.attributes.position.array;
    const scroll = scrollY * 0.0035;

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const phase = phases[i];
      pos[i3 + 0] = origPositions[i3 + 0] + Math.sin(t * 0.35 + phase) * 0.3 + smoothMouse.x * 1.8;
      pos[i3 + 1] = origPositions[i3 + 1] + Math.cos(t * 0.28 + phase) * 0.3 + smoothMouse.y * 1.2 - scroll;
      pos[i3 + 2] = origPositions[i3 + 2];
    }
    geo.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={meshRef} geometry={geo}>
      <pointsMaterial
        size={0.07}
        sizeAttenuation
        transparent
        opacity={0.42}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        color="#67E8F9"
      />
    </points>
  );
}

/* ---- Ambient Neural Web in Background — now blue/cyan ---- */
function AmbientNeuralNetwork() {
  const groupRef = useRef();

  const { nodePositions, linePositions } = useMemo(() => {
    const cols = 8, rows = 5;
    const xSpread = 32, ySpread = 20;
    const nodes = [];
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        nodes.push([
          (c / (cols - 1) - 0.5) * xSpread + (Math.random() - 0.5) * 2,
          (r / (rows - 1) - 0.5) * ySpread + (Math.random() - 0.5) * 2,
          -10 + (Math.random() - 0.5) * 3,
        ]);
      }
    }

    const lines = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i][0] - nodes[j][0];
        const dy = nodes[i][1] - nodes[j][1];
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 6.0 && Math.random() > 0.5) {
          lines.push(...nodes[i], ...nodes[j]);
        }
      }
    }

    const nodePos = new Float32Array(nodes.length * 3);
    nodes.forEach(([x, y, z], i) => {
      nodePos[i * 3] = x; nodePos[i * 3 + 1] = y; nodePos[i * 3 + 2] = z;
    });

    return { nodePositions: nodePos, linePositions: new Float32Array(lines) };
  }, []);

  const nodeGeo = useMemo(() => {
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(nodePositions, 3));
    return g;
  }, [nodePositions]);

  const lineGeo = useMemo(() => {
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(linePositions, 3));
    return g;
  }, [linePositions]);

  useFrame(() => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y += (smoothMouse.x * 0.05 - groupRef.current.rotation.y) * 0.03;
    groupRef.current.rotation.x += (smoothMouse.y * 0.03 - groupRef.current.rotation.x) * 0.03;
    groupRef.current.position.y = -scrollY * 0.0025;
  });

  return (
    <group ref={groupRef}>
      <points geometry={nodeGeo}>
        <pointsMaterial
          size={0.07}
          sizeAttenuation
          transparent
          opacity={0.30}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          color="#06B6D4"
        />
      </points>
      <lineSegments geometry={lineGeo}>
        <lineBasicMaterial
          color="#1D4ED8"
          transparent
          opacity={0.08}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>
    </group>
  );
}

/* ---- Ambient Scene Lights — added cyan directional light ---- */
function SceneLighting() {
  const mouseLightRef = useRef();

  useFrame(() => {
    if (!mouseLightRef.current) return;
    mouseLightRef.current.position.x += (smoothMouse.x * 10 - mouseLightRef.current.position.x) * 0.05;
    mouseLightRef.current.position.y += (smoothMouse.y * 7 - mouseLightRef.current.position.y) * 0.05;
  });

  return (
    <>
      <ambientLight intensity={0.3} />
      {/* Original purple key light */}
      <directionalLight position={[6, 8, 8]} intensity={1.1} color="#C084FC" />
      {/* Original fill */}
      <directionalLight position={[-8, -5, -6]} intensity={0.7} color="#8B5CF6" />
      {/* NEW: Cyan directional from upper-right — complements the decorative polyhedron */}
      <directionalLight position={[10, 6, 3]} intensity={0.45} color="#06B6D4" />
      {/* NEW: Electric-blue low-left fill for depth */}
      <directionalLight position={[-10, -8, -4]} intensity={0.25} color="#3B82F6" />
      {/* Mouse-tracking purple point */}
      <pointLight ref={mouseLightRef} color="#A855F7" intensity={1.0} distance={18} position={[0, 0, 4]} />
    </>
  );
}

/* ---- Camera Subtle Parallax Drift ---- */
function CameraController() {
  const { camera } = useThree();
  useFrame(() => {
    smoothMouse.x += (globalMouse.x - smoothMouse.x) * 0.04;
    smoothMouse.y += (globalMouse.y - smoothMouse.y) * 0.04;

    camera.position.x += (smoothMouse.x * 0.65 - camera.position.x) * 0.02;
    camera.position.y += (smoothMouse.y * 0.4 - camera.position.y) * 0.02;
    camera.lookAt(0, 0, 0);
  });
  return null;
}

/* ============================================================
   MAIN BACKGROUND COMPONENT
   ============================================================ */
export default function BackgroundScene() {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        // Multi-stop ambient: cyan upper-right, blue lower-left, violet mid — over very dark navy
        background: [
          "radial-gradient(ellipse at 72% 18%, rgba(6,182,212,0.07) 0%, transparent 48%)",
          "radial-gradient(ellipse at 18% 72%, rgba(59,130,246,0.06) 0%, transparent 50%)",
          "radial-gradient(ellipse at 48% 38%, rgba(168,85,247,0.05) 0%, transparent 55%)",
          "radial-gradient(ellipse at 82% 80%, rgba(139,92,246,0.04) 0%, transparent 45%)",
          "#020617",
        ].join(", "),
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 11], fov: 55 }}
        dpr={Math.min(typeof window !== "undefined" ? window.devicePixelRatio : 1, isMobile ? 1 : 1.5)}
        gl={{
          antialias: !isMobile,
          alpha: false,
          powerPreference: "high-performance",
        }}
        style={{ background: "transparent" }}
      >
        <CameraController />
        <SceneLighting />

        {/* BACKGROUND LAYER (Deep Data Particles — cyan) */}
        <DeepBackgroundParticles count={isMobile ? 180 : 450} />
        {!isMobile && <AmbientNeuralNetwork />}

        {/* PERSPECTIVE DOT GRID WAVE — hero section bottom */}
        <PerspectiveDotGridWave isMobile={isMobile} />

        {/* MIDGROUND LAYER: THE SIGNATURE ABSTRACT 3D MONOLITH */}
        <SignatureAbstractStructure isMobile={isMobile} />

        {/* DECORATIVE POLYHEDRON — upper right with orbital rings */}
        {!isMobile && <DecorativePolyhedron isMobile={isMobile} />}

        {/* FOREGROUND LAYER (Floating Glowing Dust Motes — light cyan) */}
        <ForegroundFloatingParticles count={isMobile ? 50 : 130} />

        <fog attach="fog" args={["#020617", 14, 32]} />
      </Canvas>
    </div>
  );
}
