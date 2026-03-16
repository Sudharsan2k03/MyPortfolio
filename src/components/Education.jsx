import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy } from 'react-icons/fa';

const educationList = [
  {
    degree: 'MCA',
    institution: 'St. Joseph’s College, Trichy',
    duration: '2024 – 2026',
    achievement: 'College Management Prize – First Rank in Computer Hardware and Networks',
  },
  {
    degree: 'B.Sc Computer Science',
    institution: 'St. Joseph’s College, Trichy',
    duration: '2021 – 2024',
    achievement: 'College Management Prize in Applied Physics I, Applied Physics II and Basics of Excel',
  },
];

const Education = () => {
  return (
    <section id="education" className="w-full py-20 px-4 md:px-10">
      <div className="max-w-screen-xl mx-auto flex flex-col justify-center w-full h-full">
        
        <motion.div
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="pb-12 text-center"
        >
          <h2 className="text-4xl font-bold inline-block border-b-4 text-slate-200 border-blue-500 font-poppins pb-2">
            Education
          </h2>
          <p className="py-6 text-slate-400">My Academic Background & Achievements</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl mx-auto">
          {educationList.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="glass-card p-8 flex flex-col items-center text-center justify-center gap-4 bg-slate-800/80 hover:border-blue-500/50 transition-colors duration-300"
            >
              <h3 className="text-3xl font-bold text-gradient mb-2">{edu.degree}</h3>
              <p className="text-xl text-slate-300 font-medium">{edu.institution}</p>
              <span className="mt-2 text-blue-400 font-semibold bg-blue-500/10 px-6 py-2 rounded-full border border-blue-500/20">
                {edu.duration}
              </span>
              {edu.achievement && (
                <div className="mt-[14px] pt-4 border-t border-slate-700/50 w-full">
                  <p className="text-[#cbd5f5] text-sm leading-[1.6] flex items-center justify-center gap-3 font-normal">
                    <FaTrophy className="text-yellow-500 flex-shrink-0" />
                    {edu.achievement}
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Education;
