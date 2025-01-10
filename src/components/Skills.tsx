import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Layout, TestTube2, GitBranch, Terminal } from 'lucide-react';

const skillCategories = [
  {
    title: "Technical Skills",
    icon: <Code2 className="w-6 h-6" />,
    skills: ["Java", "Python", "HTML", "CSS", "DSA", "SQL"]
  },
  {
    title: "Testing Skills",
    icon: <TestTube2 className="w-6 h-6" />,
    skills: ["Manual Testing", "Automated Testing", "Robot Framework", "Selenium", "RPA"]
  },
  {
    title: "Frameworks",
    icon: <Layout className="w-6 h-6" />,
    skills: ["Flutter", "Laravel", "React"]
  },
  {
    title: "Version Control & Databases",
    icon: <GitBranch className="w-6 h-6" />,
    skills: ["GitHub", "Bitbucket", "SQL"]
  },
  {
    title: "Tools & Environment",
    icon: <Terminal className="w-6 h-6" />,
    skills: ["VS Code", "PyCharm", "UI Path", "Figma"]
  },
  {
    title: "Other Skills",
    icon: <Database className="w-6 h-6" />,
    skills: ["Agile", "Scrum", "Jira", "MS Office"]
  }
];

const Skills = () => {
  return (
    <div className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-gray-400">A comprehensive overview of my technical capabilities</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 p-6 rounded-lg"
            >
              <div className="flex items-center mb-4">
                <div className="text-blue-400 mr-3">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-gray-700 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;