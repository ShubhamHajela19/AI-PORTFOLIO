import React from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Download, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { mockData } from '../data/mock';

const Hero = () => {
  const handleDownloadResume = () => {
    // Mock download - will be replaced with actual functionality
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
    <section id="hero" className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Status Badge */}
          <div className="mb-8">
            <Badge variant="secondary" className="bg-green-100 text-green-700 px-4 py-2">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              Available for System Engineer Trainee roles
            </Badge>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light text-gray-900 mb-6 tracking-tight">
            Hi, I'm{' '}
            <span className="font-semibold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Shubham Hajela
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Computer Science Student & Aspiring System Engineer specializing in 
            <span className="text-gray-900 font-medium"> Cloud Computing</span>, 
            <span className="text-gray-900 font-medium"> System Administration</span>, and 
            <span className="text-gray-900 font-medium"> AWS Infrastructure</span>
          </p>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center items-center gap-6 mb-12 text-gray-600">
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>{mockData.personal.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} />
              <span>{mockData.personal.email}</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              size="lg" 
              className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 text-lg"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 text-lg"
              onClick={handleDownloadResume}
            >
              <Download size={18} className="mr-2" />
              Download Resume
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            <a 
              href={mockData.personal.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1"
            >
              <Github size={20} className="text-gray-700" />
            </a>
            <a 
              href={mockData.personal.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1"
            >
              <Linkedin size={20} className="text-gray-700" />
            </a>
            <a 
              href={`mailto:${mockData.personal.email}`}
              className="p-3 bg-white rounded-full shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1"
            >
              <Mail size={20} className="text-gray-700" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;