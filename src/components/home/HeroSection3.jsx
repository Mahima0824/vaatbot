import { motion, useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';
import { FaArrowRight, FaRocket } from 'react-icons/fa';

const FloatingParticles = ({ count = 50 }) => {
  return (
    <div className="fixed inset-0 z-40 overflow-hidden pointer-events-none">
      {[...Array(count)].map((_, i) => {
        const size = Math.random() * 5 + 2;
        const duration = Math.random() * 20 + 20;
        const delay = Math.random() * 10;
        const startX = Math.random() * 100;
        const endX = startX + (Math.random() - 0.5) * 40;

        return (
          <motion.div key={i} className="absolute rounded-full bg-white/30" style={{
            width: `${size}px`,
            height: `${size}px`,
            boxShadow: '0 0 15px 2px rgba(255,255,255,0.5)'
          }}
            initial={{
              x: `${startX}vw`,
              y: `${Math.random() * 100}vh`,
              opacity: 0,
              scale: 0.5
            }}
            animate={{
              y: ['0vh', '100vh'],
              x: [`${startX}vw`, `${endX}vw`],
              opacity: [0, 0.8, 0],
              scale: [0.5, 1.2, 0.5]
            }}
            transition={{
              duration: duration,
              repeat: Infinity,
              ease: 'linear',
              delay: delay
            }}
          />
        );
      })}
    </div>
  );
};

const HeroSection3 = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start('visible');
  }, [controls]);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center justify-center px-6 md:px-10 bg-surface z-0">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-primary)/5%,transparent_70%)]" />
      <FloatingParticles />

      <div className="max-w-7xl mx-auto flex flex-col-reverse xl:grid xl:grid-cols-2 items-center gap-12 xl:gap-24">

        {/* Left Content */}
        <motion.div variants={container} initial="hidden" whileInView="visible" animate={controls} className="text-center xl:text-left order-2 xl:order-1 z-10 max-w-2xl">
          <motion.div variants={item} className="inline-block mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] backdrop-blur-sm">
              <motion.span animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }} className="h-2 w-2 rounded-full bg-primary" />
              <span className="text-sm font-medium text-white/70 tracking-wide">AI Assistant</span>
            </div>
          </motion.div>

          <motion.h1 variants={item} className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
            Supercharge Your Team with{' '}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-primary via-white to-secondary bg-clip-text text-transparent">AI Conversations</span>
              <motion.span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary rounded-full" initial={{ scaleX: 0, originX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} />
            </span>
          </motion.h1>
          <motion.p className="text-lg md:text-xl text-white/60 mb-8 max-w-xl mx-auto xl:mx-0" variants={item}>
            From customer service to lead generation — automate it all with AI.
          </motion.p>

          <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 justify-center xl:justify-start">
            <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-full text-white font-medium flex items-center gap-2 group">
              Get Started Free
              <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="inline-block">
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </motion.span>
            </motion.button>
            <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="px-8 py-4 bg-white/5 border border-white/10 rounded-full text-white font-medium flex items-center gap-2 backdrop-blur-sm">
              <FaRocket className="text-primary" />See Demo</motion.button>
          </motion.div>
        </motion.div>

        {/* Right Visuals */}
        <motion.div variants={container} initial="hidden" animate={controls} className="relative w-full order-1 xl:order-2 flex items-center justify-center gap-6">
          {/* Animated Circles */}
          <motion.div className="absolute w-[120%] h-[120%]" variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { duration: 1 }
            }
          }}
          >
            {[...Array(4)].map((_, i) => (
              <motion.div key={i} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" style={{ width: `${100 + i * 30}%`, height: `${100 + i * 30}%`, }} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: [0.1, 0.05, 0.1], scale: [0.8, 1, 0.8], }} transition={{ duration: 8 + i * 2, repeat: Infinity, ease: 'easeInOut', }} />
            ))}
          </motion.div>

          {/* Human Avatar */}
          <motion.div variants={item} className="relative xl:absolute xl:-left-[8%] xl:top-1/2 xl:-translate-y-1/2 z-10 flex justify-center xl:justify-start">
            <div className="relative">
              <motion.img src="/images/avatar-human.png" alt="Human" className="w-64 sm:w-80 md:w-96 object-contain drop-shadow-2xl" />
              <motion.div className="absolute -top-0 sm:-top-8 lg:-top-16 left-1/2 bg-white/5 backdrop-blur-sm rounded-2xl md:p-4 p-2 border border-white/10 shadow-lg" initial={{ scale: 0, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0, transition: { delay: 0.8, duration: 0.5 } }}>
                <div className="text-white md:text-sm text-xs">Hello AI!</div>
                <div className="absolute -bottom-2 left-6 sm:w-4 sm:h-4 w-2 h-2 bg-white/5 backdrop-blur-sm border-l border-b border-white/10 transform rotate-45" />
              </motion.div>
            </div>
          </motion.div>

          {/* AI Avatar */}
          <motion.div variants={item} className="relative xl:absolute xl:-right-[8%] xl:top-1/2 xl:-translate-y-1/2 z-10 flex justify-center xl:justify-end">
            <div className="relative">
              <motion.img src="/images/avatar-ai.png" alt="AI" className="w-64 sm:w-80 md:w-96 object-contain drop-shadow-2xl" />
              <motion.div className="absolute -top-12 sm:-top-16 right-1/2 bg-primary/20 backdrop-blur-sm rounded-2xl md:p-4 p-2 border border-primary/30 shadow-lg" initial={{ scale: 0, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0, transition: { delay: 1.2, duration: 0.5 } }}>
                <div className="text-white md:text-sm text-xs">How can I help you today?</div>
                <div className="absolute -bottom-2 right-6 sm:w-4 sm:h-4 w-2 h-2 bg-primary/20 backdrop-blur-sm border-r border-b border-primary/30 transform rotate-45" />
              </motion.div>
            </div>
          </motion.div>

          {/* Animated Lines */}
          <motion.div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-32 bg-gradient-to-b from-primary/30 to-transparent" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 128, transition: { delay: 0.6, duration: 1 } }} />
          <motion.div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" initial={{ opacity: 0, width: 0 }} animate={{ opacity: 1, width: 128, transition: { delay: 0.8, duration: 1 } }} />

          {/* Glowing Center Orb */}
          <motion.div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white shadow-[0_0_20px_10px_rgba(59,130,246,0.3)]" initial={{ scale: 0, opacity: 0 }} animate={{
            scale: [0, 1.5, 1],
            opacity: [0, 0.8, 1],
            boxShadow: [
              '0 0 10px 5px rgba(59,130,246,0.1)',
              '0 0 20px 10px rgba(59,130,246,0.3)',
              '0 0 30px 15px rgba(59,130,246,0.1)'
            ]
          }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: 'reverse',
              delay: 1
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection3;
