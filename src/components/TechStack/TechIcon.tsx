import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import type { TechItem } from './data';

interface TechIconProps extends TechItem {
  angle: number;
  radius: number;
}

export const TechIcon: React.FC<TechIconProps> = ({ name, color, icon, angle, radius }) => {
  const iconRef = useRef<THREE.Group>();
  
  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    const currentAngle = angle + time * 0.5;
    iconRef.current.position.x = Math.cos(currentAngle) * radius;
    iconRef.current.position.z = Math.sin(currentAngle) * radius;
    iconRef.current.rotation.y = -currentAngle;
  });

  return (
    <group ref={iconRef}>
      <mesh>
        <boxGeometry args={[0.8, 0.8, 0.1]} />
        <meshPhongMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.2}
          transparent
          opacity={0.9}
          shininess={100}
        />
      </mesh>
      
      <Html
        transform
        position={[0, 0, 0.06]}
        center
        className="pointer-events-none"
      >
        <div className="flex flex-col items-center justify-center w-16 h-16">
          <span className="text-2xl mb-1">{icon}</span>
          <span className="text-white text-xs font-bold">{name}</span>
        </div>
      </Html>
    </group>
  );
};