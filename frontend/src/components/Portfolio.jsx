import React from 'react';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Education from './Education';
import Certifications from './Certifications';
import Contact from './Contact';
import Footer from './Footer';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
};

export default Portfolio;