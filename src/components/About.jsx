import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="w-full py-20 px-4 md:px-10">
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center h-full">
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="pb-12 text-center"
        >
          <h2 className="text-4xl font-bold inline-block border-b-4 border-blue-500 font-poppins pb-2">
            About Me
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="glass-card p-6 md:p-10 relative overflow-hidden group"
        >
          {/* Subtle animated background gradient effect on hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

          <p className="text-lg md:text-xl text-slate-300 leading-relaxed z-10 relative">
            I am a Full Stack Developer with hands-on experience in building modern web applications using the MERN stack. I enjoy developing scalable backend systems, designing efficient APIs, and creating responsive user interfaces. 
            <br className="mb-4" />
            <br />
            I also build cross-platform mobile applications using React Native with a focus on performance and usability. I am passionate about solving real-world problems through technology and building scalable digital solutions. 
            I continuously focus on improving my development skills and learning modern technologies.
          </p>

        </motion.div>
      </div>
    </section>
  );
};

export default About;
