import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { Briefcase, Calendar, Building, ChevronRight } from 'lucide-react';
import 'react-vertical-timeline-component/style.min.css';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      title: "Desenvolvedor Full Stack",
      company: "AjpContastech",
      date: "Fev,2024 - Jan, 2025",
      points: [
       // "Desenvolvi sistemas web usando React, HTML, CSS e JavaScript no front-end, Spring boot e Node.js no Backend.",
        //"Participei na criação e consumo de APIs.",
       // "Integrei bases de dados relacionais como MySQL e SQL Server e não relacionais como o MongoDB.",
       // "Participei de todas as etapas do desenvolvimento, deste a análise de requisitos até a implementação das aplicações.",
      ""
      ]
    },

    {
      title: "Desenvolvedor Front-End",
      company: "Freelancer",
      date: "2023 - Actual",
      points: [
        //"Crio Websites e Landing Pages responsivas, dinamicas  e interativas usando React, HTML, CSS e JavaScript",
        //"Integro sites com API externas, como WhatSapp, google Maps e Firebase.",
        //"Implemento fluxos de logion com JWT, autenticação OAuth e validação de dados no lado do cliente",
      ""
      ]
    }
  ];

  return (
    <section id="experience" className="min-h-screen relative bg-gray-900 overflow-hidden py-20">
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

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
              Experiência Professional
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </div>

        <VerticalTimeline lineColor="rgba(59, 130, 246, 0.2)">
          {experiences.map((exp, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element"
              contentStyle={{
                background: 'rgba(17, 24, 39, 0.8)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(75, 85, 99, 0.3)',
                borderRadius: '1rem',
                boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
              }}
              contentArrowStyle={{ borderRight: '7px solid rgba(17, 24, 39, 0.8)' }}
              date={exp.date}
              iconStyle={{ 
                background: 'linear-gradient(to right, #3B82F6, #8B5CF6)',
                color: '#fff',
                boxShadow: '0 0 0 4px rgba(59, 130, 246, 0.2)' 
              }}
              icon={<Briefcase />}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                    {exp.title}
                  </h3>
                </div>
                
                <div className="flex items-center gap-2 mb-4 text-gray-300">
                  <Building className="w-4 h-4" />
                  <h4 className="text-lg">{exp.company}</h4>
                </div>

                <div className="flex items-center gap-2 mb-4 text-gray-400">
                  <Calendar className="w-4 h-4" />
                  <span>{exp.date}</span>
                </div>

                <ul className="space-y-3">
                  {exp.points.map((point, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      className="flex items-start gap-2 text-gray-300 hover:text-gray-100 transition-colors"
                    >
                      <ChevronRight className="w-5 h-5 mt-1 text-blue-500" />
                      <span>{point}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </motion.div>
    </section>
  );
};

export default Experience;