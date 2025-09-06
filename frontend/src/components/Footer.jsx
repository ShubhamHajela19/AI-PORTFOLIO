import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { mockData } from '../data/mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: mockData.personal.github,
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: mockData.personal.linkedin,
      label: 'LinkedIn'
    },
    {
      icon: Mail,
      href: `mailto:${mockData.personal.email}`,
      label: 'Email'
    }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand & Description */}
          <div>
            <h3 className="text-xl font-bold mb-4">Shubham Hajela</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Computer Science Student & Aspiring System Engineer specializing in Cloud Computing, 
              System Administration, and AWS Infrastructure.
            </p>
            <div className="text-gray-400 text-sm">
              📍 {mockData.personal.location}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
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
                  className="block text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="space-y-3 mb-6">
              <div className="text-gray-400 text-sm">
                <a 
                  href={`mailto:${mockData.personal.email}`}
                  className="hover:text-white transition-colors"
                >
                  {mockData.personal.email}
                </a>
              </div>
              <div className="text-gray-400 text-sm">
                <a 
                  href={`tel:${mockData.personal.phone}`}
                  className="hover:text-white transition-colors"
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
                  className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Shubham Hajela. All rights reserved.
            </div>
            <div className="flex items-center text-gray-400 text-sm">
              Built with <Heart size={14} className="mx-1 text-red-500" /> and React
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;