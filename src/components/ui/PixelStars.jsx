import React from "react";
import { motion } from "framer-motion";

// Static star generator
const generateStarShadow = (count, color, alpha = 1) => {
  const shadows = [];
  for (let i = 0; i < count; i++) {
    const x = Math.floor(Math.random() * 2000);
    const y = Math.floor(Math.random() * 2000);
    const opacity = Math.random() * alpha; // 0 to alpha
    const hexAlpha = Math.floor(opacity * 255).toString(16).padStart(2, '0');
    shadows.push(`${x}px ${y}px ${color}${hexAlpha}`);
  }
  return shadows.join(", ");
};

// Blinking stars (5–10 random stars)
const BlinkingStars = ({ count = 100 }) => {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => {
        const left = `${Math.random() * 100}%`;
        const top = `${Math.random() * 100}%`;
        const size = Math.random() * 2 + 3; // 1px to 3px
        const delay = Math.random() * 5;
        const duration = 1 + Math.random() * 5;

        return (
          <motion.div className="absolute bg-white rounded-full" key={i}
            style={{
              left,
              top,
              width: `${size}px`,
              height: `${size}px`,
              opacity: 1,
            }}
            animate={{ opacity: [0.2, 1, 0.2], scale: [1, 1.2, 1] }}
            transition={{
              duration,
              delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        );
      })}
    </>
  );
};

const PixelStars = () => {
  return (
    <div className="absolute inset-0 z-20 opacity-80 overflow-hidden pointer-events-none">
      {/* Static star fields */}
      <motion.div className="absolute w-[2px] h-[2px] bg-transparent"
        style={{
          boxShadow: generateStarShadow(120, "#ffffff", 0.4),
        }}
        animate={{ y: ["0px", "-2000px"] }}
        transition={{
          repeat: Infinity,
          duration: 150,
          ease: "linear",
        }}
      />

      <motion.div className="absolute w-[2px] h-[2px] bg-transparent"
        style={{
          boxShadow: generateStarShadow(100, "#ffffff", 0.7),
        }}
        animate={{ y: ["0px", "-2000px"] }}
        transition={{
          repeat: Infinity,
          duration: 100,
          ease: "linear",
        }}
      />

      <motion.div className="absolute w-[2px] h-[2px] bg-transparent"
        style={{
          boxShadow: generateStarShadow(60, "#ffffff", 1),
        }}
        animate={{ y: ["0px", "-2000px"] }}
        transition={{
          repeat: Infinity,
          duration: 80,
          ease: "linear",
        }}
      />

      {/* Add blinking stars on top */}
      <BlinkingStars count={20} />
    </div>
  );
};

export default PixelStars;
