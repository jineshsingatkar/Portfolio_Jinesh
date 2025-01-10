// Experience component: Display work experience and education
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';

const Experience = () => {
  return (
    <div className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Experience & Education</h2>
          <p className="text-gray-400">My professional journey and academic background</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Work Experience column */}
          <div>
            <div className="flex items-center mb-8">
              <Briefcase className="w-6 h-6 text-blue-400 mr-3" />
              <h3 className="text-2xl font-semibold">Work Experience</h3>
            </div>
            
            <div className="space-y-8">
              {/* Current job */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-700 p-6 rounded-lg"
              >
                <h4 className="text-xl font-semibold">Web Developer</h4>
                <p className="text-blue-400">Coneixement India Pvt. Ltd</p>
                <p className="text-gray-400">June 2024 – Dec 2024</p>
                <ul className="mt-4 space-y-2 text-gray-300">
                  <li>• RPA solutions: 70% reduction in data scraping time</li>
                  <li>• UI/UX improvements: 25% increase in engagement</li>
                  <li>• React.js optimization: 30% performance boost</li>
                  <li>• WordPress automation: 50% faster content updates</li>
                </ul>
              </motion.div>

              {/* Internship */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-700 p-6 rounded-lg"
              >
                <h4 className="text-xl font-semibold">Full-Stack Developer Intern</h4>
                <p className="text-blue-400">Paarsh Infotech Pvt. Ltd</p>
                <p className="text-gray-400">Feb 2024 – May 2024</p>
                <ul className="mt-4 space-y-2 text-gray-300">
                  <li>• Finanza app: 15% increase in appointments</li>
                  <li>• Testing coverage: 35% improvement</li>
                  <li>• UI testing automation: 60% time reduction</li>
                </ul>
              </motion.div>

              {/* Apprenticeship */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-700 p-6 rounded-lg"
              >
                <h4 className="text-xl font-semibold">Act Apprenticeship</h4>
                <p className="text-blue-400">Workshop Southwestern Railway Hubli</p>
                <p className="text-gray-400">November 2021 – November 2022</p>
                <ul className="mt-4 space-y-2 text-gray-300">
                  <li>• Works at Carriage Repair Workshop</li>
                  <li>• Designated Trade: Assistant</li>
                  <li>• Job Title: Act Apprenticeship</li>
                </ul>
              </motion.div>
            </div>
          </div>

          {/* Education column */}
          <div>
            <div className="flex items-center mb-8">
              <GraduationCap className="w-6 h-6 text-blue-400 mr-3" />
              <h3 className="text-2xl font-semibold">Education</h3>
            </div>
            
            <div className="space-y-8">
              {/* Master's degree */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-700 p-6 rounded-lg"
              >
                <h4 className="text-xl font-semibold">Master of Computer Applications</h4>
                <p className="text-blue-400">Sinhgad Institute of Management, Pune</p>
                <p className="text-gray-400">2022-2024</p>
                <p className="mt-2">CGPA: 8.09 | Aggregate: 74.21%</p>
              </motion.div>

              {/* Bachelor's degree */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-700 p-6 rounded-lg"
              >
                <h4 className="text-xl font-semibold">Bachelor of Computer Science</h4>
                <p className="text-blue-400">ACS College Navapur</p>
                <p className="text-gray-400">2019-2022</p>
                <p className="mt-2">Aggregate: 86.85%</p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;