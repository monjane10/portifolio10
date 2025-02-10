import React from 'react';
import { motion } from 'framer-motion';

const CreativeLoader = () => {
  const orbitRadius = 40;
  const numParticles = 6;
  
  // Generate particles positioned in a circle
  const particles = Array.from({ length: numParticles }).map((_, i) => {
    const angle = (i * 2 * Math.PI) / numParticles;
    const x = Math.cos(angle) * orbitRadius;
    const y = Math.sin(angle) * orbitRadius;
    return { x, y };
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 flex flex-col items-center justify-center bg-gray-900 z-50"
    >
      {/* Main Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl text-white font-bold mb-12 text-center px-4"
      >
        <motion.span
          animate={{ 
            color: ['#60A5FA', '#34D399', '#F87171', '#60A5FA'],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          Bem-vindo ao meu Portfólio
        </motion.span>
      </motion.h1>

      {/* Central rotating cube */}
      <div className="relative w-32 h-32">
        <motion.div
          animate={{ 
            rotateY: 360,
            rotateX: 360,
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }}
          className="relative w-full h-full"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Floating particles */}
          {particles.map((particle, index) => (
            <motion.div
              key={index}
              className="absolute w-3 h-3 rounded-full bg-blue-400"
              animate={{
                x: [particle.x, -particle.x, particle.x],
                y: [particle.y, -particle.y, particle.y],
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.2,
                ease: "easeInOut",
              }}
            />
          ))}

          {/* Central cube faces */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl opacity-80"
            style={{
              transform: "translateZ(16px)",
              backdropFilter: "blur(8px)",
            }}
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-green-500 to-blue-500 rounded-xl opacity-80"
            style={{
              transform: "rotateY(90deg) translateZ(16px)",
              backdropFilter: "blur(8px)",
            }}
          />
        </motion.div>
      </div>

      {/* Loading text with typing effect */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-12 text-center"
      >
        <motion.p className="text-lg text-gray-300">
          {["A sua experiência ", "criativa está prestes a começar!"].map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: i * 0.5,
                repeat: Infinity,
                repeatDelay: 2,
              }}
              className="inline-block mx-1"
            >
              {word}
            </motion.span>
          ))}
        </motion.p>
      </motion.div>

      {/* Progress bar */}
      <motion.div
        className="w-48 h-1 mt-8 bg-gray-700 rounded-full overflow-hidden"
      >
        <motion.div
          className="h-full bg-blue-500"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{
            duration: 2.5,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default CreativeLoader;