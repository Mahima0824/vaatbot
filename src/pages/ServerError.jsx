import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCloud, FaServer } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Spotlight } from '../components/ui/spotlight-new';

const ServerError = () => {
  return (
    <div className="min-h-screen w-full relative overflow-hidden flex items-center justify-center p-4">
      <Spotlight />
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-4xl mx-auto text-center">
        {/* Error Container */}
        <div className="relative bg-gradient-to-br from-primary/80 to-surface/80 p-8 rounded-2xl shadow-xl border border-white/10">
          {/* Error Animation */}
          <motion.div className="mb-8" initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.8 }}>
            <div className="flex justify-center items-center gap-4 text-6xl">
              <motion.div animate={{
                rotate: [0, 360, 0],
              }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <FaCloud className="text-blue-400" />
              </motion.div>
              <motion.div animate={{
                scale: [1, 1.1, 1],
              }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <FaServer className="text-red-400" />
              </motion.div>
            </div>
          </motion.div>

          {/* Error Message */}
          <motion.h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-blue-400 mb-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>Server Error</motion.h1>
          <motion.p className="text-gray-400 text-lg mb-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            Our servers are experiencing technical difficulties. Please try again later.
          </motion.p>

          {/* Action Button */}
          <motion.div className="flex justify-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
            <Link to="/" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-red-400 to-blue-400 text-white font-medium hover:opacity-90 transition duration-300">
              <motion.span whileHover={{ scale: 1.1 }} className="text-lg">Go Home</motion.span>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ServerError;
