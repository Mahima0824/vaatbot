import React from 'react';
import { motion } from 'framer-motion';
import { FaTools, FaHammer } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Spotlight } from '../components/ui/spotlight-new';

const UnderMaintence = () => {
  return (
    <div className="min-h-screen w-full relative overflow-hidden flex items-center justify-center p-4">
      <Spotlight />
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-4xl mx-auto text-center">
        {/* Maintenance Container */}
        <div className="relative bg-gradient-to-br from-primary/80 to-surface/80 p-8 rounded-2xl shadow-xl border border-white/10">
          {/* Maintenance Animation */}
          <motion.div className="mb-8" initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.8 }}>
            <div className="flex justify-center items-center gap-4 text-6xl">
              <motion.div animate={{ rotate: [0, 360, 0], }} transition={{ duration: 2, repeat: Infinity }}>
                <FaTools className="text-yellow-400" />
              </motion.div>
              <motion.div animate={{ scale: [1, 1.1, 1], }} transition={{ duration: 1, repeat: Infinity }}>
                <FaHammer className="text-orange-400" />
              </motion.div>
          </div>
          </motion.div>

          {/* Maintenance Message */}
          <motion.h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-400 mb-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            Under Maintenance
          </motion.h1>

          <motion.p className="text-gray-300 text-lg mb-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            We're currently performing scheduled maintenance. We'll be back online shortly.
          </motion.p>

          {/* Progress Bar */}
          <motion.div className="w-full mb-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
            <div className="h-2 bg-gray-600 rounded-full">
              <motion.div initial={{ width: '0%' }} animate={{ width: '100%' }} transition={{ duration: 2, repeat: Infinity, ease: 'linear' }} className="h-full bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full" />
            </div>
          </motion.div>

          {/* Action Button */}
          <motion.div className="flex justify-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
            <Link to="/" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-yellow-400 to-orange-400 text-white font-medium hover:opacity-90 transition duration-300">
              <motion.span whileHover={{ scale: 1.1 }} className="text-lg">Check Status</motion.span>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default UnderMaintence;
