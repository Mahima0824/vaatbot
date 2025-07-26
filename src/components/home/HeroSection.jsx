import React from 'react';
import PrimaryButton, { SecondaryButton } from '../ui/Button';
import { motion } from 'framer-motion';
import { FaRocket } from 'react-icons/fa';
import Badge from '../ui/Badge';
import { planets } from '../../data/mockdata.json';


export default function HeroSection() {
    return (
      <div className="relative min-h-screen z-10 bg-surface text-white flex items-center justify-center overflow-hidden px-6 md:px-20 lg:px-32">
  
        {/* Overlay */}
        <div className="absolute inset-0 z-0 bg-surface/70 backdrop-blur-sm"></div>
  
        {/* Gradient blobs */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute w-[600px] h-[600px] left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-primary/30 to-secondary/30 blur-3xl rounded-full animate-pulse"></div>
          <div className="absolute w-40 h-40 top-[70%] left-[60%] bg-gradient-to-r from-primary/20 to-transparent blur-xl rounded-full animate-bounce" style={{ animationDuration: '9s' }}></div>
          <div className="absolute w-32 h-32 top-[20%] right-[20%] bg-gradient-to-l from-secondary/20 to-transparent blur-xl rounded-full animate-bounce" style={{ animationDuration: '11s', animationDelay: '1.5s' }}></div>
        </div>
  
        {/* Hero layout */}
        <div className="relative z-10 grid grid-cols-1 min-h-screen xl:grid-cols-3 items-center w-full gap-16 py-20">
  
          {/* Left Text Content */}
          <motion.div className="space-y-6 text-center xl:text-left" initial={{opacity:0,x:-50}} whileInView={{opacity:1,x:0}} viewport={{ once: true }} transition={{duration:1}}>
            <Badge Icon={FaRocket} text="Next Generation AI Assistant" />
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight xl:text-left">
              Transform Your{" "} <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Business</span>
            </h1>
            <p className="text-lg text-white/80 max-w-md mx-auto xl:mx-0 xl:text-left text-center">Experience the future of AI-powered business solutions with our advanced technology.</p>
            <div className="flex flex-col sm:flex-row sm:justify-center xl:justify-start gap-4">
              <PrimaryButton size="lg">Get Started</PrimaryButton>
              <SecondaryButton size="lg">Learn More</SecondaryButton>
            </div>
          </motion.div>
  
          {/* Center Image */}
          <motion.div>
            <div className=" bottom-0 relative  left-1/2 -translate-x-1/2  xl:absolute">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 blur-2xl rounded-full -z-10"></div>
              <motion.img initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 ,delay:0.5}} src="/images/hero.png" alt="AI Technology" className="w-full h-full " />
            </div>
          </motion.div>
  
          {/* Right Feature Cards */}
          <motion.div className="space-y-6" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            {[
              {
                title: "AI-Powered Solutions",
                desc: "Leverage cutting-edge AI to streamline your business operations.",
              },
              {
                title: "24/7 Support",
                desc: "Our team is always here to assist with any queries.",
              },
              {
                title: "Easy Integration",
                desc: "Integrate with your existing tools effortlessly.",
              },
            ].map((item, i) => (
              <motion.div key={i} whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }} className="p-6 bg-white/5 backdrop-blur-md ml-10 rounded-2xl border border-white/10">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-white/70 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
  
        {/* Planet Animation - Same as your original, left untouched */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          <div className="relative">
            <div className="absolute inset-0 w-32 h-32 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full blur-2xl animate-pulse -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"></div>
            <div className="w-32 h-32 bg-gradient-to-br from-yellow-300 via-orange-400 to-red-500 rounded-full shadow-[0_0_60px_15px_rgba(255,204,0,0.6)] animate-pulse relative z-10"></div>
            <div className="absolute inset-0 w-16 h-16 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-yellow-300 via-orange-400 to-red-500 rounded-full animate-ping opacity-30 z-10"></div>
          </div>
          {planets.map((planet) => (
            <div key={planet.name} className="absolute animate-spin" style={{
                width: `${planet.distance * 2.5}px`,
                height: `${planet.distance * 2.5}px`,
                animationDuration: `${planet.speed}s`,
              }}
            >
              <div className="absolute border border-white/20 border-dashed rounded-full" style={{
                  width: `${planet.distance * 2.5}px`,
                  height: `${planet.distance * 2.5}px`,
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
              />
              <div className={`absolute ${planet.color} rounded-full shadow-2xl`} style={{
                  width: `${planet.size * 1.2}px`,
                  height: `${planet.size * 1.2}px`,
                  top: '50%',
                  left: '50%',
                  transform: `translate(-50%, -50%) translateX(${planet.distance * 1.24}px)`,
                  boxShadow: `0 0 ${planet.size * 2}px rgba(255,255,255,0.4)`,
                }}
              >
                <div className={`absolute inset-0 ${planet.color} rounded-full blur-sm opacity-60`} />
                <div className="absolute inset-1 bg-gradient-to-br from-white/20 to-transparent rounded-full" />
              </div>
            </div>
          ))}
        </div>
  
        {/* Floating sparkles */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {[...Array(25)].map((_, i) => (
            <div key={i} className="absolute w-1 h-1 bg-white/30 rounded-full animate-float" style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${8 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>
      </div>
    );
  }
  