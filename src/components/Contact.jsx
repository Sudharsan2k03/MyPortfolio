import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp, FaInstagram } from 'react-icons/fa';

const links = [
  {
    id: 1,
    child: <FaEnvelope size={30} />,
    href: 'mailto:sudharsanramesh747@gmail.com',
    style: 'hover:text-red-500',
    ariaLabel: 'Email'
  },
  {
    id: 2,
    child: <FaGithub size={30} />,
    href: 'https://github.com/Sudharsan2k03',
    style: 'hover:text-gray-400',
    ariaLabel: 'GitHub'
  },
  {
    id: 3,
    child: <FaLinkedin size={30} />,
    href: 'https://www.linkedin.com/in/rsudharsan03/',
    style: 'hover:text-blue-500',
    ariaLabel: 'LinkedIn'
  },
  {
    id: 4,
    child: <FaWhatsapp size={30} />,
    href: 'https://wa.me/9385781640',
    style: 'hover:text-green-500',
    ariaLabel: 'WhatsApp'
  },
  {
    id: 5,
    child: <FaInstagram size={30} />,
    href: 'https://www.instagram.com/rsudharsan003/',
    style: 'hover:text-pink-500',
    ariaLabel: 'Instagram'
  },
];

const Contact = () => {
  return (
    <section id="contact" className="w-full py-20 px-4 md:px-10 bg-slate-900 border-t border-slate-800">
      <div className="max-w-screen-xl mx-auto flex flex-col justify-center items-center w-full h-full pb-10">
        
        <motion.div
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="text-center pb-12"
        >
          <h2 className="text-4xl font-bold inline border-b-4 text-slate-200 border-blue-500 font-poppins text-center">
            Contact
          </h2>
          <p className="py-6 text-slate-400">Let's connect and create something meaningful together.</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card py-10 px-16 rounded-[40px] shadow-2xl shadow-blue-500/10 flex flex-wrap gap-10 justify-center items-center"
        >
          {links.map(({ id, child, href, style, ariaLabel }) => (
            <motion.a
              key={id}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={ariaLabel}
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className={`text-slate-300 transition-colors duration-300 ${style}`}
            >
              <div className="p-4 bg-slate-800 rounded-full shadow-lg border border-slate-700/50 hover:border-slate-500/50">
                {child}
              </div>
            </motion.a>
          ))}
        </motion.div>
        
        <div className="mt-20 text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Sudharsan R. All rights reserved.</p>
        </div>

      </div>
    </section>
  );
};

export default Contact;
