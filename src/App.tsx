// App.jsx
import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
// import Reviews from './components/Reviews';
import CreativeLoader from './components/CreativeLoader';


function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <CreativeLoader />;
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <main 
        className={`transition-all duration-300 
          ${isSidebarOpen ? 'md:ml-64' : 'md:ml-20'} 
          ml-0`}
      >
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Education />
        <Skills />
        {/* <Reviews />  */}
        <Contact />
      </main>
    </div>
  );
}

export default App;