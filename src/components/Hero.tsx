import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github } from 'lucide-react';
import { TechSlideshow } from './TechStack/Slideshow';
import { ProfilePhoto } from './Profile';

const Hero = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-8 md:py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left column: Personal info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full flex flex-col items-center lg:items-start"
          >
            <div className="w-full max-w-[280px] sm:max-w-[320px] mb-6">
              <ProfilePhoto />
            </div>
            
            {/* Name and title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-center lg:text-left">
              Hi, I'm <span className="text-blue-400">Jinesh Singatkar</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-400 mb-6 text-center lg:text-left">
              Quality Assurance Tester & Full Stack Developer
            </p>

            {/* Contact information */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-6 w-full lg:justify-start">
              <a 
                href="mailto:jineshsingatkar@gmail.com" 
                className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span className="text-sm sm:text-base">jineshsingatkar@gmail.com</span>
              </a>
              <a 
                href="tel:+919322791111" 
                className="text-gray-400 hover:text-blue-400 transition-colors text-sm sm:text-base"
              >
                +91 9322791111
              </a>
            </div>

            {/* Social links */}
            <div className="flex gap-6 justify-center lg:justify-start w-full">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110"
              >
                <Linkedin className="w-6 h-6 sm:w-7 sm:h-7" />
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110"
              >
                <Github className="w-6 h-6 sm:w-7 sm:h-7" />
              </a>
            </div>
          </motion.div>
          
          {/* Right column: Tech slideshow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full mt-8 lg:mt-0"
          >
            <div className="bg-gray-800/50 rounded-xl p-4 sm:p-6 backdrop-blur-sm">
              <TechSlideshow />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;