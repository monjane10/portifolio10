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
      description: 'A desenvolvimento Frontend é o coração da construção de interfaces intuitivas e responsivas. Trabalhando com as tecnologias mais atuais, me concentro em criar experiências de usuário fluidas e de alto desempenho, garantindo a interação perfeita entre o usuário e a aplicação. Confira as tecnologias que utilizo:',
      skills: [
        { name: 'React.js', level: 85, description: 'Utilizo React.js para criar interfaces dinâmicas e interativas, aproveitando seu poder de componentes reutilizáveis e sua capacidade de gerenciar o estado da aplicação. Tenho experiência em hooks, Context API, roteamento com React Router, além de integração com APIs para buscar dados em tempo real. A biblioteca me permite construir aplicações web rápidas e eficientes, como dashboards e plataformas interativas.' },
        { name: 'React Native', level: 80, description: 'Com React Native, desenvolvo aplicações móveis nativas para iOS e Android com um único código-base. Tenho experiência em integrar APIs, gerenciar o estado da aplicação e otimizar o desempenho para garantir que os aplicativos funcionem de maneira fluida. Utilizo a flexibilidade do React Native para criar experiências móveis envolventes e com boa performance.' },
        { name: 'Tailwind Css', level: 70, description: 'Tailwind CSS é uma ferramenta poderosa para criar interfaces personalizadas e responsivas. Com ela, consigo criar designs de forma rápida e eficiente, utilizando utilitários para estilizar diretamente no HTML. Embora minha experiência com Tailwind ainda esteja em crescimento, já consigo implementar layouts responsivos e estilizar componentes de forma eficaz.' },
        { name: 'Material UI', level: 70, description: 'Material UI é uma biblioteca de componentes React que me permite construir interfaces modernas e consistentes. Já usei para construir desde formulários simples até layouts complexos, aproveitando a documentação e componentes prontos para acelerar o desenvolvimento. Continuo aprimorando minha capacidade de customizar os temas e ajustar o design conforme as necessidades do projeto.' },
        { name: 'HTML/CSS/Javascript', level: 85, description: 'Com HTML, CSS e JavaScript, construo as bases das interfaces web. Tenho ampla experiência em criar layouts responsivos, utilizando técnicas como grid, flexbox, media queries e animações. Além disso, sou proficiente em JavaScript, usando-o para adicionar interatividade e lógica às páginas, garantindo uma experiência de usuário fluida e intuitiva.' },
        
      ],
    },
    {
      name: 'Backend',
      icon: Server,
      color: 'from-purple-500 to-pink-500',
      description: 'O Backend é a parte do desenvolvimento focada na construção de servidores, gerenciamento de banco de dados e lógica de aplicação. Eu sou responsável por criar a infraestrutura que suporta as funcionalidades e dados que os usuários veem no frontend. Aqui estão as principais tecnologias que utilizo:',
      skills: [
        { name: 'Spring Boot', level: 90, description: 'Utilizo o Spring Boot para desenvolver aplicações Java robustas e escaláveis, com foco em APIs RESTful e integração com bancos de dados. Tenho experiência com a criação de microserviços, configuração de segurança e implementações de testes automatizados. O Spring Boot facilita a construção de aplicações rápidas e de alto desempenho, o que tem sido um diferencial nos meus projetos.' },
        { name: 'Node.js', level: 75, description: 'Trabalhei com Node.js para construir servidores web e APIs, especialmente para aplicações em tempo real. Utilizo o Node.js por sua capacidade de lidar com múltiplas requisições simultâneas de forma eficiente. Tenho experiência com frameworks como Express.js, além de implementar autenticação de usuários, manipulação de dados e integração com bancos de dados.' },
        { name: 'MySQL', level: 85, description: 'MySQL é a minha principal ferramenta para gerenciamento de banco de dados relacional. Tenho ampla experiência em criação e manutenção de esquemas de dados, consultas complexas (SQL) e otimização de performance. Gerencio transações, backups e segurança, além de integrar MySQL com aplicações backend para garantir a consistência e integridade dos dados.' },
        { name: 'RESTful APIs', level: 85, description: 'Sou especializado em criar APIs RESTful, que são a espinha dorsal de muitas aplicações modernas. Utilizo o design de APIs REST para garantir que as APIs sejam escaláveis, fáceis de manter e eficientes em termos de desempenho. Tenho experiência com as melhores práticas, como versionamento de APIs, autenticação via tokens e integração com front-end e serviços externos.' },
        { name: 'Express.js', level: 70, description: 'Express.js é o framework que uso para construir servidores e APIs web robustas em Node.js. Ele facilita a criação de rotas, middleware, e integração com outras tecnologias, tornando o desenvolvimento de backend mais rápido e organizado. Tenho experiência em construir APIs RESTful com Express, manipulação de rotas, autenticação de usuários com JWT e integração de serviços externos.' },
      ],
    },
    {
      name: 'Ferramentas & Outros',
      icon: Wrench,
      color: 'from-green-500 to-emerald-500',
      description: 'Ferramentas de desenvolvimento',
      skills: [
        { name: 'Git', level: 80, description: 'Git é a ferramenta fundamental de controle de versão que utilizo em todos os meus projetos de desenvolvimento. Com um bom domínio da ferramenta, consigo gerenciar versões de código, realizar merges e resolver conflitos com facilidade. Essa habilidade tem sido essencial para colaborar com equipes de desenvolvimento em projetos de código aberto e privados.' },
        { name: 'GitHub', level: 90, description: 'O GitHub é onde hospedo e gerencio meus projetos de código. Eu utilizo a plataforma para versionamento, revisão de código e colaboração em equipe. Tenho experiência com GitHub Actions, pull requests e gerenciamento de repositórios. É uma ferramenta essencial no meu fluxo de trabalho para integração contínua e entrega contínua (CI/CD).' },
        { name: 'PostMan', level: 75, description: 'O Postman tem sido uma ferramenta essencial no meu processo de testes e integração de APIs. Tenho experiência em realizar testes manuais e automáticos de endpoints RESTful, além de configurar e rodar coleções de testes para garantir que as APIs estão funcionando corretamente. É uma ferramenta que utilizo frequentemente para garantir que a comunicação entre serviços esteja sendo realizada de forma eficiente.' },
        { name: 'MacOs', level: 70, description: 'Utilizo o MacOS como meu principal sistema de desenvolvimento para criar aplicações móveis (iOS) e para realizar trabalhos de programação em diversas linguagens. Tenho experiência em configurar ambientes de desenvolvimento como Spring, Node.js e React, além de gerenciar versões e dependências de forma eficaz.' },
        { name: 'Windows', level: 90, description: 'Com amplo domínio do sistema operacional Windows, utilizo-o para desenvolvimento de software, configuração de ambientes de testes e servidores, além de realizar tarefas administrativas. Tenho experiência com ferramentas como Visual Studio e PowerShell para automação e integração contínua.' },
        { name: 'Redes', level: 40, description: 'Embora meu conhecimento de redes ainda esteja em desenvolvimento, compreendo conceitos básicos como endereçamento IP, sub-redes, protocolos (TCP/IP, HTTP), e configuração de redes locais. Estou atualmente aprofundando meus estudos e buscando aplicabilidade em configurações de servidores e redes corporativas.' },
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
              Habilidades Técnicas
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