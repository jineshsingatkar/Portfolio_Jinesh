// Component for displaying certifications
import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen } from 'lucide-react';

// Array of certification data
const certifications = [
  {
    title: "RPA Intro to Automation",
    issuer: "UiPath",
    icon: <Award className="w-6 h-6" />,
    date: "2023"
  },
  {
    title: "RPA Build Automation in Studio Web",
    issuer: "UiPath",
    icon: <BookOpen className="w-6 h-6" />,
    date: "2023"
  }
];

const Certifications = () => {
  return (
    <div className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        {/* Section header with animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Certifications</h2>
          <p className="text-gray-400">Professional certifications and achievements</p>
        </motion.div>

        {/* Certification cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900 p-6 rounded-lg hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="text-blue-400 mr-3">
                  {cert.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{cert.title}</h3>
                  <p className="text-gray-400">{cert.issuer}</p>
                </div>
              </div>
              <p className="text-gray-500">{cert.date}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;