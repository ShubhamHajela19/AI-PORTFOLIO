import React, { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Download, Github, Linkedin, Mail, MapPin, Terminal, Code2 } from 'lucide-react';
import { mockData } from '../data/mock';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleDownloadResume = () => {
    console.log('Downloading resume...');
    alert('Resume download functionality will be implemented!');
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black pt-16 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_50%)]"></div>
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"
          style={{
            left: mousePosition.x / 10,
            top: mousePosition.y / 10,
            transform: 'translate(-50%, -50%)'
          }}
        ></div>
        
        {/* Floating Code Elements */}
        <div className="absolute top-20 left-10 opacity-20 text-cyan-400 font-mono text-sm animate-pulse">
          {'<Developer />'}
        </div>
        <div className="absolute top-40 right-20 opacity-20 text-blue-400 font-mono text-sm animate-pulse animation-delay-1000">
          {'function() { return skills; }'}
        </div>
        <div className="absolute bottom-40 left-20 opacity-20 text-purple-400 font-mono text-sm animate-pulse animation-delay-2000">
          {'const passion = true;'}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          {/* Status Badge */}
          <div className="mb-8 animate-fade-in">
            <Badge className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-400 border border-green-500/30 px-6 py-3 text-sm backdrop-blur-sm hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
              Available for System Engineer Trainee roles
            </Badge>
          </div>

          {/* Main Heading */}
          <div className="mb-6 animate-slide-up">
            <div className="text-gray-400 text-lg mb-2 font-mono">{'> whoami'}</div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light text-white mb-4 tracking-tight">
              Hi, I'm{' '}
              <span className="font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient-x">
                Shubham Hajela
              </span>
            </h1>
            <div className="flex items-center justify-center gap-4 text-cyan-400 mb-6">
              <Terminal size={24} className="animate-pulse" />
              <Code2 size={24} className="animate-pulse animation-delay-500" />
            </div>
          </div>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed animate-fade-in animation-delay-1000">
            Computer Science Student & Aspiring System Engineer specializing in 
            <span className="text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text font-semibold"> Cloud Computing</span>, 
            <span className="text-transparent bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text font-semibold"> System Administration</span>, and 
            <span className="text-transparent bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text font-semibold"> AWS Infrastructure</span>
          </p>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center items-center gap-6 mb-12 text-gray-400 animate-fade-in animation-delay-1500">
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 rounded-full backdrop-blur-sm border border-gray-700/50">
              <MapPin size={16} className="text-cyan-400" />
              <span>{mockData.personal.location}</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 rounded-full backdrop-blur-sm border border-gray-700/50">
              <Mail size={16} className="text-cyan-400" />
              <span>{mockData.personal.email}</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-fade-in animation-delay-2000">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-8 py-4 text-lg shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transform hover:scale-105 transition-all duration-300 border-0 group"
              onClick={() => scrollToSection('contact')}
            >
              <span className="group-hover:animate-pulse">Get In Touch</span>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 px-8 py-4 text-lg backdrop-blur-sm bg-gray-900/30 transform hover:scale-105 transition-all duration-300 group"
              onClick={handleDownloadResume}
            >
              <Download size={18} className="mr-2 group-hover:animate-bounce" />
              Download Resume
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 animate-fade-in animation-delay-2500">
            <a 
              href={mockData.personal.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 bg-gray-800/50 rounded-full shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:-translate-y-2 transform border border-gray-700/50 hover:border-cyan-500/50 backdrop-blur-sm group"
            >
              <Github size={24} className="text-gray-400 group-hover:text-cyan-400 transition-colors duration-300" />
            </a>
            <a 
              href={mockData.personal.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 bg-gray-800/50 rounded-full shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:-translate-y-2 transform border border-gray-700/50 hover:border-blue-500/50 backdrop-blur-sm group"
            >
              <Linkedin size={24} className="text-gray-400 group-hover:text-blue-400 transition-colors duration-300" />
            </a>
            <a 
              href={`mailto:${mockData.personal.email}`}
              className="p-4 bg-gray-800/50 rounded-full shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:-translate-y-2 transform border border-gray-700/50 hover:border-purple-500/50 backdrop-blur-sm group"
            >
              <Mail size={24} className="text-gray-400 group-hover:text-purple-400 transition-colors duration-300" />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-cyan-500/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gradient-to-b from-cyan-400 to-transparent rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;