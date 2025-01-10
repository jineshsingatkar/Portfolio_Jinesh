// Component for the 3D scene visualization
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box, Torus, Cylinder } from '@react-three/drei';

const Scene3D = () => {
  // References for animation
  const codeBlockRef = useRef();
  const circuitRef = useRef();
  const gearRef = useRef();

  // Animation loop
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    // Animate code blocks
    codeBlockRef.current.rotation.y = Math.sin(time * 0.5) * 0.5;
    codeBlockRef.current.position.y = Math.sin(time) * 0.2;
    
    // Rotate circuit ring
    circuitRef.current.rotation.z = time * 0.5;
    
    // Rotate gear
    gearRef.current.rotation.z = -time * 0.8;
  });

  return (
    <group position={[0, 0, 0]}>
      {/* Central code block structure */}
      <group ref={codeBlockRef}>
        <Box args={[1, 1.5, 0.2]} position={[0, 0, 0]}>
          <meshStandardMaterial
            color="#4B0082"
            metalness={0.8}
            roughness={0.2}
            emissive="#2a0047"
            emissiveIntensity={0.5}
          />
        </Box>
        
        {/* Code line details */}
        {[-0.4, 0, 0.4].map((y, i) => (
          <Box
            key={i}
            args={[0.7, 0.1, 0.3]}
            position={[0, y, 0.2]}
          >
            <meshStandardMaterial
              color="#60A5FA"
              emissive="#60A5FA"
              emissiveIntensity={0.5}
            />
          </Box>
        ))}
      </group>

      {/* Orbiting circuit ring */}
      <group ref={circuitRef}>
        <Torus
          args={[2, 0.1, 16, 32]}
          rotation={[Math.PI / 2, 0, 0]}
        >
          <meshStandardMaterial
            color="#3B82F6"
            metalness={0.8}
            roughness={0.2}
            emissive="#3B82F6"
            emissiveIntensity={0.3}
          />
        </Torus>
      </group>

      {/* Rotating gear representing testing/automation */}
      <group ref={gearRef} position={[1.5, 1.5, 0]}>
        <Cylinder
          args={[0.5, 0.5, 0.2, 8]}
          rotation={[Math.PI / 2, 0, 0]}
        >
          <meshStandardMaterial
            color="#60A5FA"
            metalness={0.8}
            roughness={0.2}
            emissive="#60A5FA"
            emissiveIntensity={0.3}
          />
        </Cylinder>
      </group>
    </group>
  );
};

export default Scene3D;