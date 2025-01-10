import React from 'react';
import { motion } from 'framer-motion';
import profileImage from '../assets/profile.jpg'; // You'll need to add your image to this path

const ProfilePhoto = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative w-48 h-48 mx-auto mb-8"
    >
      <img
        src={profileImage}
        alt="Jinesh Singatkar"
        className="w-full h-full rounded-full object-cover border-4 border-blue-400 shadow-lg"
      />
      <motion.div
        animate={{ 
          rotate: 360,
          borderColor: ['#60A5FA', '#3B82F6', '#2563EB', '#60A5FA']
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute -inset-2 rounded-full border-2 border-blue-400 border-dashed"
      />
    </motion.div>
  );
};

export default ProfilePhoto;