import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="h-screen w-full flex items-center justify-center p-4">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center text-center mt-20">

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-6xl font-bold text-white mb-4 tracking-wider">
            Sudharsan R
          </h2>
          <h3 className="text-xl sm:text-2xl font-light text-slate-300 mb-6">
            <span className="text-blue-400 font-medium">{'<'}</span>
            {'Full Stack Developer (MERN) & React Native Developer'}
            <span className="text-blue-400 font-medium">{' />'}</span>
          </h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-2xl sm:text-4xl font-semibold mb-8 text-gradient h-12"
        >
          <TypeAnimation
            sequence={[
              'MERN Stack Developer',
              2000,
              'React Native Developer',
              2000,
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            className="inline-block"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-slate-400 max-w-lg mx-auto text-lg mb-10 leading-relaxed"
        >
          Building scalable web and mobile applications with modern technologies.
          Turning complex problems into elegant, intuitive digital experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="https://drive.google.com/file/d/15b13pyiKbiwWqEN15-VnMPccmCvoggzB/view"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-3 rounded-full text-white font-medium bg-gradient-to-r from-blue-500 to-purple-600 hover:scale-105 transition-transform duration-300 shadow-lg shadow-blue-500/30 overflow-hidden"
          >
            <span className="relative z-10">Download Resume</span>
            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-purple-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
        </motion.div>

      </div>

      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>
    </section>
  );
};

export default Hero;
