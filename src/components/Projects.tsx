// Projects component: Showcase of featured projects
import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, ShoppingCart, Heart } from 'lucide-react';

// Project data array
const projects = [
  {
    title: "Place-Act",
    icon: <Smartphone className="w-6 h-6" />,
    description: "Flutter and Firebase platform for tracking company visits. Improved efficiency by 30%.",
    duration: "Aug 2023 - Dec 2023",
    technologies: ["Flutter", "Firebase", "Dart", "UI/UX Testing"]
  },
  {
    title: "Agro-Aide",
    icon: <ShoppingCart className="w-6 h-6" />,
    description: "Online marketplace using JSP and SQL. Increased transactions by 40%.",
    duration: "Nov 2022 - Mar 2023",
    technologies: ["JSP", "SQL", "Java", "Payment Integration"]
  },
  {
    title: "Raising Lives",
    icon: <Heart className="w-6 h-6" />,
    description: "Donation platform that increased engagement by 30%.",
    duration: "Apr 2023 - Aug 2023",
    technologies: ["React", "Node.js", "MongoDB", "Email Integration"]
  }
];

const Projects = () => {
  return (
    <div className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-gray-400">Showcasing some of my best work</p>
        </motion.div>

        {/* Project cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 rounded-lg overflow-hidden"
            >
              <div className="p-6">
                {/* Project header */}
                <div className="flex items-center mb-4">
                  <div className="text-blue-400 mr-3">{project.icon}</div>
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                </div>
                {/* Project details */}
                <p className="text-gray-400 mb-4">{project.description}</p>
                <p className="text-sm text-gray-500 mb-4">{project.duration}</p>
                {/* Technology tags */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;