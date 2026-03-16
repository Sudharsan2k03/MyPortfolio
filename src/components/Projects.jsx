import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projectsList = [
   {
    title: 'Personal Expense Tracker',
    description: 'Developed a full-stack web application to track and manage daily expenses efficiently.Implemented features to add, edit, delete and filter expenses by date.Built RESTful APIs using Node.js and Express.js with MongoDB for data storage.',
    techStack: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
    liveLink: 'https://expense-tracker-hazel-six-10.vercel.app/',
    githubLink: 'https://github.com/Sudharsan2k03/expense-tracker',
  },
  {
    title: 'Faculty Workload Allocation and Timetable Management System',
    description: 'Developed a full-stack web application to manage faculty details, subjects and classroom schedules.Implemented workload allocation to assign subjects to faculty members efficiently.Built an automated timetable generator with conflict detection for rooms and faculty.',
    techStack: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
    liveLink: 'https://faculty-workload-system.onrender.com/login',
    githubLink: 'https://github.com/Sudharsan2k03/faculty-workload-system',
  },
    {
    title: 'Travel Packing Assistant App',
    description: 'Developed a mobile application using React Native to help users organize travel packing efficiently.Provided weather-based packing suggestions based on destination and travel details.Implemented smart packing checklists to manage and track essential travel items.',
    techStack: ['React Native'],
    liveLink: 'https://drive.google.com/file/d/1wSHqvD5E-5LV6Pap3RUPCPFjXwA7LP8r/view?usp=drive_link',
    githubLink: 'https://github.com/Sudharsan2k03/travelapp',
  },
];  

const Projects = () => {
  return (
    <section id="projects" className="w-full py-20 px-4 md:px-10">
      <div className="max-w-screen-xl mx-auto flex flex-col justify-center w-full h-full">
        
        <motion.div
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="pb-12 text-center"
        >
          <h2 className="text-4xl font-bold inline-block border-b-4 text-slate-200 border-blue-500 font-poppins pb-2">
            Projects
          </h2>
          <p className="py-6 text-slate-400">Featured applications I've built</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsList.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -10 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.5 }}
              className="glass-card flex flex-col justify-between overflow-hidden group"
            >
              <div className="p-6 relative">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 blur-[40px] pointer-events-none rounded-full group-hover:bg-blue-500/20 transition-all duration-500"></div>

                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm md:text-base mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech, tIdx) => (
                    <span key={tIdx} className="px-3 py-1 bg-slate-700/50 text-blue-300 text-xs rounded-full font-medium border border-blue-500/20">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="p-6 border-t border-slate-700/50 gap-4 flex mt-auto">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center flex-1 gap-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white py-2 rounded-lg font-medium transition-all duration-300 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40"
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center flex-1 gap-2 bg-slate-700 hover:bg-slate-600 text-white py-2 rounded-lg font-medium transition-all duration-300 shadow-md"
                >
                  <FaGithub size={18} /> GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
