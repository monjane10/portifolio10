import React, { useEffect, useState } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Server, Wrench, ChevronDown, ChevronUp, Info } from 'lucide-react';

const Skills = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const [expandedCategory, setExpandedCategory] = useState<number | null>(null);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const skillCategories = [
    {
      name: 'Frontend',
      icon: Code,
      color: 'from-blue-500 to-cyan-400',
      description: 'Building responsive and interactive user interfaces',
      skills: [
        { name: 'HTML/CSS', level: 85, description: 'Semantic HTML and modern CSS including Flexbox, Grid, and animations' },
        { name: 'JavaScript', level: 80, description: 'ES6+, DOM manipulation, async programming' },
        { name: 'Vue.js', level: 70, description: 'Component architecture, state management, Vue Router' },
        { name: 'React', level: 70, description: 'Hooks, Context API, Redux, Next.js' },
        { name: 'Livewire', level: 85, description: 'Real-time UI updates, dynamic interfaces' },
      ],
    },
    {
      name: 'Backend',
      icon: Server,
      color: 'from-purple-500 to-pink-500',
      description: 'Server-side development and database management',
      skills: [
        { name: 'PHP', level: 90, description: 'OOP, design patterns, modern PHP 7/8 features' },
        { name: 'Laravel', level: 96, description: 'Full-stack framework expertise, custom solutions' },
        { name: 'MySQL', level: 85, description: 'Database design, optimization, complex queries' },
        { name: 'RESTful APIs', level: 85, description: 'API design, authentication, documentation' },
      ],
    },
    {
      name: 'Tools & Others',
      icon: Wrench,
      color: 'from-green-500 to-emerald-500',
      description: 'Development tools and deployment technologies',
      skills: [
        { name: 'Git', level: 80, description: 'Version control system for tracking code changes and collaboration' },
        { name: 'PostMan', level: 75, description: 'API development and testing tool for building and testing APIs' },
        { name: 'Pusher', level: 70, description: 'Real-time messaging and notification service' },
        { name: 'Linux', level: 90, description: 'Operating system and command line interface skills' },
      ],
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        ease: "easeOut"
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      },
    },
  };

  return (
    <section id="skills" className="min-h-screen relative bg-gray-900 overflow-hidden py-20">
      {/* Animated background with gradient */}
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

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
              Technical Skills
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              variants={skillVariants}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-gray-700 hover:border-gray-600 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div 
                className="cursor-pointer"
                onClick={() => setExpandedCategory(expandedCategory === categoryIndex ? null : categoryIndex)}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg bg-gradient-to-br ${category.color}`}>
                      <category.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{category.name}</h3>
                  </div>
                  <motion.div
                    initial={false}
                    animate={{ rotate: expandedCategory === categoryIndex ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "anticipate" }}
                  >
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  </motion.div>
                </div>
              </div>

              <AnimatePresence mode="sync">
                {expandedCategory === categoryIndex && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ 
                      opacity: 1, 
                      height: 'auto',
                      transition: {
                        height: {
                          duration: 0.4,
                          ease: "easeOut"
                        },
                        opacity: {
                          duration: 0.25,
                          delay: 0.15
                        }
                      }
                    }}
                    exit={{ 
                      opacity: 0,
                      height: 0,
                      transition: {
                        height: {
                          duration: 0.4,
                          ease: "easeInOut"
                        },
                        opacity: {
                          duration: 0.25
                        }
                      }
                    }}
                    className="text-gray-400 mb-6"
                  >
                    {category.description}
                  </motion.p>
                )}
              </AnimatePresence>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: skillIndex * 0.1, ease: "easeOut" }}
                    className="group relative"
                    onMouseEnter={() => setHoveredSkill(`${categoryIndex}-${skillIndex}`)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <div className="flex justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                          {skill.name}
                        </span>
                        <Info className="w-4 h-4 text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      <span className="text-blue-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: skillIndex * 0.1, ease: "easeOut" }}
                        className={`h-full rounded-full bg-gradient-to-r ${category.color}`}
                      />
                    </div>
                    <AnimatePresence>
                      {hoveredSkill === `${categoryIndex}-${skillIndex}` && (
                        <motion.div
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          transition={{ 
                            duration: 0.2,
                            ease: "easeOut"
                          }}
                          className="mt-2 text-sm text-gray-400 bg-gray-800/90 p-2 rounded-md backdrop-blur-sm"
                        >
                          {skill.description}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;