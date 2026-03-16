import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: 'home' },
    { id: 2, link: 'about' },
    { id: 3, link: 'skills' },
    { id: 4, link: 'projects' },
    { id: 5, link: 'experience' },
    { id: 6, link: 'education' },
    { id: 7, link: 'contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 w-screen max-w-full h-20 px-6 z-[100] flex justify-between items-center glass shadow-lg">
      {/* Left side: Logo */}
      <div className="flex-shrink-0">
        <h1 className="text-2xl font-bold font-poppins text-gradient cursor-pointer relative z-[101]">
          <Link onClick={() => setNav(false)} to="home" smooth duration={500}>SR</Link>
        </h1>
      </div>

      {/* Center/Desktop Navigation */}
      <ul className="hidden md:flex gap-8 relative z-[101]">
        {links.map(({ id, link }) => (
          <li key={id} className="capitalize font-medium text-slate-300 hover:text-blue-400 hover:scale-105 duration-200 cursor-pointer">
            <Link to={link} smooth duration={500} offset={-70}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      {/* Right side: Mobile Hamburger Button */}
      <button
        onClick={() => setNav(!nav)}
        aria-label="Toggle navigation menu"
        className="md:hidden flex items-center justify-center p-2 z-[101] text-slate-300 hover:text-white transition-colors cursor-pointer"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </button>

      {/* Mobile Menu Dropdown - Absolute positioning below navbar */}
      <AnimatePresence>
        {nav && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed top-20 left-0 w-full bg-[#0f172a] border-b border-slate-800 md:hidden z-[150] overflow-hidden shadow-2xl"
          >
            <ul className="flex flex-col items-center py-12 gap-8">
              {links.map(({ id, link }) => (
                <li
                  key={id}
                  className="w-full text-center"
                >
                  <Link
                    onClick={() => setNav(false)}
                    to={link}
                    smooth
                    duration={500}
                    offset={-70}
                    className="block py-4 text-2xl font-semibold text-slate-100 hover:text-blue-400 active:bg-blue-500/10 transition-all capitalize"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
