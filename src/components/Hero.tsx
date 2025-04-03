import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Terminal, Code, Briefcase, Mail, ExternalLink, Github, Linkedin, } from 'lucide-react';

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);

  const skills = [
    "Java", "JavaScript","PHP", "Spring Boot", "Node.js", "Reactjs", "React Native"
  ];

  return (
    <section id="home" className="h-screen flex items-center justify-center relative bg-gray-900 overflow-hidden">
      {/* Animated background with interactive particles */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20 animate-gradient" />
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-500/20 rounded-full"
            animate={{
              x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
              y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="mb-8 relative"
        >
          <div className="relative">
            <Terminal className="w-20 h-20 text-blue-500 mx-auto" />
            <motion.div
              className="absolute inset-0"
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              <div className="w-full h-full rounded-full border-2 border-blue-500/30 border-dashed" />
            </motion.div>
          </div>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl font-bold text-white mb-6"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:via-purple-500 hover:to-blue-500 transition-all duration-500">
            Lourenço Monjane
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {skills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="px-4 py-2 bg-gray-800/50 rounded-full text-gray-300 text-sm backdrop-blur-sm border border-gray-700/50"
              >
                {skill}
              </motion.span>
            ))}
          </div>

          <p className="text-2xl md:text-3xl text-gray-300 mb-8 font-light">
            <span className="text-blue-400 font-normal">Desenvolvedor de Software</span>
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <div className="flex gap-4">
              <motion.a 
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full font-medium flex items-center gap-2 group"
              >
                <Code className="w-5 h-5" />
                Ver Projectos
                <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.a>
              <motion.a 
                href="mailto:lourencomonjane2@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gray-800 text-white rounded-full font-medium flex items-center gap-2 group hover:bg-gray-700"
              >
                <Mail className="w-5 h-5" />
                Email
                <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.a>
            </div>

            <div className="flex gap-4">
              <motion.a
                href="https://github.com/monjane10"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="p-2 bg-gray-800 rounded-full text-gray-400 hover:text-white hover:bg-gray-700"
              >
                <Github className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/louren%C3%A7o-monjane-159b27295?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: -5 }}
                className="p-2 bg-gray-800 rounded-full text-gray-400 hover:text-white hover:bg-gray-700"
              >
                <Linkedin className="w-6 h-6" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        whileHover={{ scale: 1.2 }}
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <ChevronDown className="text-white/50 w-8 h-8 hover:text-white/80 transition-colors" />
      </motion.div>
    </section>
  );
};

export default Hero;