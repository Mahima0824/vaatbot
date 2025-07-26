
import { useMotionValue, motion, useMotionTemplate, AnimatePresence } from "framer-motion";
import React, { useState, useRef, useEffect } from "react";
import { CanvasRevealEffect } from "./canvas-reveal-effect";
import { cn } from "../../lib/utils";

export const CardSpotlight = ({
  children,
  radius = 350,
  color = "#7c3aed",
  className,
  padding = true,
  ...props
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const cardRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (cardRef.current) {
      setDimensions({
        width: cardRef.current.offsetWidth,
        height: cardRef.current.offsetHeight
      });
    }
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const [isHovering, setIsHovering] = useState(false);
  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);
  return (
    <div
      ref={cardRef}
      className={cn(
        "group/spotlight relative rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800",
        "border border-gray-700/50 hover:border-primary/30 transition-all duration-500",
        className,
        padding ? 'p-8' : 'p-0'
      )}
      style={{
        '--mouse-x': mouseX,
        '--mouse-y': mouseY,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}>

      {/* Gradient Border Effect */}
      <div className="absolute inset-0 rounded-2xl p-[1px] pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/5 to-primary/20 opacity-0 group-hover/spotlight:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Animated Spotlight */}
      <motion.div
        className="pointer-events-none absolute z-0 -inset-px rounded-md opacity-0 transition duration-300 group-hover/spotlight:opacity-100"
        style={{
          backgroundColor: color,
          maskImage: useMotionTemplate`
            radial-gradient(
              ${radius}px circle at ${mouseX}px ${mouseY}px,
              white,
              transparent 80%
            )
          `,
        }}>
        {isHovering && (
          <CanvasRevealEffect
            animationSpeed={5}
            containerClassName="bg-transparent absolute inset-0 pointer-events-none"
            colors={[
              [59, 130, 246],
              [139, 92, 246],
            ]}
            dotSize={3} />
        )}
      </motion.div>
      {children}
    </div>
  );
};
