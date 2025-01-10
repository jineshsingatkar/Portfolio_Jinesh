// 3D Scene component for tech stack visualization
import React from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import { techStack } from './data';

interface Scene3DProps {
  currentCategory: string;
}

const Scene3D: React.FC<Scene3DProps> = ({ currentCategory }) => {
  // Filter skills by current category
  const currentSkills = techStack.filter(skill => skill.category === currentCategory);
  
  return (
    <group>
      {currentSkills.map((skill, index) => {
        // Calculate position in a circle
        const angle = (index / currentSkills.length) * Math.PI * 2;
        const radius = 3;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        
        return (
          <group key={skill.name} position={[x, y, 0]}>
            {/* Skill icon */}
            <Text
              position={[0, 0.5, 0]}
              fontSize={0.8}
              color={skill.color}
              anchorX="center"
              anchorY="middle"
            >
              {skill.icon}
            </Text>
            
            {/* Skill name */}
            <Text
              position={[0, -0.5, 0]}
              fontSize={0.4}
              color="white"
              anchorX="center"
              anchorY="middle"
            >
              {skill.name}
            </Text>
          </group>
        );
      })}
    </group>
  );
};

export default Scene3D;