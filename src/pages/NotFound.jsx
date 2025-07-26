import React from 'react';
import { motion } from 'framer-motion';
import { FaQuestionCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Spotlight } from '../components/ui/spotlight-new';

const NotFound = () => {
  return (
    <div className="min-h-screen w-full relative overflow-hidden flex items-center justify-center p-4">
      <Spotlight />
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-4xl mx-auto text-center">
        {/* 404 Container */}
        <div className="relative bg-gradient-to-br from-red-400/20 to-pink-800/20 p-8 rounded-2xl shadow-xl border border-white/10">
          {/* Error Animation */}
          <motion.div className="mb-8" initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.8 }}>
            <div className="flex justify-center items-center gap-4 text-6xl">
              <motion.div animate={{ rotate: [0, 360, 0], }} transition={{ duration: 2, repeat: Infinity }}>
                <FaQuestionCircle className="text-red-400" />
              </motion.div>
            </div>
          </motion.div>

          {/* Error Message */}
          <motion.h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-pink-400 mb-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>404 - Page Not Found</motion.h1>
          <motion.p className="text-gray-300 text-lg mb-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>The page you're looking for doesn't exist or has been moved.</motion.p>

          {/* Helpful Links */}
          <motion.div className="mb-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
            <div className="flex justify-center gap-4">
              <Link to="/" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-red-400 to-pink-400 text-white font-medium hover:opacity-90 transition duration-300">
                <motion.span whileHover={{ scale: 1.1 }} className="text-lg">Go Home</motion.span>
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/10 text-white font-medium hover:bg-white/20 transition duration-300">
                <motion.span whileHover={{ scale: 1.1 }} className="text-lg">Contact Us</motion.span>
              </Link>
            </div>
          </motion.div>

          {/* Search Box */}
          <motion.div className="mb-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
            <div className="relative">
              <input type="text" placeholder="Search our website..." className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-400" />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-red-400 text-white px-4 py-2 rounded-lg hover:bg-red-500 transition duration-300">Search</button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;
