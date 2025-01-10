// Simple horizontal slideshow for tech stack
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { techStack } from './data';

// Number of items to show at once
const ITEMS_PER_SLIDE = 5;
const SLIDE_DURATION = 3000; // Time between slides in milliseconds

export const TechSlideshow: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % techStack.length);
    }, SLIDE_DURATION);

    return () => clearInterval(interval);
  }, []);

  // Get current visible items
  const getVisibleItems = () => {
    const items = [];
    for (let i = 0; i < ITEMS_PER_SLIDE; i++) {
      const index = (currentIndex + i) % techStack.length;
      items.push(techStack[index]);
    }
    return items;
  };

  return (
    <div className="w-full max-w-4xl mx-auto overflow-hidden py-8">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          className="flex justify-center gap-8"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          {getVisibleItems().map((tech, index) => (
            <motion.div
              key={`${currentIndex}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center"
            >
              {/* Icon */}
              <div
                className="w-16 h-16 flex items-center justify-center rounded-lg mb-2 text-3xl"
                style={{ backgroundColor: `${tech.color}20` }}
              >
                {tech.icon}
              </div>
              {/* Name */}
              <span className="text-sm font-medium text-white">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};