import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';

const techStack = [
  { name: 'JAVA', color: '#f89820', icon: '🔧' },
  { name: 'HTML', color: '#e34c26', icon: '🌐' },
  { name: 'CSS', color: '#264de4', icon: '🎨' },
  { name: 'SQL', color: '#00758f', icon: '💾' },
  { name: 'REACT', color: '#61dbfb', icon: '⚛️' },
  { name: 'PYTHON', color: '#4B8BBE', icon: '🐍' },
  { name: 'SELENIUM', color: '#43B02A', icon: '🤖' },
  { name: 'RPA', color: '#fa4616', icon: '⚙️' },
];

const TechIcon = ({ name, color, icon, angle, radius }) => {
  const iconRef = useRef();
  
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
        <boxGeometry args={[0.8, 0.8, 0.1]} /> {/* Reduced size */}
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
        <div className="flex flex-col items-center justify-center w-16 h-16"> {/* Reduced size */}
          <span className="text-2xl mb-1">{icon}</span>
          <span className="text-white text-xs font-bold">{name}</span>
        </div>
      </Html>
    </group>
  );
};

const IconRing = () => {
  const ringRef = useRef();
  const radius = 2.5; // Reduced radius

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

const TechStackScene = () => {
  return (
    <group>
      <ambientLight intensity={0.7} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        intensity={1.5}
      />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />
      <IconRing />
    </group>
  );
};

export default TechStackScene;