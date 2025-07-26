import React, { useRef, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Spotlight } from '../components/ui/spotlight-new';

// 3D Background Component with more visible white particles
function Particles() {
  const points = useRef();
  const count = 100; // Slightly fewer particles for better visibility

  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    for (let i = 0; i < count * 3; i += 3) {
      // Position particles in a sphere
      const radius = 5 + Math.random() * 10;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      positions[i] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i + 2] = radius * Math.cos(phi);

      // Add some color variation
      colors[i] = 1; // R
      colors[i + 1] = 1; // G
      colors[i + 2] = 1; // B
    }

    const attributes = new THREE.BufferAttribute(positions, 3);
    attributes.setUsage(THREE.DynamicDrawUsage);
    return { positions: attributes, colors: new THREE.BufferAttribute(colors, 3) };
  }, [count]);

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.x += 0.0005;
      points.current.rotation.y += 0.0008;

      // Add subtle pulsing effect
      const time = state.clock.getElapsedTime();
      points.current.material.size = 0.03 * (1 + Math.sin(time) * 0.2);
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" {...particles.positions} />
        <bufferAttribute attach="attributes-color" {...particles.colors} />
      </bufferGeometry>
      <pointsMaterial size={0.1} sizeAttenuation={true} vertexColors transparent opacity={0.8} alphaTest={0.01} />
    </points>
  );
}

function ThreeBackground() {
  return (
    <div className="absolute inset-0 -z-10 bg-surface">
      <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
        <Particles />
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#ffff07" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ffff07" />
      </Canvas>
    </div>
  );
}

const Loader = () => {
  // Animation variants for the container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-surface/50 relative overflow-hidden">
      <ThreeBackground />
      <Spotlight />
      <motion.div className="relative bg-surface/60 z-10 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-white/10" style={{ transformStyle: 'preserve-3d', transform: 'perspective(1000px) rotateX(5deg)', }} variants={containerVariants} initial="hidden" animate="visible">
        {/* Animated border effect */}
        <motion.div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-primary to-secondary opacity-75 blur" initial={{ scale: 0.95, opacity: 0 }} animate={{
          scale: 1,
          opacity: 0.7,
          rotate: [0, 5, -5, 0]
        }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />

        <motion.div className="relative" variants={itemVariants}>
          {/* Bot icon with advanced pulse effect */}
          <motion.div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary via-secondary to-primary flex items-center justify-center mx-auto mb-8 shadow-xl relative overflow-hidden" variants={itemVariants}>
            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
            <motion.div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear"
              }}
            />
            <svg className="w-12 h-12 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </motion.div>

          {/* Title with animated gradient text */}
          <motion.h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-8 text-center" variants={itemVariants}>
            VaatBot
            <motion.span className="ml-2" variants={itemVariants}>
              is thinking
            </motion.span>
          </motion.h3>

          {/* Modern typing indicator */}
          <motion.div className="flex justify-center space-x-2" variants={itemVariants}>
            {[0, 1, 2].map((i) => (
              <motion.div key={i} className="w-3 h-10 bg-gradient-to-b from-primary to-secondary rounded-full" initial={{ scaleY: 0.3 }} animate={{ scaleY: [0.3, 1, 0.3], y: [0, -5, 0] }} transition={{
                duration: 1.2,
                delay: i * 0.15,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut"
              }}
              />
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Loader;