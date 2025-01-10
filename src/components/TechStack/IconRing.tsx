import React, { useRef } from 'react';
import { TechIcon } from './TechIcon';
import { techStack } from './data';

export const IconRing: React.FC = () => {
  const ringRef = useRef<THREE.Group>();
  const radius = 2.5;

  return (
    <group ref={ringRef}>
      {techStack.map((tech, index) => {
        const angle = (index / techStack.length) * Math.PI * 2;
        return (
          <TechIcon
            key={index}
            {...tech}
            angle={angle}
            radius={radius}
          />
        );
      })}
    </group>
  );
};