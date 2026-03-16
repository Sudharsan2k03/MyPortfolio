import React from 'react';
import { motion } from 'framer-motion';

const experienceList = [
  {
    company: 'Flexidigit Technologies',
    role: 'Full Stack Developer Intern',
    duration: 'Dec 2025 – Mar 2026',
    points: [
      'Worked on developing modules for a Master Data and Transport Management System using Vue.js, Python (Frappe Framework), and MariaDB.',
      'Implemented features for managing logistics data including consignments, manifests, gatepass generation, and delivery tracking workflows.',
      'Contributed to building a scalable web-based system that improves transportation data management and operational efficiency.',
    ],
  },
  {
    company: 'Qantler Technologies',
    role: 'Internship Trainee',
    duration: 'May 2025 – Jun 2025',
    points: [
      'Completed a Front-End Development internship focused on building responsive and interactive web applications.',
      'Worked with HTML, CSS, Bootstrap, JavaScript, and React to develop structured UI components and dynamic web pages.',
      'Implemented responsive layouts, form validations, and interactive features while following modern UI/UX design practices.',
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="w-full py-20 px-4 md:px-10 bg-slate-900 border-t border-slate-800">
      <div className="max-w-screen-xl mx-auto flex flex-col justify-center w-full h-full">
        
        <motion.div
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="pb-12 text-center"
        >
          <h2 className="text-4xl font-bold inline-block border-b-4 text-slate-200 border-blue-500 font-poppins pb-2">
            Experience
          </h2>
          <p className="py-6 text-slate-400">Hands-on professional experience through internships</p>
        </motion.div>

        <div className="relative border-l-2 border-blue-500/30 ml-3 md:ml-6 pl-6 pt-4 space-y-12">
          {experienceList.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.5 }}
              className="relative"
            >
              {/* Timeline marker */}
              <div className="absolute -left-[35px] top-6 w-5 h-5 bg-blue-500 rounded-full border-4 border-slate-900 shadow-[0_0_10px_2px_rgba(59,130,246,0.5)]"></div>
              
              <div className="glass-card p-6 md:p-8 rounded-2xl hover:-translate-y-1 transition-transform duration-300">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4 gap-2">
                  <h3 className="text-2xl font-bold text-gradient">{exp.company}</h3>
                  <span className="text-slate-400 font-medium px-4 py-1.5 bg-slate-800/50 border border-slate-700 rounded-full text-sm inline-block w-fit">
                    {exp.duration}
                  </span>
                </div>
                <h4 className="text-xl font-medium text-white mb-4 flex items-center gap-2">
                  <span className="text-blue-400">▹</span>{exp.role}
                </h4>
                <ul className="text-slate-400 leading-relaxed max-w-3xl space-y-2">
                  {exp.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1.5 text-xs">●</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
