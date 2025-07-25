import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, X, ChevronRight, ArrowLeft, ArrowRight, Github } from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fullScreenImage, setFullScreenImage] = useState(null);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleNextImage = (e) => {
    e.stopPropagation();
    if (!selectedProject) return;
    setCurrentImageIndex((prevIndex) => 
      (prevIndex + 1) % selectedProject.images.length
    );
  };

  const handlePrevImage = (e) => {
    e.stopPropagation();
    if (!selectedProject) return;
    setCurrentImageIndex((prevIndex) =>
      (prevIndex - 1 + selectedProject.images.length) % selectedProject.images.length
    );
  };

  const handleImageClick = (e, imageSrc) => {
    e.stopPropagation();
    setFullScreenImage(imageSrc);
  };

  

  const projects = [

    {
      title: "easyCar",
      description: "O EasyCar é uma aplicação mobile desenvolvida em React Native, criada para facilitar o transporte urbano, conectando passageiros e motoristas de forma eficiente. Através de uma interface intuitiva e fluída, os utilizadores podem solicitar corridas, acompanhar o status da viagem e interagir com os motoristas em tempo real.",
      images: [
        "/assets/images/projects/easyCar.jpg",
        "/assets/images/projects/easycar2.jpg",

        "/assets/images/projects/easycar4.jpg",
        "/assets/images/projects/easycar3.jpg",
        "/assets/images/projects/easycar5.jpg",
        // You can add more images here if desired
      ],
      tech: ["Node.js", "SQLite", "ReactNative"],
      githubUrl: "https://github.com/monjane10/easyCar-mobile",
      details: {
        overview:
          "O EasyCar é uma aplicação mobile desenvolvida em React Native, criada para facilitar o transporte urbano, conectando passageiros e motoristas de forma eficiente. Através de uma interface intuitiva e fluída, os utilizadores podem solicitar corridas, acompanhar o status da viagem e interagir com os motoristas em tempo real.",
        features: [
          "O utilizador clica no botão 'Solicitar Corrida' para iniciar o processo.",
          "O utilizador insere o local de partida e destino, e o sistema calcula a rota mais eficiente.",
          "O utilizador pode visualizar o perfil do motorista, incluindo nome, foto e avaliação.",
          "O motorista recebe a solicitação e pode aceitar ou recusar a corrida.",
          "Após a aceitação, o utilizador pode acompanhar a localização do motorista em tempo real.",
          "O utilizador pode avaliar o motorista após a conclusão da corrida, contribuindo para a melhoria do serviço.",
          "A aplicação conta com uma interface amigável e um design moderno e intuitivo, facilitando a navegação e o uso.",
        ],
      },
    },

    // 1) Social Media Application (No demo URL, so no button will show)
    {
      title: "DietAssistent",
      description: "Uma aplicação móvel inteligente capaz de gerar dietas personalizadas com base nos dados do utilizador, utilizando inteligência artificial para otimizar resultados.",
      images: [
        "/assets/images/projects/DietaAI.jpg",
        "/assets/images/projects/DietaAI2.jpg",

        "/assets/images/projects/DietaAI3.jpg",
        "/assets/images/projects/DietaAI4.jpg",
        // You can add more images here if desired
      ],
      tech: ["Node.js", "Gemini-AI", "ReactNative"],
      githubUrl: "https://github.com/monjane10/DietAssistent",
      details: {
        overview:
          "DietAssistent é uma aplicação móvel desenvolvida para ajudar os utilizadores a alcançar seus objetivos de saúde e bem-estar por meio de dietas personalizadas. Com integração com inteligência artificial, a aplicação gera planos de dieta baseados nos dados fornecidos pelo utilizador, garantindo um acompanhamento saudável e adaptado às suas necessidades.",
        features: [
          "O utilizador clica no botão 'Gerar Dieta' para iniciar o processo.",
          "Inserção de dados pessoais, como nome, altura, peso, idade, objetivo e nível de atividade física.",
          "Após preencher os dados, o utilizador clica em 'Finalizar Dieta' para obter o plano personalizado.",
          "A aplicação gera uma dieta completa com base nas informações fornecidas e apresenta ao utilizador",
          "Conta com uma interface amigável e um design moderno e intuitivo, facilitando a navegação e o uso.",
        ],
      },
    },

    {
      title: "NearBy",
      description: "Aplicação móvel desenvolvida com recurso a Dart e Flutter, que visa ajudar as pessoas a localizar documentos e objectos perdidos, pessoas desaparecidas, Efectuar denúncias e divulgar burladores.",
      images: [
        "/assets/images/projects/sidpa1.jpg",

        "/assets/images/projects/sidpa2.jpg",
        "/assets/images/projects/sidpa3.jpg",
        "/assets/images/projects/sidpa4.jpg",
        "/assets/images/projects/sidpa5.jpg",
        "/assets/images/projects/sidpa6.jpg",
        "/assets/images/projects/sidpa7.jpg",
        "/assets/images/projects/sidpa8.jpg",
        "/assets/images/projects/sidpa9.jpg",

        // Add more images if you have them
      ],
      tech: ["Flutter", "Dart", "FirebaseAuthetication", "Firebase Firestore"],
      //githubUrl: "https://github.com/monjane10/NearBy",
      details: {
        overview:
          "O SIDPA é uma aplicação móvel desenvolvida com recurso a Dart e Flutter, que visa ajudar as pessoas a localizar documentos e objectos perdidos, pessoas desaparecidas, Efectuar denúncias e divulgar burladores. Através de uma interface intuitiva e fácil de usar, os utilizadores podem registar ocorrências, pesquisar por itens perdidos e receber notificações sobre novos registos na plataforma.",
        features: [
          "Tela de login com autenticação via Email e Senha.",
          "Tela de registo de ocorrências, onde os utilizadores podem descrever o item perdido ou a ocorrência.",
          "Tela principal, onde os utilizadores podem procurar por itens perdidos ou pessoas desaparecidas e visualizar publicações recentes.",
          "O utilizador pode comentar, receber notificaões de correspondência, editar o perfil e actualizar e apagar as suas publicações",


              
              
        ],
      },
    },

    // 2) E-Commerce Platform (Updated live URL to mmauto.ae)
   /* {
      title: "NearBy",
      description: "Aplicação que ajuda os utilizadores a encontrar lugares e pessoas próximas, facilitando a conexão e a localização de serviços e eventos ao redor.",
      images: [
        "/assets/images/projects/nearby.jpg",

        "/assets/images/projects/nearby2.jpg",
        "/assets/images/projects/nearby3.jpg",

        // Add more images if you have them
      ],
      tech: ["Node.js", "MangoDb", "React Native", "Prisma"],
      githubUrl: "https://github.com/monjane10/NearBy",
      details: {
        overview:
          "NearBy é uma aplicação desenvolvida para ajudar os utilizadores a localizar lugares e pessoas ao seu redor, oferecendo funcionalidades como pesquisa por proximidade e visualização de informações detalhadas sobre os locais, além de permitir a leitura de QR codes para facilitar o acesso a locais e eventos específicos.",
        features: [
          "Tela inicial com o logo, descrição e botão para começar a usar a aplicação.",
          "Tela com um menu, mapa interativo e filtros para procurar lugares próximos.",
          "Tela para visualizar detalhes de lugares selecionados, incluindo informações sobre serviços, horários e localização.",
          "Leitura de QR code, permitindo o acesso rápido a eventos ou locais ao escanear códigos diretamente na aplicação.",
        ],
      },
    },*/

    // 3) Link Shortener (link10.de)
    {
      title: "BurguerShop",
      description: "Uma hamburgueria online onde os utilizadores podem fazer os seus pedidos de forma rápida e prática, com entrega através do WhatsApp",
      images: [
        "/assets/images/projects/burguershop.jpg",
        "/assets/images/projects/burgue.jpg",
        "/assets/images/projects/burgue1.jpg",
      ],
      tech: ["HTML", "Tailwind css", "Javascript"],
      demoUrl: "https://burguershop-puce.vercel.app",
      details: {
        overview:
          "BurguerShop é uma hamburgueria online onde os utilizadores podem fazer encomendas de hambúrgueres e outros itens diretamente no site. O pedido é enviado diretamente para o WhatsApp da hamburgueria, e a entrega é feita no endereço fornecido pelo cliente.",
        features: [
          "As encomendas só podem ser feitas entre 8h e 20h.",
          "Caso o utilizador tente fazer uma encomenda fora do horário de funcionamento, o pedido não será enviado.",
          "O utilizador deve obrigatoriamente adicionar a sua localização/endereço para completar o pedido.",
          "O utilizador tem a opção de editar ou remover itens do carrinho antes de finalizar o pedido.",
        ],
      },
    },

    // 4) Syllable Highlighter (silbenschrift.de)
    {
      title: "Loja Virtual 2024",
      description: "Aplicação web para gestão eficiente de produtos, stocks, vendas e funcionários, com foco na experiência do usuário e facilidade de operação.",
      images: [
        "/assets/images/projects/lojavirtual.jpg",
        "/assets/images/projects/lojavirtual2.jpg",
      ],
      tech: ["Spring Boot", "MySQL", "React.js", "Material UI", "Bootstrap"],
      githubUrl: "https://github.com/monjane10/Loja-Virtual-2024",
      details: {
        overview:
          "A 'Loja Virtual 2024' é uma aplicação web desenvolvida para gerir todos os aspectos de um negócio de comércio eletrônico, desde o controle de stock até as vendas e a gestão de funcionários. Com uma interface amigável e recursos intuitivos, a aplicação visa tornar o gerenciamento de lojas mais eficiente e organizado.",
        features: [
          "Gestão de funcionários, permitindo a atribuição de funções e acompanhamento das atividades.",
          "Gestão de produtos e lotes, facilitando o controle de estoque e a organização de itens.",
          "Funcionalidade para realizar vendas, com acompanhamento em tempo real do status de cada transação.",
          "Emissão de recibos de vendas, proporcionando transparência e rastreabilidade das transações.",
        ],
      },
    },

    // 5) Highlight Keeper (Chrome Extension) + GitHub link
   /* {
      title: "BePrepared",
      description: "Uma solução inovadora que visa reduzir o impacto dos desastres naturais em Moçambique, promovendo a gestão eficaz de alertas e informações.",
      images: [
        "/assets/images/projects/beprepared.jpg",
        "/assets/images/projects/BePrepared2.jpg",
      ],
      tech: ["Spring Boot", "MySQL", "React.js"],
      githubUrl: "https://github.com/monjane10/bePrepared",
      details: {
        overview:
          "BePrepared é uma aplicação desenvolvida com o objetivo de minimizar o impacto dos desastres naturais em Moçambique. O sistema permite o registo de utilizadores, emissão de alertas e a gestão eficaz de informações para garantir que a população esteja melhor preparada e informada durante crises.",
        features: [
          "Contém informações sobre todos os distritos, cidades e províncias de Moçambique.",
          "Cadastro de utilizadores com papéis ADMIN e USER, facilitando a gestão de alertas e informações.",
          "Cadastro de utilizadores com papéis ADMIN e USER, facilitando a gestão de alertas e informações.",
          "Os utilizadores recebem notificações em caso de alerta, garantindo que estejam sempre informados.",
        ],
      },
    },*/

    // 6) Highlight Keeper (Chrome Extension) + GitHub link

    {
      title: "António Monjane - Portfólio Pessoal",
      description: "O site pessoal de António Monjane, um jornalista multifacetado e especialista em comunicação empresarial com mais de 10 anos de experiência no campo da comunicação, tanto na mídia tradicional quanto no digital.",
      images: [
        "/assets/images/projects/toni.jpg",
        "/assets/images/projects/tony.jpg",
      ],
      tech: ["HTML", "CSS", "Javascript"],
      demoUrl: "https://antoniomonjane.netlify.app/",
      details: {
        overview:
          "Este site apresenta o portfólio de António Monjane, incluindo sua experiência como jornalista e sua transição bem-sucedida para o setor de comunicação empresarial. Ele compartilha detalhes sobre sua carreira, formação e experiência no jornalismo e comunicação corporativa.",
        features: [
          "Apresentação do currículo profissional e trajetória de carreira.",
          "Informações sobre a experiência em diversas áreas da comunicação: imprensa, rádio, televisão e plataformas digitais.",
          "Contacto direto através de WhatsApp e redes sociais.",
          "Links para o CV e outras informações relevantes.",
        ],
      },
    },

    {
      title: "Agência de Viagens",
      description: "Landing page interativa e informativa para uma agência de viagens, permitindo que os usuários consultem pacotes e entrem em contato diretamente para planejar suas viagens. ",
      images: [
        "/assets/images/projects/travells4.jpg",
        "/assets/images/projects/travells.jpg",
        "/assets/images/projects/travells2.jpg",
        "/assets/images/projects/travells3.jpg",
      ],
      tech: ["HTML", "CSS", "Javascript"],
      demoUrl: "https://agencia-de-viagens-orpin.vercel.app/",
      details: {
        overview:
          "Agência de Viagens é uma landing page criada para promover pacotes de viagens e facilitar o contato com clientes. O site oferece uma navegação clara e simples, com informações sobre destinos, hotéis e passagens. A página permite que os visitantes entrem em contato diretamente com a agência via WhatsApp, e-mail ou redes sociais, oferecendo uma experiência interativa e prática para planejar a viagem.",
        features: [
          "Design Responsivo e Atrativo: O layout é adaptável a diferentes dispositivos e proporciona uma navegação fluída e intuitiva.",
          "Interatividade Simples e Funcional: O site facilita o contato com a agência e a visualização das opções de viagem.",
          "Integração com Redes Sociais: Os usuários podem se conectar diretamente à agência através de WhatsApp, Instagram ou e-mail para mais informações.",
        ],
      },
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen relative bg-gray-900 overflow-hidden py-20"
    >
      {/* Animated background with gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20 animate-gradient" />
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-500/20 rounded-full"
            animate={{
              x: [
                Math.random() * window.innerWidth,
                Math.random() * window.innerWidth,
              ],
              y: [
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight,
              ],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
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
              Projectos Recentes
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer"
              onClick={() => {
                setSelectedProject(project);
                setCurrentImageIndex(0);
              }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-purple-600/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                  <span className="text-white text-lg font-medium">
                    Ver Detalhes
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-sm bg-gray-700/50 backdrop-blur-sm border border-gray-600/50 text-blue-400 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-gray-800/90 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                    {selectedProject.title}
                  </h3>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>

                <div className="relative w-full mb-6 flex items-center justify-center">
                  <button
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-700/70 p-2 rounded-full text-white hover:bg-gray-600/80 transition z-10"
                    onClick={handlePrevImage}
                  >
                    <ArrowLeft size={20} />
                  </button>

                  <img
                    src={selectedProject.images[currentImageIndex]}
                    alt={selectedProject.title}
                    className="w-full h-64 object-cover rounded-lg cursor-pointer"
                    onClick={(e) => handleImageClick(e, selectedProject.images[currentImageIndex])}
                  />

                  <button
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-700/70 p-2 rounded-full text-white hover:bg-gray-600/80 transition z-10"
                    onClick={handleNextImage}
                  >
                    <ArrowRight size={20} />
                  </button>
                </div>

                <div className="prose prose-invert max-w-none">
                  <p className="text-gray-300 mb-4">
                    {selectedProject.details.overview}
                  </p>

                  <h4 className="text-xl font-semibold text-white mb-3">
                     principais características
                  </h4>
                  <ul className="list-none space-y-2 mb-6">
                    {selectedProject.details.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-center gap-2 text-gray-300"
                      >
                        <ChevronRight className="w-5 h-5 text-blue-500" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-4">
                    {selectedProject.demoUrl && (
                      <motion.a
                        href={selectedProject.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full font-medium group"
                      >
                        <ExternalLink size={18} />
                        Ver
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                          ↗
                        </span>
                      </motion.a>
                    )}

                    {selectedProject.githubUrl && (
                      <motion.a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-6 py-2 bg-gray-700 text-white rounded-full font-medium hover:bg-gray-600 transition-colors"
                      >
                        <Github size={18} />
                        GitHub
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Full-screen image modal */}
        <AnimatePresence>
          {fullScreenImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[60] flex items-center justify-center p-4"
              onClick={() => setFullScreenImage(null)}
            >
              <button
                onClick={() => setFullScreenImage(null)}
                className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
              >
                <X size={24} />
              </button>
              <img
                src={fullScreenImage}
                alt="Full screen view"
                className="max-w-full max-h-[90vh] object-contain"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Projects;