import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaReact, FaNodeJs, FaPython, FaGitAlt, FaGithub, FaWordpress 
} from 'react-icons/fa';
import { SiExpress, SiMongodb, SiMysql } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import { BsRobot } from 'react-icons/bs';

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', icon: <FaReact className="text-[#61DAFB]" /> },
      { name: 'React Native', icon: <FaReact className="text-[#61DAFB]" /> },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', icon: <FaNodeJs className="text-[#339933]" /> },
      { name: 'Express', icon: <SiExpress className="text-white" /> },
      { name: 'Python', icon: <FaPython className="text-[#3776AB]" /> },
    ],
  },
  {
    title: 'Database',
    skills: [
      { name: 'MySQL', icon: <SiMysql className="text-[#4479A1]" /> },
      { name: 'MongoDB', icon: <SiMongodb className="text-[#47A248]" /> },
    ],
  },
  {
    title: 'Tools / Platforms',
    skills: [
      { name: 'Git', icon: <FaGitAlt className="text-[#F05032]" /> },
      { name: 'GitHub', icon: <FaGithub className="text-white" /> },
      { name: 'VS Code', icon: <VscVscode className="text-[#007ACC]" /> },
      { name: 'WordPress', icon: <FaWordpress className="text-[#21759B]" /> },
      { name: 'AI Tools', icon: <BsRobot className="text-purple-400" /> },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="w-full py-16 px-4 md:px-10 bg-slate-900 border-t border-slate-800">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center w-full h-full">
        <motion.div
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="pb-12 text-center"
        >
          <h2 className="text-4xl font-bold inline-block border-b-4 border-blue-500 font-poppins pb-2">
            Skills
          </h2>
          <p className="pt-4 text-slate-400">Technical proficiency across the stack</p>
        </motion.div>

        {/* Categories Layout */}
        <div className="grid grid-cols-1 md:grid-cols-[repeat(2,auto)] justify-center gap-8 md:gap-12 w-full max-w-6xl mx-auto items-start">
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col items-start bg-slate-800/10 backdrop-blur-md p-5 sm:p-6 rounded-[1.5rem] border border-white/5 w-fit max-w-[380px]"
            >
              <h3 className="text-lg font-semibold text-gradient mb-4 text-left w-full">{category.title}</h3>
              
              <div className="flex flex-wrap gap-4 w-full justify-start">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.05, y: -3 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.2,
                      delay: index * 0.05,
                      type: 'spring',
                      stiffness: 260,
                      damping: 20
                    }}
                    className="glass-card flex flex-col items-center justify-center p-3 gap-2 group border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 shadow-none hover:shadow-[0_0_15px_rgba(59,130,246,0.1)] w-[90px] h-[90px] rounded-xl"
                  >
                    <div className="text-4xl transition-transform duration-300 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]">
                      {skill.icon}
                    </div>
                    <span className="text-slate-300 font-medium text-[10px] sm:text-[11px] text-center leading-tight">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;


