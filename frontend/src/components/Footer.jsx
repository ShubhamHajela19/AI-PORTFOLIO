import React from 'react';
import { Github, Linkedin, Mail, Heart, Terminal, Code, Rocket } from 'lucide-react';
import { mockData } from '../data/mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: mockData.personal.github,
      label: 'GitHub',
      color: 'hover:text-gray-300'
    },
    {
      icon: Linkedin,
      href: mockData.personal.linkedin,
      label: 'LinkedIn',
      color: 'hover:text-blue-400'
    },
    {
      icon: Mail,
      href: `mailto:${mockData.personal.email}`,
      label: 'Email',
      color: 'hover:text-cyan-400'
    }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-t from-black to-gray-900 text-white py-16 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 grid-pattern opacity-5"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand & Description */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Shubham Hajela
              </h3>
              <div className="flex items-center gap-2 mb-4">
                <Terminal size={16} className="text-cyan-400" />
                <span className="text-sm font-mono text-gray-400">System Engineer • Cloud Enthusiast</span>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Computer Science Student & Aspiring System Engineer specializing in Cloud Computing, 
                System Administration, and AWS Infrastructure. Ready to bring innovation to your team!
              </p>
            </div>
            
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>📍 {mockData.personal.location}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <Code className="text-blue-400" size={20} />
              Quick Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {[
                { label: 'About', id: 'about' },
                { label: 'Skills', id: 'skills' },
                { label: 'Projects', id: 'projects' },
                { label: 'Education', id: 'education' },
                { label: 'Certifications', id: 'certifications' },
                { label: 'Contact', id: 'contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-gray-400 hover:text-cyan-400 transition-colors text-sm py-1 hover:translate-x-1 transform duration-200"
                >
                  → {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <Rocket className="text-purple-400" size={20} />
              Let's Connect
            </h4>
            <div className="space-y-4 mb-6">
              <div className="text-gray-300 text-sm">
                <a 
                  href={`mailto:${mockData.personal.email}`}
                  className="hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2"
                >
                  <Mail size={14} />
                  {mockData.personal.email}
                </a>
              </div>
              <div className="text-gray-300 text-sm">
                <a 
                  href={`tel:${mockData.personal.phone}`}
                  className="hover:text-cyan-400 transition-colors duration-300"
                >
                  {mockData.personal.phone}
                </a>
              </div>
            </div>
            
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 bg-gray-800/30 rounded-xl border border-gray-700/50 hover:border-cyan-500/50 shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-2 transform backdrop-blur-sm group ${social.color}`}
                  aria-label={social.label}
                >
                  <social.icon size={20} className="group-hover:animate-pulse" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800/50 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm flex items-center gap-2">
              <span>© {currentYear} Shubham Hajela. All rights reserved.</span>
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            </div>
            <div className="flex items-center text-gray-400 text-sm gap-2">
              <span>Built with</span>
              <Heart size={14} className="text-red-500 animate-pulse" />
              <span>using React, Tailwind CSS & Modern Web Technologies</span>
            </div>
          </div>
          
          {/* Tech Stack Footer */}
          <div className="mt-6 text-center">
            <div className="text-xs text-gray-500 font-mono">
              {'> stack: [ "React", "Tailwind CSS", "Framer Motion", "Node.js", "FastAPI", "MongoDB" ]'}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;