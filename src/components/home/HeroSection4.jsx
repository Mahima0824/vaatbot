import React from 'react';
import PixelStars from '../ui/PixelStars';
import { FaRobot } from 'react-icons/fa';
import Badge from '../ui/Badge';
import { PrimaryButton } from '../ui/Button';
import { motion } from 'framer-motion';

const HeroSection4 = () => {
  return (
    <div className="relative min-h-screen bg-surface text-white flex items-center justify-center overflow-hidden px-6 md:px-20 lg:px-32">
      {/* Stars + Blur Background */}
      <div className="section-banner z-10 absolute inset-0 w-full h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute inset-0 bg-surface/70 backdrop-blur-sm z-10">
        <PixelStars />
      </div>

      {/* Hero Content */}
      <div className="relative z-30 text-center max-w-4xl mx-auto">
        {/* Badge */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <Badge Icon={FaRobot} text="AI-Powered Intelligence" />
        </motion.div>

        {/* Heading */}
        <motion.h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mt-4 leading-tight" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 1 }}>
          Revolutionize Your Business with <span className="text-primary">Smart AI</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p className="mt-6 text-lg sm:text-xl text-white/80" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 1 }}>
          Automate workflows, boost customer experience, and make data-driven decisions faster — all powered by our intelligent AI assistant.
        </motion.p>

        {/* Supporting line */}
        <motion.p className="mt-4 text-md text-white/60"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 1 }}
        >
          From chatbots to analytics — we deliver AI you can trust.
        </motion.p>

        {/* CTA */}
        <motion.div className="mt-10"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <PrimaryButton size="lg" className="hover:shadow-[0_0_20px_4px_var(--tw-shadow-color)] shadow-primary transition">Request a Demo</PrimaryButton>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection4;
