import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Github, ExternalLink, Code, Cloud, Bot, Image } from 'lucide-react';
import { mockData } from '../data/mock';

const Projects = () => {
  const projectIcons = {
    "Real-time Chat Application (AWS Serverless)": Code,
    "Menu-based Automation Platform": Cloud,
    "Hotel Room Booking Chatbot": Bot,
    "Image Processing Pipeline": Image
  };

  const handleProjectLink = (url, type) => {
    if (url === '#') {
      alert(`${type} link will be available soon!`);
    } else {
      window.open(url, '_blank');
    }
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gray-900 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A showcase of my technical projects demonstrating expertise in cloud computing, automation, and full-stack development
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {mockData.projects.map((project, index) => {
            const IconComponent = projectIcons[project.title] || Code;
            
            return (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-gray-100 rounded-lg group-hover:bg-gray-200 transition-colors">
                        <IconComponent size={24} className="text-gray-700" />
                      </div>
                      <div>
                        <CardTitle className="text-lg leading-tight">{project.title}</CardTitle>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, idx) => (
                      <Badge 
                        key={idx} 
                        variant="secondary" 
                        className="bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => handleProjectLink(project.github, 'GitHub')}
                      className="flex items-center gap-2 hover:bg-gray-50"
                    >
                      <Github size={16} />
                      Code
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => handleProjectLink(project.demo, 'Demo')}
                      className="flex items-center gap-2 hover:bg-gray-50"
                    >
                      <ExternalLink size={16} />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Project Stats */}
        <div className="mt-16 text-center">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="p-4">
              <div className="text-3xl font-bold text-gray-900 mb-2">4+</div>
              <div className="text-gray-600 text-sm">Major Projects</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-gray-900 mb-2">10+</div>
              <div className="text-gray-600 text-sm">AWS Services Used</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-gray-900 mb-2">70%</div>
              <div className="text-gray-600 text-sm">Automation Efficiency</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-gray-900 mb-2">100%</div>
              <div className="text-gray-600 text-sm">Serverless Architecture</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;