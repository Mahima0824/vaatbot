import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { BsChatDots, BsCpu, BsLightningCharge, BsRobot, BsShieldCheck, BsGraphUp, BsArrowReturnRight } from "react-icons/bs";
import { FiActivity } from "react-icons/fi";
import BoldCopy from "../ui/bold-copy";
import Section from "../../layout/Section";
import { steps } from '../../data/mockdata.json';


const iconMap = {
  BsChatDots,
  BsCpu,
  BsLightningCharge,
  BsRobot,
  BsShieldCheck,
  BsGraphUp,
  BsArrowReturnRight,
  FiActivity
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15
    }
  }
};

export default function HowItWorks() {
  const [activeStep, setActiveStep] = React.useState(0);
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  React.useEffect(() => {
    if (isInView) {
      controls.start('show');
    }
  }, [isInView, controls]);

  const handleHover = (index) => {
    setActiveStep(index);
  };

  return (
    <Section ref={ref}>
      <div className="text-center mb-5">
        <BoldCopy text="How It Works" />
        <motion.p className="max-w-2xl mx-auto text-gray-400 sm:text-lg text-base"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Discover the simplicity behind our powerful solution
        </motion.p>
      </div>

      <motion.div className="relative py-16"
        variants={container}
        initial="hidden"
        animate={controls}
      >
        <div className="relative grid grid-cols-1  lg:grid-cols-3 gap-8 px-4">
          {/* Animated progress line */}
          <motion.div className="absolute left-1/2 top-5 hidden lg:block -translate-x-1/2 w-1/2 h-0.5 bg-gray-800 rounded-full z-0 overflow-hidden"
            initial={{ width: 0 }}
            whileInView={{ width: '70%' }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <motion.div className="h-full"
              initial={{ width: '0%' }}
              whileInView={{
                width: activeStep === 0 ? '33%' :
                  activeStep === 1 ? '66%' :
                    activeStep === 2 ? '100%' : '0%',
                background: activeStep === 0 ? 'linear-gradient(90deg, #5f5af7, #5f5af7)' :
                  activeStep === 1 ? 'linear-gradient(90deg, #a594fd, #a594fd)' :
                    'linear-gradient(90deg, #8B5CF6, #8B5CF6)'
              }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
            />
          </motion.div>

          {steps.map((step, idx) => {
                   const IconComponent = iconMap[step.icon];


            return (
              <motion.div
                className="relative flex flex-col items-center group"
                key={step.id}
                onMouseEnter={() => handleHover(idx)}
                onMouseLeave={() => handleHover(0)}
                variants={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
              >
                {/* Step number */}
                <motion.div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-2xl z-10 mb-8 border
        ${activeStep >= idx
                    ? idx === 0
                      ? 'border-primary/30 bg-gradient-to-br from-primary to-surface shadow-xl drop-shadow-xl backdrop-blur-xl'
                      : idx === 1
                        ? 'border-primary/30 bg-gradient-to-br from-secondary to-surface shadow-xl drop-shadow-xl backdrop-blur-xl'
                        : 'border-primary/30 bg-gradient-to-br from-accent to-surface shadow-xl drop-shadow-xl backdrop-blur-xl'
                    : 'border-gray-700 bg-gray-800 shadow-xl drop-shadow-xl backdrop-blur-xl'}`}
                  animate={{ scale: activeStep === idx ? 1.1 : 1 }}
                  transition={{ type: 'spring', stiffness: 500, damping: 15, duration: 0.5 }}
                >
                  <span className="drop-shadow-lg">{idx + 1}</span>
                </motion.div>

                {/* Card */}
                <motion.div
                  className={`relative p-8 rounded-2xl w-full backdrop-blur-sm shadow-2xl transition-all duration-500 group-hover:-translate-y-2 
          ${activeStep === idx
                      ? idx === 0
                        ? 'bg-gradient-to-br from-primary/40 to-surface/40 border-l-2 border-t-2 border-primary/30'
                        : idx === 1
                          ? 'bg-gradient-to-br from-secondary/40 to-surface/40 border-l-2 border-t-2 border-secondary/30'
                          : 'bg-gradient-to-br from-accent/40 to-surface/40 border-l-2 border-t-2 border-accent/30'
                      : 'bg-gray-800/50 border border-gray-700/60'}`}
                  whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    boxShadow: activeStep === idx
                      ? idx === 0
                        ? '0 20px 40px -10px rgba(139, 92, 246, 0.25)'
                        : idx === 1
                          ? '0 20px 40px -10px rgba(59, 130, 246, 0.25)'
                          : '0 20px 40px -10px rgba(16, 185, 129, 0.25)'
                      : '0 10px 25px -5px rgba(0, 0, 0, 0.1)'
                  }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  {/* Icon */}
                  <motion.div
                    className={`w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center text-3xl ${activeStep === idx
                      ? idx === 0
                        ? 'bg-primary/20 text-primary'
                        : idx === 1
                          ? 'bg-secondary/20 text-secondary'
                          : 'bg-accent/20 text-accent'
                      : 'bg-gray-700/50 text-white'
                      }`}
                    animate={{
                      scale: activeStep === idx ? 1.1 : 1,
                      rotate: activeStep === idx ? 5 : 0
                    }}
                    transition={{
                      duration: 0.6,
                      rotate: { repeat: Infinity, duration: 4, ease: 'easeInOut' }
                    }}
                  >
                    {IconComponent && (
                      <IconComponent className=" drop-shadow-md" />
                    )}
                  </motion.div>

                  {/* Title and features */}
                  <motion.div className="text-center space-y-4">
                    <motion.h3
                      className={`text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r ${idx === 0
                        ? 'from-primary to-surface'
                        : idx === 1
                          ? 'from-secondary to-surface'
                          : 'from-accent to-surface'
                        }`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        backgroundSize: activeStep === idx ? '200% 200%' : '100% 100%'
                      }}
                      transition={{
                        delay: 0.2,
                        duration: 0.6,
                        backgroundSize: { duration: 2, repeat: Infinity, repeatType: 'reverse' }
                      }}
                    >
                      {step.title}
                    </motion.h3>

                    <motion.p
                      className="text-gray-300 text-lg leading-relaxed"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.6 }}
                    >
                      {step.subtitle}
                    </motion.p>

                    <motion.ul
                      className="space-y-3 text-left mt-6"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ staggerChildren: 0.1, delayChildren: 0.4 }}
                    >
                      {step.features.map((feature, i) => (
                        <motion.li
                          className="flex items-start text-gray-300 text-base"
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4 }}
                        >
                          <span className={`inline-flex items-center justify-center w-5 h-5 rounded-full mr-3 mt-0.5 flex-shrink-0 ${idx === 0
                            ? 'bg-primary/20 text-primary'
                            : idx === 1
                              ? 'bg-secondary/20 text-secondary'
                              : 'bg-accent/20 text-accent'
                            }`}>
                            <svg className="w-2 h-2" fill="currentColor" viewBox="0 0 8 8">
                              <circle cx="4" cy="4" r="3" />
                            </svg>
                          </span>
                          <span className="leading-relaxed">{feature}</span>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </motion.div>
                </motion.div>
              </motion.div>
            );
          })}

        </div>
      </motion.div>
    </Section>
  );
}
