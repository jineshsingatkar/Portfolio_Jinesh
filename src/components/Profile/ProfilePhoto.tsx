// Component for displaying the profile photo with animations
import React from 'react';
import { motion } from 'framer-motion';
import { profileAnimations } from './animations';
import jineshPic from '../../assets/jinesh_pic.png';

const ProfilePhoto: React.FC = () => {
  return (
    <motion.div 
      {...profileAnimations.container}
      className="relative w-48 h-48 mx-auto mb-8"
    >
      <img
        src={jineshPic}
        alt="Jinesh Singatkar"
        className="w-full h-full rounded-full object-cover border-4 border-blue-400 shadow-lg"
      />
      <motion.div
        {...profileAnimations.border}
        className="absolute -inset-2 rounded-full border-2 border-blue-400 border-dashed"
      />
    </motion.div>
  );
};

export default ProfilePhoto;