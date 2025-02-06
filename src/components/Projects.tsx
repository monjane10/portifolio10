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
    // 1) Social Media Application (No demo URL, so no button will show)
    {
      title: "Social Media Application",
      description: "A dynamic social platform with real-time features",
      images: [
        "/assets/images/projects/socialmedia.JPG",
        "/assets/images/projects/socialmedia1.JPG",

        "/assets/images/projects/socialmedia2.JPG",
        // You can add more images here if desired
      ],
      tech: ["Laravel", "PHP", "MySQL", "WebSockets", "Livewire"],
      details: {
        overview:
          "Developed a feature-rich social media platform that enables users to connect, share content, and interact in real-time. The application showcases modern web development practices and scalable architecture.",
        features: [
          "User authentication with email verification",
          "Real-time chat using WebSockets",
          "News feed with infinite scroll",
          "Photo and video sharing capabilities",
          "Friend requests and following system",
          "Real-time notifications",
          "Responsive design for all devices",
        ],
      },
    },

    // 2) E-Commerce Platform (Updated live URL to mmauto.ae)
    {
      title: "E-Commerce Platform",
      description: "Full-featured online shopping solution",
      images: [
        "/assets/images/projects/ecommerce1.JPG",

        "/assets/images/projects/ecommerce.JPG",
        "/assets/images/projects/ecommerce2.JPG",

        // Add more images if you have them
      ],
      tech: ["Laravel", "Livewire", "MySQL", "Stripe"],
      demoUrl: "https://mmauto.ae",
      details: {
        overview:
          "Built a comprehensive e-commerce platform with advanced features for both customers and administrators. The system handles everything from product management to order processing.",
        features: [
          "Product catalog with categories and filters",
          "Shopping cart and wishlist functionality",
          "Secure payment processing with Stripe",
          "Order tracking and management",
          "Admin dashboard with analytics",
          "Inventory management system",
          "Customer reviews and ratings",
        ],
      },
    },

    // 3) Link Shortener (link10.de)
    {
      title: "Link Shortener",
      description: "Convert long URLs into short links, manage them, and more",
      images: [
        "/assets/images/projects/linkshort1.png",
        "/assets/images/projects/linkshort2.png",
      ],
      tech: ["Core PHP", "MySQL"],
      demoUrl: "https://link10.de",
      details: {
        overview:
          "A powerful link shortener built using core PHP and MySQL. It provides an easy way to create and manage shortened URLs, link lists, QR codes, and even clipboard sharing for text snippets.",
        features: [
          "Short links: Convert long URLs into individual short links",
          "Link list: Create personal link collections",
          "QR code: Generate QR codes and download them for free",
          "Clipboard: Share text snippets, codes or any content",
        ],
      },
    },

    // 4) Syllable Highlighter (silbenschrift.de)
    {
      title: "Syllable Highlighter",
      description: "Convert text into colored syllabary for fun and effective learning",
      images: [
        "/assets/images/projects/syllable1.png",
        "/assets/images/projects/syllable2.png",
      ],
      tech: ["JavaScript", "Core PHP", "HTML", "CSS", "Bootstrap"],
      demoUrl: "https://www.silbenschrift.de/",
      details: {
        overview:
          "With this free syllabary converter, you can convert any length of text into colored syllabary. Customize colors or choose from presets, then download as a Word document. Make learning to read fun and effective!",
        features: [
          "Custom or preset color highlight options",
          "Download converted text as a Word document",
          "Effective tool to make reading lessons interactive",
          "Easy to integrate into teaching workflows",
        ],
      },
    },

    // 5) Highlight Keeper (Chrome Extension) + GitHub link
    {
      title: "Highlight Keeper",
      description: "A lightweight and intuitive Chrome extension for highlighting and organizing text",
      images: [
        "/assets/images/projects/highlight.JPG",
        "/assets/images/projects/highlight2.JPG",
      ],
      tech: ["JavaScript", "Chrome Extension", "LocalStorage"],
      githubUrl: "https://github.com/Osamaislam1/highlight-keeper",
      details: {
        overview:
          "Highlight Keeper is a Chrome extension to help you effortlessly highlight, save, and organize important text from any webpage. Whether you're researching, reading articles, or managing content, your key information is always at your fingertips.",
        features: [
          "Instant text highlighting and saving",
          "Titles and tags for better note organization",
          "Real-time search and advanced tag filtering",
          "Export notes as .txt files, including metadata",
          "Local storage for offline support and privacy",
          "Future enhancements like cloud sync and imports",
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
              Featured Projects
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
                    View Details
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
                    Key Features
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
                        Live Demo
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