import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaClock } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Spotlight } from '../components/ui/spotlight-new';

const ComingSoon = () => {
  const targetDate = new Date('2025-10-01T00:00:00').getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });

      if (distance < 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen w-full relative overflow-hidden flex items-center justify-center p-4">
      <Spotlight />
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-4xl mx-auto text-center">
        {/* Coming Soon Container */}
        <div className="relative bg-gradient-to-br from-primary/80 to-surface/80 p-8 rounded-2xl shadow-xl border border-white/10">
          {/* Rocket Animation */}
          <motion.div className="mb-8" initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.8 }}>
            <div className="flex justify-center items-center gap-4 text-6xl">
              <motion.div animate={{ y: [-10, 10, -10] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
                <FaRocket className="text-purple-400" />
              </motion.div>
              <motion.div animate={{ rotate: [0, 360, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                <FaClock className="text-pink-400" />
              </motion.div>
            </div>
          </motion.div>

          {/* Coming Soon Message */}
          <motion.h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 mb-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>Coming Soon</motion.h1>

          <motion.p className="text-gray-300 text-lg mb-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            We're working hard to launch our amazing new features. Stay tuned!
          </motion.p>

          <div className="bg-white/10 p-8 mb-8 rounded-2xl shadow-lg">
            <div className="grid grid-cols-4 gap-4 text-center">
              <div>
                <h2 className="text-4xl font-bold text-primary">{timeLeft.days}</h2>
                <p className="text-sm text-base-content">Days</p>
              </div>
              <div>
                <h2 className="text-4xl font-bold text-primary">{timeLeft.hours}</h2>
                <p className="text-sm text-base-content">Hours</p>
              </div>
              <div>
                <h2 className="text-4xl font-bold text-primary">{timeLeft.minutes}</h2>
                <p className="text-sm text-base-content">Minutes</p>
              </div>
              <div>
                <h2 className="text-4xl font-bold text-primary">{timeLeft.seconds}</h2>
                <p className="text-sm text-base-content">Seconds</p>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <motion.div className="flex justify-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
            <Link to="/" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-purple-400 to-pink-400 text-white font-medium hover:opacity-90 transition duration-300">
              <motion.span whileHover={{ scale: 1.1 }} className="text-lg">Join Waitlist</motion.span>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ComingSoon;
