// Hero component: Main landing section of the portfolio
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github } from 'lucide-react';
import { TechSlideshow } from './TechStack/Slideshow';
import { ProfilePhoto } from './Profile';

const Hero = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column: Personal info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <ProfilePhoto />
            
            {/* Name and title */}
            <h1 className="text-5xl font-bold mb-6 text-center lg:text-left">
              Hi, I'm <span className="text-blue-400">Jinesh Singatkar</span>
            </h1>
            <p className="text-xl text-gray-400 mb-4 text-center lg:text-left">
              Quality Assurance Tester & Full Stack Developer
            </p>

            {/* Contact information */}
            <div className="flex justify-center lg:justify-start gap-4 mb-6">
              <a href="mailto:jineshsingatkar@gmail.com" className="flex items-center gap-2 text-gray-400 hover:text-blue-400">
                <Mail className="w-5 h-5" />
                jineshsingatkar@gmail.com
              </a>
              <a href="tel:+919322791111" className="text-gray-400 hover:text-blue-400">
                +91 9322791111
              </a>
            </div>

            {/* Social links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400">
                <Github className="w-6 h-6" />
              </a>
            </div>
          </motion.div>
          
          {/* Right column: Tech slideshow */}
          <div className="lg:w-full flex items-center justify-center p-4 mt-8">
            <TechSlideshow />
          </div>
        </div>
      </div>
    </div>
  );
};


export default Hero;