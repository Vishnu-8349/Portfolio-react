import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Lenis from 'lenis';

import Loader from './Components/Loader';
import CustomCursor from './Components/CustomCursor';
import PremiumBackground from './Components/PremiumBackground';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import MyWork from './Components/MyWork/MyWork';
import Skills from './Components/Skills/Skills';
import Experience from './Components/Experience/Experience';
import Terminal from './Components/Terminal';
import Certificates from './Components/Certificates';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });

    let animationFrameId;
    function raf(time) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }

    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, [isLoading]);

  return (
    <>
      <Loader onComplete={() => setIsLoading(false)} />
      
      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative min-h-screen text-[#F8FAFC] selection:bg-blue-500/20 selection:text-white"
        >
          <CustomCursor />
          <PremiumBackground />
          <Navbar />

          <main>
            <Hero />
            <About />
            <MyWork />
            <Skills />
            <Experience />
            <Terminal />
            <Certificates />
            <Contact />
          </main>

          <Footer />
        </motion.div>
      )}
    </>
  );
};

export default App;
