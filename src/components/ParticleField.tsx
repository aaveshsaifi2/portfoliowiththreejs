import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function ParticlesInner({ count = 5000 }) {
  const ref = useRef<THREE.Points>(null);
  const mousePos = useRef({ x: 0, y: 0 });

  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return positions;
  }, [count]);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.05;
      ref.current.rotation.y = state.clock.elapsedTime * 0.08;
      
      // Subtle mouse influence
      ref.current.rotation.x += mousePos.current.y * 0.001;
      ref.current.rotation.y += mousePos.current.x * 0.001;
    }
  });

  return (
    <Points ref={ref} positions={particles} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#6366F1"
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

function FloatingShapes() {
  const meshRef = useRef<THREE.Mesh>(null);
  const mesh2Ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
    }
    if (mesh2Ref.current) {
      mesh2Ref.current.rotation.x = state.clock.elapsedTime * -0.15;
      mesh2Ref.current.rotation.z = state.clock.elapsedTime * 0.25;
      mesh2Ref.current.position.y = Math.cos(state.clock.elapsedTime * 0.4) * 0.2;
    }
  });

  return (
    <>
      <mesh ref={meshRef} position={[-2, 0, -2]}>
        <icosahedronGeometry args={[0.8, 1]} />
        <meshBasicMaterial color="#6366F1" wireframe transparent opacity={0.3} />
      </mesh>
      <mesh ref={mesh2Ref} position={[2.5, -0.5, -3]}>
        <octahedronGeometry args={[0.6, 0]} />
        <meshBasicMaterial color="#06B6D4" wireframe transparent opacity={0.3} />
      </mesh>
    </>
  );
}

export default function ParticleField() {
  return (
    <div className="absolute inset-0" style={{ zIndex: -1 }}>
      <Canvas 
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
      >
        <ambientLight intensity={0.5} />
        <ParticlesInner />
        <FloatingShapes />
      </Canvas>
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none" />
    </div>
  );
}
